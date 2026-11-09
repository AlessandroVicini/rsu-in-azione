const sectors=['laterizi','cemento','lapidei','legno'];
const pages={colloquio:1,mandato:2,tavolo:2,esito:2,assemblea:3,dibattito:3,voto:3,fine:3};
const fail=(status,message)=>{throw Object.assign(new Error(message),{status});};
const hash=async s=>Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s))),x=>x.toString(16).padStart(2,'0')).join('');
const token=s=>{if(typeof s!=='string'||!/^[a-f0-9]{64}$/.test(s))fail(401,'Chiave di accesso non valida.');return s;};
const clean=(s,max)=>{if(typeof s!=='string'||!s.trim()||s.length>max)fail(400,'Controlla i campi inseriti.');return s.trim();};
const pubRoom=r=>({code:r.code,title:r.title,phase:r.phase,paused:!!r.paused,closed:!!r.closed,expires:r.expires});
const pubTeam=t=>({id:t.id,name:t.name,sector:t.sector,state:JSON.parse(t.state),revision:t.revision,feedback:t.feedback,messages:JSON.parse(t.messages),updated:t.updated});
const initial=(name,sector)=>({version:1,team:name,sec:sector,page:'colloquio',answers:[],draft:{},dialoghi:[],log:[],interventi:[],eventi:[],verifiche:{},tentativo:1});
async function body(req){
 if(!req.headers.get('content-type')?.includes('application/json'))fail(415,'Richiesta JSON necessaria.');
 const reader=req.body?.getReader();if(!reader)fail(400,'Richiesta vuota.');let size=0,chunks=[];
 while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>150000){await reader.cancel();fail(413,'Fascicolo troppo grande. Esporta e apri una nuova sessione.');}chunks.push(value);}
 const bytes=new Uint8Array(size);let offset=0;for(const c of chunks){bytes.set(c,offset);offset+=c.length;}
 try{const b=JSON.parse(new TextDecoder().decode(bytes));if(!b||typeof b!=='object'||Array.isArray(b))throw 0;return b;}catch{fail(400,'Richiesta non leggibile.');}
}
function validateState(s,t,r){
 if(!s||typeof s!=='object'||Array.isArray(s)||s.version!==1||s.team!==t.name||s.sec!==t.sector||!Object.hasOwn(pages,s.page))fail(400,'Fascicolo non valido.');
 for(const k of ['answers','dialoghi','log','interventi','eventi'])if(!Array.isArray(s[k]))fail(400,'Fascicolo incompleto.');
 if(s.answers.length>3||s.interventi.length>3||s.log.length>30||!s.draft||typeof s.draft!=='object'||Array.isArray(s.draft))fail(400,'Fascicolo non valido.');
 if(s.page!=='colloquio'&&s.answers.length!==3)fail(400,'Completate i tre colloqui.');
 if(['tavolo','esito','assemblea','dibattito','voto','fine'].includes(s.page)&&(!s.piattaforma||!Array.isArray(s.offerte)))fail(400,'Piattaforma mancante.');
 if(pages[s.page]===3&&!s.esito)fail(400,'Verbale mancante.');
 if(['dibattito','voto','fine'].includes(s.page)&&!s.apertura)fail(400,'Apertura assemblea mancante.');
 if(s.page==='fine'&&!s.voto)fail(400,'Esito della consultazione mancante.');
 const old=JSON.parse(t.state),protectedFields=r.phase===1?['negozio','piattaforma','offerte','esito','apertura','interventi','voto','log']:r.phase===2?['apertura','interventi','voto','log']:[];
 if(protectedFields.some(k=>JSON.stringify(s[k]??null)!==JSON.stringify(old[k]??null)))fail(423,'Attendete che il formatore apra la fase successiva.');
 if(pages[s.page]>r.phase&&s.page!==(r.phase===1?'mandato':'assemblea'))fail(423,'Questa fase non è ancora aperta.');
 if(pages[s.page]>r.phase&&Object.keys(s.draft).length)fail(423,'Questa fase non è ancora aperta.');
 s.feedback=t.feedback;s.eventi=JSON.parse(t.messages).map(m=>m.text);
 const raw=JSON.stringify(s);if(raw.length>120000)fail(413,'Fascicolo troppo grande.');return raw;
}
export async function handleAPI(req,db){
 const url=new URL(req.url),origin=req.headers.get('Origin');
 const headers={'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','Vary':'Origin','X-Content-Type-Options':'nosniff'};
 const okOrigin=!origin||[url.origin,'https://alessandrovicini.github.io','http://terminal.local:4173'].includes(origin);
 const response=(data,status=200)=>new Response(status===204?null:JSON.stringify(data),{status,headers});
 if(!okOrigin)return response({error:'Origine non autorizzata.'},403);
 if(origin)headers['Access-Control-Allow-Origin']=origin;
 if(req.method==='OPTIONS'){headers['Access-Control-Allow-Methods']='GET,POST,PUT,OPTIONS';headers['Access-Control-Allow-Headers']='Content-Type,Authorization';return response(null,204);}
 try{
 const parts=url.pathname.split('/').filter(Boolean).slice(2),method=req.method;
 const first=(sql,...args)=>db.prepare(sql).bind(...args).first();
 const run=(sql,...args)=>db.prepare(sql).bind(...args).run();
 if(parts.length===1&&parts[0]==='health'&&method==='GET')return response({ok:true});
 if(parts[0]!=='sessions')fail(404,'Risorsa non trovata.');
 if(parts.length===1&&method==='POST'){
  const b=await body(req),h=await hash(token(b.token)),title=clean(b.title,100),now=Date.now();
  const existing=await first('SELECT * FROM sessions WHERE host_hash=?',h);
  if(existing)return response({room:pubRoom(existing)});
  for(let n=0;n<5;n++){
   const alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789',code=Array.from(crypto.getRandomValues(new Uint8Array(8)),v=>alphabet[v%32]).join('');
   await run('INSERT OR IGNORE INTO sessions(code,host_hash,title,created,expires) VALUES(?,?,?,?,?)',code,h,title,now,now+30*86400000);
   const saved=await first('SELECT * FROM sessions WHERE host_hash=?',h);if(saved)return response({room:pubRoom(saved)},201);
  }fail(503,'Riprova la creazione della sessione.');
 }
 if(parts.length!==3||!/^[A-Z2-9]{8}$/.test(parts[1]))fail(404,'Sessione non trovata.');
 const code=parts[1],action=parts[2],r=await first('SELECT * FROM sessions WHERE code=?',code);
 if(!r)fail(404,'Codice sessione non trovato.');if(r.expires<Date.now())fail(410,'Sessione scaduta dopo 30 giorni.');
 if(action==='join'&&method==='POST'){
  const b=await body(req),h=await hash(token(b.token));
  const old=await first('SELECT * FROM teams WHERE token_hash=? AND room=?',h,code);if(old)return response({room:pubRoom(r),team:pubTeam(old)});
  if(r.closed)fail(423,'La sessione è conclusa.');const name=clean(b.name,50),sector=b.sector;
  if(!sectors.includes(sector))fail(400,'Scegli un settore.');const id=crypto.randomUUID();
  await run('INSERT OR IGNORE INTO teams(id,room,token_hash,name,sector,state,updated) SELECT ?,?,?,?,?,?,? WHERE (SELECT COUNT(*) FROM teams WHERE room=?)<40',id,code,h,name,sector,JSON.stringify(initial(name,sector)),Date.now(),code);
  const saved=await first('SELECT * FROM teams WHERE token_hash=? AND room=?',h,code);
  if(!saved)fail(409,'Nome squadra già usato oppure limite di 40 squadre raggiunto.');return response({room:pubRoom(r),team:pubTeam(saved)},201);
 }
 const bearer=req.headers.get('Authorization')?.replace(/^Bearer /,'');const h=await hash(token(bearer));
 if(action==='team'){
  const t=await first('SELECT * FROM teams WHERE room=? AND token_hash=?',code,h);if(!t)fail(403,'Chiave squadra non riconosciuta.');
  if(method==='GET')return response({room:pubRoom(r),team:pubTeam(t)});
  if(method==='PUT'){
   if(r.paused||r.closed)fail(423,r.closed?'Sessione conclusa.':'Sessione in pausa.');
   const b=await body(req);if(!Number.isInteger(b.revision)||b.revision!==t.revision)fail(409,'Il fascicolo è stato aggiornato su un’altra scheda.');
   const raw=validateState(b.state,t,r);
   const saved=await run('UPDATE teams SET state=?,revision=revision+1,updated=? WHERE id=? AND revision=? AND EXISTS(SELECT 1 FROM sessions WHERE code=? AND paused=0 AND closed=0 AND phase=?)',raw,Date.now(),t.id,b.revision,code,r.phase);
   if(!saved.meta.changes)fail(409,'Sessione aggiornata. Ricarica il fascicolo.');
   return response({room:pubRoom(r),team:pubTeam(await first('SELECT * FROM teams WHERE id=?',t.id))});
  }
  fail(405,'Metodo non consentito.');
 }
 if(h!==r.host_hash)fail(403,'Questa azione è riservata al formatore.');
 if(action==='host'){
  if(method==='PUT'){
   const b=await body(req);if(![1,2,3].includes(b.phase)||typeof b.paused!=='boolean'||typeof b.closed!=='boolean')fail(400,'Impostazioni non valide.');
   await run('UPDATE sessions SET phase=?,paused=?,closed=? WHERE code=?',b.phase,Number(b.paused),Number(b.closed),code);
  }else if(method!=='GET')fail(405,'Metodo non consentito.');
  const all=await db.prepare('SELECT * FROM teams WHERE room=? ORDER BY name').bind(code).all();
  return response({room:pubRoom(await first('SELECT * FROM sessions WHERE code=?',code)),teams:all.results.map(pubTeam)});
 }
 if(action==='message'&&method==='POST'){
  const b=await body(req),message={id:crypto.randomUUID(),text:clean(b.text,1600),at:Date.now()};
  const target=b.teamId?await first('SELECT * FROM teams WHERE id=? AND room=?',b.teamId,code):null;
  if(b.teamId&&!target)fail(404,'Squadra non trovata.');
  const full=await first('SELECT id FROM teams WHERE room=? AND (? IS NULL OR id=?) AND json_array_length(messages)>=60',code,b.teamId||null,b.teamId||null);
  if(full)fail(409,'Limite di 60 messaggi per squadra raggiunto.');
  await run("UPDATE teams SET messages=json_insert(messages,'$[#]',json(?)) WHERE room=? AND (? IS NULL OR id=?)",JSON.stringify(message),code,b.teamId||null,b.teamId||null);
  return response({ok:true});
 }
 if(action==='feedback'&&method==='PUT'){
  const b=await body(req);if(typeof b.feedback!=='string'||b.feedback.length>4000)fail(400,'Osservazioni troppo lunghe.');
  const result=await run('UPDATE teams SET feedback=? WHERE room=? AND id=?',b.feedback,code,b.teamId);
  if(!result.meta.changes)fail(404,'Squadra non trovata.');return response({ok:true});
 }
 fail(404,'Risorsa non trovata.');
 }catch(e){if(!e.status)console.error('RSU API',e.message);return response({error:e.status?e.message:'Servizio temporaneamente non disponibile. Riprova.'},e.status||503);}
}
