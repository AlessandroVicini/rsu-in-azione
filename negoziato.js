'use strict';
function origini(sec){
 const d=ALBERI[sec];
 return [...d.persone.map(([nome,testo],i)=>({id:'i'+i,nome,testo})),...d.gruppi.map(([nome,testo],i)=>({id:'c'+i,nome,testo}))];
}
function proposta(s,v){return ALBERI[s.sec].proposals.find(p=>p.id===v.id);}
function campoScelta(name,label){
 return '<label>'+esc(label)+'<textarea name="'+name+'" maxlength="1200">'+esc(g.draft[name]||'')+'</textarea></label>';
}
function spunta(name,label){
 return '<label class="scelta"><input name="'+name+'" type="checkbox" '+(g.draft[name]?'checked':'')+'>'+esc(label)+'</label>';
}
function collegaForm(done){
 const f=$('play');
 f.oninput=()=>{g.draft=Object.fromEntries(new FormData(f));persist();};
 f.onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));try{done(d);}catch(err){$('errore').textContent=err.message;$('errore').focus();}};
}
function richiedi(v,msg){if(!v?.trim())throw Error(msg);return v.trim();}
function nuovoMandato(){
 const dati=ALBERI[g.sec], fonti=origini(g.sec);
 const bisogni=fonti.map(f=>panel(f.nome,'<p>'+esc(f.testo)+'</p>'+spunta(f.id,'Portiamo questo bisogno in piattaforma')+(f.id.startsWith('i')?campoScelta('m'+f.id,'Motivate la scelta e indicate il seguito per la persona'):''))).join('');
 const lista=dati.proposals.map(p=>'<details '+(g.draft['p'+p.id]?'open':'')+'><summary>'+p.id+' · '+esc(p.title)+'</summary><p>'+esc(p.p)+'</p>'+spunta('p'+p.id,'Selezionate questa proposta')+campoScelta('m'+p.id,'Motivate le vostre scelte')+'<fieldset><legend>Bisogni collegati</legend>'+fonti.map(f=>spunta(p.id+f.id,f.nome)).join('')+'</fieldset></details>').join('');
 screen('Primo giro · Preparate la piattaforma',form('<h3>Quali bisogni portate al tavolo?</h3>'+bisogni+'<h3>Proposte della RSU</h3><p>Aprite le proposte, selezionate quelle da presentare e collegate ciascuna ai bisogni scelti.</p>'+lista+'<p id="errore" role="alert" tabindex="-1"></p>','Presentate la piattaforma'),panel('Dai colloqui',dossiersummary())+info());
 collegaForm(d=>{
 const scelti=fonti.filter(f=>d[f.id]);for(const t of ['i','c'])if(!scelti.some(f=>f.id.startsWith(t)))throw Error('Selezionate almeno un bisogno individuale con ricadute collettive e uno collettivo.');
 const bisogni=fonti.map(f=>({id:f.id,scelto:!!d[f.id],motivo:f.id.startsWith('i')?richiedi(d['m'+f.id],'Indicate il seguito per '+f.nome):''}));
 const voci=dati.proposals.filter(p=>d['p'+p.id]).map(p=>{
 const links=fonti.filter(f=>d[p.id+f.id]);if(!links.length||links.some(f=>!d[f.id]))throw Error('Collegate la proposta '+p.id+' ad almeno un bisogno presente in piattaforma e solo a bisogni selezionati.');
 return {id:p.id,fonti:links.map(f=>f.id),primo:richiedi(d['m'+p.id],'Motivate la proposta '+p.id)};});
 if(!voci.length||scelti.some(f=>!voci.some(v=>v.fonti.includes(f.id))))throw Error('Ogni bisogno portato al tavolo deve avere almeno una proposta collegata.');
 g.piattaforma={mandato:scelti.map(f=>f.nome).join(", ")};g.negozio={bisogni,voci};g.offerte=[];g.round=1;go('tavolo');});
}
function raccordi(s){
 const ids=s.negozio.voci.map(v=>v.id);
 return ALBERI[s.sec].incastri.filter(r=>{const nums=r[0].match(/\b\d\d\b/g)||[];return (s.sec!=='laterizi'||ids.includes(nums[0]))&&nums.filter(n=>ids.includes(n)).length>=2;});
}
function secondoGiro(){
 const n=g.negozio;
 const body=n.voci.map(v=>{const p=proposta(g,v),key='r'+v.id;return panel(p.id+' · '+p.title,'<p>'+esc(p.p)+'</p>'+note('Direzione · '+p.reply)+'<fieldset><legend>La vostra replica</legend>'+p.opts.map(([txt],i)=>'<label class="scelta"><input required type="radio" name="'+key+'" value="'+i+'" '+(g.draft[key]===String(i)?'checked':'')+'>'+esc(txt)+'</label>').join('')+'</fieldset>'+campoScelta('s'+v.id,'Motivate le vostre scelte'));}).join('');
 screen('Secondo giro · Rispondete alla direzione',form(body+'<p role="alert" tabindex="-1" id="errore"></p>','Ricevete le risposte aziendali'),panel('Domande sui punti collegati',bullet(raccordi(g).map(r=>r[2])))+info());
 collegaForm(d=>{const nuove=n.voci.map(v=>({...v,indice:Number(d['r'+v.id]),secondo:richiedi(d['s'+v.id],'Motivate la replica alla proposta '+v.id)}));n.voci=nuove;go('esito');});
}
function verbaleNuovo(s){return s.negozio.voci.map(v=>{const p=proposta(s,v),o=p.opts[v.indice];return o?panel(p.title,note('Direzione · '+o[1])+'<p>'+esc(o[2])+'</p>'+(v.aperto?'<b>Riaperto dalla RSU</b>':'')):'';}).join('');}
function nuovoEsito(){
 const n=g.negozio, rs=raccordi(g);
 const blocchi=rs.map(r=>panel(r[1],'<p>'+esc(r[2])+'</p><p>'+esc(r[3])+'</p>')).join('');
 const check=n.voci.filter(v=>/^(Intesa|Parziale)/i.test(proposta(g,v).opts[v.indice][2])).map(v=>spunta('ok'+v.id,'Confermate '+v.id+' · '+proposta(g,v).title)).join('');
 screen('Verificate il verbale',verbaleNuovo(g)+blocchi+form('<p>Confermate le clausole compatibili da presentare insieme. Le altre restano aperte.</p>'+check+select('tipo','Decisione della RSU',[['ipotesi','Presentiamo un’ipotesi'],['stallo','Torniamo al mandato senza sottoscrivere']])+campoScelta('motivo','Motivate la decisione e spiegate come avete risolto le sovrapposizioni')+campoScelta('verifica','Chi verifica gli impegni e quando?')+'<p id="errore" role="alert" tabindex="-1"></p>','Convocate l’assemblea'),info());
 if(g.draft.tipo)$('play').elements.tipo.value=g.draft.tipo;
 collegaForm(d=>{if(d.tipo==='ipotesi'&&!n.voci.some(v=>d['ok'+v.id]))throw Error('Confermate almeno una clausola per presentare l’ipotesi.');
 g.esito={tipo:d.tipo,motivo:richiedi(d.motivo,'Motivate la decisione.'),verifica:richiedi(d.verifica,'Indicate la verifica.')};n.voci.forEach(v=>{v.aperto=!d['ok'+v.id]});g.interventi=[];go('assemblea');});
}
function rapportoNuovo(sec,s){
 const n=s.negozio;const fonti=origini(sec);
 return ['2. TRATTATIVA · '+s.tentativo,...n.bisogni.map(b=>fonti.find(f=>f.id===b.id).nome+' · '+(b.scelto?'In piattaforma':'Seguito separato')+' '+b.motivo),...n.voci.flatMap(v=>{const p=proposta({sec},v),o=p.opts[v.indice];return ['','Proposta '+v.id+' · '+p.p,'Bisogni · '+v.fonti.map(id=>fonti.find(f=>f.id===id).nome).join(', '),'Motivazione del primo giro · '+v.primo,'Direzione · '+p.reply,...(o?['Replica · '+o[0],'Motivazione del secondo giro · '+v.secondo,'Direzione · '+o[1],o[2],...(v.aperto?['Punto non confermato']:[])]:[])];})];
}
function chiaveRegia(s){return (s.interventi||[]).filter(x=>x.lettura).map(x=>'\n'+x.tema+' · '+x.lettura).join('')+(s.negozio?'\n\nLettura per il formatore\n'+s.negozio.voci.map(v=>v.id+' · '+proposta(s,v).quality).join('\n'):'');}

function motivazioniRegia(s){
 if(!s.negozio)return '';
 return s.negozio.voci.map(v=>panel(proposta(s,v).title,'<div class="due-giri"><div><b>Motivazione · primo giro</b><p>'+esc(v.primo)+'</p></div><div><b>Motivazione · secondo giro</b><p>'+esc(v.secondo||s.draft?.['s'+v.id]||'In attesa della replica')+'</p></div></div>')).join('');
}
