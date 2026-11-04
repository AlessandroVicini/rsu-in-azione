/* Shared classroom sessions. Credentials are private bearer keys, never in a URL. */
(() => {
 'use strict';
 const API=location.hostname.endsWith('github.io')?'https://rsu-in-azione-laboratorio.filca.chatgpt.site/api/rsu':'/api/rsu';
 const KEYLIVE='rsu-live-v2',stage={colloquio:1,mandato:2,tavolo:2,esito:2,assemblea:3,dibattito:3,voto:3,fine:3};
 let auth=null,room=null,teams=[],revision=0,dirty=0,acked=0,saving=false,polling=false,timer,conflict=false,notice='',view='game',selected=null,ready=false;
 const read=k=>{try{return JSON.parse(localStorage.getItem(k));}catch{return null;}};
 const write=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch{notice='Memoria del browser non disponibile: scarica la chiave e il fascicolo.';}};
 const random=()=>Array.from(crypto.getRandomValues(new Uint8Array(32)),v=>v.toString(16).padStart(2,'0')).join('');
 const pendingKey=()=>KEYLIVE+'-draft-'+auth.id;
 const button=(id,label)=>'<button type="button" class="quiet" id="'+id+'">'+label+'</button>';
 async function request(path,method='GET',data,credential=auth){
  const headers={'Content-Type':'application/json'};if(credential?.token)headers.Authorization='Bearer '+credential.token;
  let res;try{res=await fetch(API+path,{method,headers,body:data===undefined?undefined:JSON.stringify(data),signal:AbortSignal.timeout(20000)});}catch{throw new Error('Collegamento interrotto. Le modifiche restano su questo computer; riprova.');}
  let json;try{json=await res.json();}catch{throw new Error('Il servizio non risponde correttamente. Riprova tra poco.');}
  if(!res.ok)throw Object.assign(new Error(json.error||'Richiesta non riuscita.'),{status:res.status});return json;
 }
 const path=action=>'/sessions/'+auth.code+'/'+action;
 function remember(){sessionStorage.setItem(KEYLIVE,JSON.stringify(auth));write(KEYLIVE+'-'+auth.role,auth);}
 function annotations(t){g.feedback=t.feedback;g.eventi=t.messages.map(m=>m.text);}
 function localSave(){try{localStorage.setItem(KEY,JSON.stringify(g));}catch{}}
 function queueState(){
  if(!ready||auth?.role!=='team')return;dirty++;write(pendingKey(),{state:g,revision});clearTimeout(timer);timer=setTimeout(flush,700);
 }
 async function flush(){
  if(!ready||auth?.role!=='team'||saving||dirty===acked||conflict||room.paused||room.closed)return;
  saving=true;refreshUI();const sent=dirty,payload=JSON.parse(JSON.stringify(g));
  try{const result=await request(path('team'),'PUT',{revision,state:payload});revision=result.team.revision;acked=sent;room=result.room;annotations(result.team);notice='';
   if(dirty===acked){localStorage.removeItem(pendingKey());}else{write(pendingKey(),{state:g,revision});}
  }catch(e){notice=e.message;if(e.status===409)conflict=true;}
  finally{saving=false;refreshUI();}
 }
 function refreshUI(){
  $('regia').hidden=auth?.role==='team';
  if(!auth||!ready){$('livebar')?.remove();return;}
  let bar=$('livebar');if(!bar){bar=document.createElement('section');bar.id='livebar';bar.className='livebar';$('app').before(bar);}
  const status=room.closed?'Sessione conclusa':room.paused?'In pausa':'Fase aperta: '+PHASES[room.phase-1];
  bar.innerHTML='<div><b>'+esc(room.title)+'</b> <span class="tag">Codice '+esc(room.code)+'</span><p>'+esc(status)+(auth.role==='team'?' · '+(saving?'Salvataggio…':dirty!==acked?'Modifiche da sincronizzare':'Risposte salvate online'):' · Regia del formatore')+'</p></div><div class="actions">'+button('savekey','Scarica chiave di accesso')+button('livehome',auth.role==='host'?'Apri regia':'La tua sessione')+'</div>'+(notice?'<p role="alert" class="notice">'+esc(notice)+'</p>':'')+(conflict?'<p>Esporta la copia locale prima di caricare il fascicolo aggiornato.</p>'+button('localcopy','Esporta copia locale')+button('remote','Carica fascicolo online'):'');
  $('savekey').onclick=saveKey;$('livehome').onclick=()=>auth.role==='host'?dashboard():lobby();
  if(conflict){$('localcopy').onclick=snapshot;$('remote').onclick=async()=>{if(!confirm('Sostituire la copia locale con quella online? Esporta prima le modifiche da conservare.'))return;try{const result=await request(path('team'));g=result.team.state;revision=result.team.revision;dirty=acked=0;conflict=false;notice='';localStorage.removeItem(pendingKey());annotations(result.team);localSave();render();}catch(e){notice=e.message;refreshUI();}};}
  if(auth.role==='team'&&view==='game'){
   const gate=room.closed||room.paused||stage[g.page]>room.phase||conflict;
   document.querySelectorAll('#play input,#play textarea,#play select,#play button,#chiedi,#ritorna').forEach(el=>{el.disabled=gate||(el.id==='chiedi'&&g.dialoghi.includes(g.answers.length));});
   $('phasegate')?.remove();if(gate){const el=document.createElement('p');el.id='phasegate';el.className='callout';el.setAttribute('role','status');el.textContent=conflict?'Risolvi il conflitto di salvataggio prima di continuare.':room.closed?'Il formatore ha concluso la sessione. Puoi consultare ed esportare il fascicolo.':room.paused?'Pausa di confronto in aula. Il formatore riaprirà il lavoro.':'Avete completato questa fase. Attendete che il formatore apra '+PHASES[stage[g.page]-1]+'.';$('app').prepend(el);}
   let messages=$('teacher-live');if(!messages){messages=document.createElement('section');messages.id='teacher-live';messages.className='panel';$('app').append(messages);}
   messages.hidden=!g.eventi.length&&!g.feedback;messages.innerHTML='<h3>Dal formatore</h3>'+g.eventi.map(t=>'<p>'+esc(t)+'</p>').join('')+(g.feedback?'<b>Osservazioni</b><p>'+esc(g.feedback)+'</p>':'');
  }
 }
 async function activate(a,result){
  auth=a;room=result.room;notice='';conflict=false;dirty=acked=0;ready=true;remember();
  if(a.role==='host'){teams=result.teams||[];dashboard();}
  else{revision=result.team.revision;auth.id=result.team.id;remember();g=result.team.state;const pending=read(pendingKey());if(pending){g=pending.state;dirty=1;if(pending.revision!==revision){conflict=true;notice='Esiste una bozza locale e il fascicolo online è cambiato. Esporta la bozza o carica quello online.';}}
   annotations(result.team);localSave();home=false;view='game';render();}
  $('dlg').close();await poll();
 }
 async function restore(a){
  if(!a||!['host','team'].includes(a.role)||!/^[A-Z2-9]{8}$/.test(a.code)||!/^[a-f0-9]{64}$/.test(a.token))throw new Error('Chiave non valida.');
  const result=await request('/sessions/'+a.code+'/'+a.role,'GET',undefined,a);await activate(a,result);
 }
 function saveKey(){download(JSON.stringify({type:'rsu-access-v2',...auth},null,2),'Chiave-RSU-'+auth.role+'-'+auth.code+'.json');}
 function lobby(){
  modal('Sessione online',auth?'<p>Sei collegato come <b>'+esc(auth.role==='host'?'formatore':g.team)+'</b> alla sessione '+esc(auth.code)+'.</p><p>Condividi con le squadre solo il codice sessione. La chiave scaricata permette di riprendere il tuo ruolo su un altro computer: conservala riservata.</p><div class="actions">'+button('backlive','Torna al lavoro')+button('keymodal','Scarica chiave')+button('leave','Esci dalla sessione')+'</div>':
   '<p>Un solo gioco, tre fasi. Il formatore crea la sessione e comunica il codice. Ogni squadra entra dal proprio computer e sceglie il settore.</p><p class="slim">Le sessioni sono accessibili per 30 giorni. Usa nomi di fantasia ed esporta i fascicoli al termine del corso.</p><div class="cols"><section class="panel"><h3>Formatore</h3><form id="create-live"><label>Titolo del corso<input name="title" maxlength="100" required value="Laboratorio RSU"></label>'+primary('Crea sessione')+'</form></section><section class="panel"><h3>Squadra</h3><form id="join-live"><label>Codice sessione<input name="code" required minlength="8" maxlength="8" autocomplete="off" style="text-transform:uppercase"></label><label>Nome squadra<input name="name" required maxlength="50"></label>'+select('sector','Settore',SECT.map(k=>[k,SHORT[k]]))+primary('Entra nella sessione')+'</form></section></div><section class="panel"><h3>Riprendi una sessione</h3><div class="actions">'+(read(KEYLIVE+'-host')?button('last-host','Riprendi come formatore'):'')+(read(KEYLIVE+'-team')?button('last-team','Riprendi come squadra'):'')+'</div><label>Carica la chiave di accesso salvata<input id="restore-key" type="file" accept=".json"></label></section>');
  $('dc').insertAdjacentHTML('beforeend','<p id="live-error" role="alert"></p>');
  const error=e=>{if($('live-error'))$('live-error').textContent=e.message;};
  if(auth){$('backlive').onclick=()=>{$('dlg').close();auth.role==='host'?dashboard():(view='game',home=false,render());};$('keymodal').onclick=saveKey;$('leave').onclick=()=>{
   if(saving||dirty!==acked){error(new Error('Prima di uscire attendi il salvataggio oppure esporta il fascicolo e risolvi le modifiche pendenti.'));return;}
   auth=null;room=null;ready=false;sessionStorage.removeItem(KEYLIVE);view='game';home=true;render();lobby();};return;}
  let createToken=random(),joinToken=random();
  const submit=async(e,fn)=>{e.preventDefault();const b=e.target.querySelector('button[type=submit]');b.disabled=true;try{await fn(new FormData(e.target));}catch(err){error(err);}finally{b.disabled=false;}};
  $('create-live').onsubmit=e=>submit(e,async d=>{const result=await request('/sessions','POST',{token:createToken,title:d.get('title')},null);await activate({role:'host',token:createToken,code:result.room.code},result);saveKey();});
  $('join-live').onsubmit=e=>submit(e,async d=>{const code=d.get('code').trim().toUpperCase();const result=await request('/sessions/'+code+'/join','POST',{token:joinToken,name:d.get('name'),sector:d.get('sector')},null);await activate({role:'team',token:joinToken,code,id:result.team.id},result);saveKey();});
  for(const role of ['host','team'])if($('last-'+role))$('last-'+role).onclick=()=>restore(read(KEYLIVE+'-'+role)).catch(error);
  $('restore-key').onchange=async e=>{try{const f=e.target.files[0];if(!f||f.size>4000)throw new Error('File chiave non valido.');await restore(JSON.parse(await f.text()));}catch(err){error(err);}};
 }
 function dashboard(){
  view='host';selected=null;$('fascicolo').hidden=true;
  $('app').innerHTML='<div class="introbar"><div><span class="eyebrow">Regia condivisa</span><h1>Il lavoro delle squadre</h1><p>Comunica il codice <b>'+esc(room.code)+'</b>. Le risposte e le bozze si aggiornano ogni pochi secondi.</p></div></div><section class="panel"><h3>Conduci il laboratorio</h3><div class="actions" id="phasebuttons">'+PHASES.map((p,i)=>button('phase'+(i+1),'Apri '+(i+1)+' · '+p)).join('')+button('pause','Metti in pausa')+button('finishlive','Concludi sessione')+'</div><p id="roomstate"></p></section><div class="actions">'+button('exportall','Esporta tutti i fascicoli')+button('answerkeys','Riscontri per il formatore')+'</div><div id="teamcards" class="grid"></div><section class="panel"><h3>Messaggio a tutte le squadre</h3><form id="broadcast"><label>Istruzione o imprevisto<textarea name="text" required maxlength="1600"></textarea></label>'+primary('Invia a tutte le squadre')+'<p id="broadcaststatus" role="status"></p></form></section>';
  for(let n=1;n<=3;n++)$('phase'+n).onclick=()=>settings({phase:n});
  $('pause').onclick=()=>settings({paused:!room.paused});$('finishlive').onclick=()=>settings({closed:!room.closed});
  $('exportall').onclick=()=>download(JSON.stringify({title:room.title,code:room.code,teams:teams.map(t=>({...t,state:{...t.state,feedback:t.feedback,eventi:t.messages.map(m=>m.text)}}))},null,2),'Fascicoli-RSU-'+room.code+'.json');
  $('answerkeys').onclick=()=>{modal('Riscontri per il formatore',SECT.map(k=>panel(SHORT[k],CASI[k].map(c=>'<details><summary>'+esc(c.nome+' · '+c.tema)+'</summary><p>'+esc(c.riscontro)+'</p><small>'+esc(c.fonte)+'</small></details>').join(''))).join(''));};
  $('broadcast').onsubmit=e=>{e.preventDefault();sendForm(e.target,'message','POST',{text:e.target.elements.text.value},'broadcaststatus',()=>e.target.reset());};
  updateDashboard();refreshUI();
 }
 async function settings(patch){try{const result=await request(path('host'),'PUT',{phase:room.phase,paused:room.paused,closed:room.closed,...patch});room=result.room;teams=result.teams;notice='';updateDashboard();}catch(e){notice=e.message;}refreshUI();}
 async function sendForm(formEl,action,method,data,statusId,done){
  const b=formEl.querySelector('button[type=submit]');b.disabled=true;try{await request(path(action),method,data);if($(statusId))$(statusId).textContent='Salvato e inviato.';done?.();await poll();}catch(e){if($(statusId))$(statusId).textContent=e.message;}finally{b.disabled=false;}
 }
 function updateDashboard(){
  if(view!=='host'||!$('teamcards'))return;
  $('pause').textContent=room.paused?'Riprendi il lavoro':'Metti in pausa';$('finishlive').textContent=room.closed?'Riapri sessione':'Concludi sessione';
  $('roomstate').textContent=room.closed?'Sessione conclusa: fascicoli consultabili.':room.paused?'Lavoro in pausa.':'Le squadre possono lavorare fino alla fase '+room.phase+'.';
  for(let n=1;n<=3;n++)$('phase'+n).setAttribute('aria-pressed',room.phase===n);
  $('teamcards').innerHTML=teams.length?teams.map(t=>'<section class="panel"><span class="eyebrow">'+esc(SHORT[t.sector])+'</span><h3>'+esc(t.name)+'</h3><b>'+esc(PAGE_NAMES[t.state.page])+'</b><p>'+t.state.answers.length+'/3 colloqui · '+(t.state.interventi||[]).length+'/3 interventi in assemblea</p><small>Ultimo salvataggio: '+esc(new Date(t.updated).toLocaleTimeString('it-IT'))+'</small><div class="actions"><button class="primary" type="button" data-team="'+esc(t.id)+'">Osserva la squadra</button></div></section>').join(''):panel('In attesa delle squadre','<p>Su ogni computer aprite questo gioco, scegliete “Sessione online” e inserite il codice.</p>');
  document.querySelectorAll('[data-team]').forEach(b=>b.onclick=()=>detail(b.dataset.team));
  if(selected&&$('live-report'))updateDetail();
 }
 function detail(id){
  selected=id;const t=teams.find(t=>t.id===id);
  modal('Osserva · '+t.name,'<div class="cols"><section><h3>Fascicolo in tempo reale</h3><p id="live-report" class="report"></p><h3>Bozza che la squadra sta scrivendo</h3><div id="live-draft"></div></section><aside><section class="panel"><h3>Intervieni</h3><form id="target-message"><label>Messaggio o imprevisto<textarea name="text" required maxlength="1600"></textarea></label>'+primary('Invia alla squadra')+'<p id="targetstatus" role="status"></p></form></section><section class="panel"><h3>Osservazioni formative</h3><form id="target-feedback"><label>Visibili anche alla squadra<textarea name="feedback" maxlength="4000">'+esc(t.feedback)+'</textarea></label>'+primary('Salva osservazioni')+'<p id="feedbackstatus" role="status"></p></form></section></aside></div>');
  $('target-message').onsubmit=e=>{e.preventDefault();sendForm(e.target,'message','POST',{teamId:id,text:e.target.elements.text.value},'targetstatus',()=>e.target.reset());};
  $('target-feedback').onsubmit=e=>{e.preventDefault();sendForm(e.target,'feedback','PUT',{teamId:id,feedback:e.target.elements.feedback.value},'feedbackstatus');};updateDetail();
 }
 function updateDetail(){const t=teams.find(t=>t.id===selected);if(!t)return;try{$('live-report').textContent=report({...t.state,feedback:t.feedback,eventi:t.messages.map(m=>m.text)});}catch{$('live-report').textContent='Fascicolo in aggiornamento.';}$('live-draft').innerHTML=Object.entries(t.state.draft||{}).map(([k,v])=>'<p><b>'+esc(k)+'</b><br>'+esc(v)+'</p>').join('')||'<p>Nessuna bozza in corso.</p>';}
 async function poll(){
  if(!auth||!ready||polling||saving)return;polling=true;
  try{const result=await request(path(auth.role));room=result.room;
   if(auth.role==='host'){teams=result.teams;notice='';updateDashboard();}
   else{if(dirty===acked&&revision!==result.team.revision){revision=result.team.revision;g=result.team.state;annotations(result.team);localSave();if(view==='game')render();}else annotations(result.team);if(dirty===acked)notice='';}
   refreshUI();
  }catch(e){notice=e.message;refreshUI();}finally{polling=false;}
  if(auth?.role==='team')await flush();
 }
 const nav=document.querySelector('header nav');nav.insertAdjacentHTML('afterbegin','<button class="primary" id="online">Sessione online</button>');$('online').onclick=lobby;
 $('regia').onclick=()=>auth?.role==='host'?dashboard():regia();
 $('brand').onclick=e=>{e.preventDefault();if(auth?.role==='host')dashboard();else{home=!auth;view='game';render();}};
 window.RSUOnline={queueState,refreshUI};
 window.addEventListener('beforeunload',e=>{if(dirty!==acked){e.preventDefault();e.returnValue='';}});
 window.addEventListener('online',poll);setInterval(poll,4000);
 let remembered;try{remembered=JSON.parse(sessionStorage.getItem(KEYLIVE));}catch{}
 if(remembered)restore(remembered).catch(e=>{notice=e.message;lobby();$('live-error').textContent=e.message;});
})();
