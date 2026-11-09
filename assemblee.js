'use strict';
// Voci di reparto inventate per l'esercitazione. Le reazioni descrivono la sala dopo ogni intervento.
const VOCI_SALA={
 laterizi:[
 ['In piazzale','Dicono che chi è parente del capoturno sappia già quali camion arriveranno tardi. Finché non fate quei nomi, discutere delle uscite è inutile.','i ritiri previsti, le uscite effettive e il preavviso ricevuto','Chi ha segnato le uscite si offre di confrontare due settimane di orari.'],
 ['Dalla linea','Al mattino pensano tutti solo a tenersi i turni migliori. Che senso ha ascoltarli ancora?','le richieste e i cambi effettivi di ciascuna fascia','Una collega del mattino racconta un cambio subito anche dalla sua squadra.']],
 cemento:[
 ['Dalla sala controllo','Se il fornitore fa il corso al mattino è perché ha già deciso chi farà carriera. I nomi girano da giorni.','le convocazioni per turno, le presenze e le date di recupero','Un operatore notturno propone di controllare chi, pur convocato, è rimasto al banco.'],
 ['Dalla manutenzione','Quelli del laboratorio hanno sempre una scusa per saltare le notti. Stiamo dando credito alle persone sbagliate.','le abilitazioni necessarie e le sostituzioni effettivamente richieste','Un manutentore chiede di distinguere le chiamate ricevute dalle assenze supposte.']],
 lapidei:[
 ['Dal deposito','Le urgenze sono inventate dall’ufficio per farci lavorare il sabato. Lo sanno tutti, anche se sulle schede non lo scrivono.','l’ora della richiesta del cliente e quella di modifica del piano','Un addetto propone di ricostruire l’ultima commessa dal disegno alla consegna.'],
 ['Dalla finitura','Chi lavora al CAD sta seduto. Se sbaglia un disegno poi ci tocca correre: è sempre colpa loro.','la versione del disegno ricevuta e l’ora della revisione','Dal taglio ricordano un lotto cambiato dopo la validazione del disegno.']],
 legno:[
 ['Dalla bordatura','Il sabato serve solo a favorire i soliti che vogliono fare più ore. Il cliente non ha anticipato proprio niente.','la data della commessa, i carichi dei reparti e i sabati richiesti','Una collega chiede di confrontare la data del ritiro con il calendario iniziale.'],
 ['Dal montaggio','Chi dichiara un impedimento ha solo imparato come scaricare i sabati sugli altri. Faccia vedere a tutti il motivo.','la distribuzione dei sabati e la procedura riservata per gli impedimenti','Una lavoratrice accetta di parlare della distribuzione se i motivi personali restano riservati.']]
};
function turnoSala(s){
 const n=s.interventi.length, vs=s.negozio.voci;
 const priorita=[...vs.filter(v=>v.aperto),...vs.filter(v=>!v.aperto)];
 const voce=priorita[n===0?0:Math.min(1,priorita.length-1)];
 const p=proposta(s,voce), o=p.opts[voce.indice];
 const voci=VOCI_SALA[s.sec];
 const voceIdx=(Number(vs[0].id)+s.tentativo)%2;
 const [luogo,accusa,verifica,esito]=voci[voceIdx];
 const critica=n===1;
 let titolo,domanda,prova,opzioni;
 if(critica){
 titolo=luogo;domanda=accusa;prova='Nessun elemento del fascicolo documenta questa attribuzione di intenzioni.';
 opzioni=[
 ['Chiedo a chi condivide questa lettura di alzare la mano. In base al risultato decideremo se inserirla nel mandato.','Diverse mani si alzano. Dal fondo chiedono se il voto abbia appena trasformato la voce in un fatto.','Critica · La conta misura un’opinione e dà all’accusa il peso di una prova.'],
 ['Raccolgo la segnalazione a fine assemblea. Adesso ripartiamo dal testo su cui dobbiamo decidere.','Riprende la lettura. Tra le ultime file si continua a parlare della voce: nessuno ha capito come sarà verificata.','Parziale · Protegge il tempo del dibattito, ma lascia senza risposta chi ha ascoltato.'],
 ['Capisco la preoccupazione. Su quali episodi possiamo confrontarci? Controlliamo insieme '+verifica+'. Intanto decidiamo che cosa chiedere sui fatti disponibili.',esito,'Assertiva · Riconosce il disagio, delimita ciò che sappiamo e riapre la parola.']];
 }else{
 titolo=n===0?'Una voce dal reparto interessato':'Una collega chiede la parola';
 prova=p.id+' · '+p.title+' — '+o[2];
 const sospeso=voce.aperto||s.esito.tipo==='stallo';
 const coda=n===2&&s.interventi[1]?.lettura?.startsWith('Critica')?'Prima di votare voglio capire su cosa stiamo decidendo. ':'';
 domanda=coda+(n===0?p.q+' ':'')+(sospeso?'Questo punto non è confermato. Che cosa chiediamo di cambiare al prossimo incontro?':'Avete confermato questo testo. Se nel mio reparto non funziona, come facciamo a chiedere una modifica?');
 opzioni=n===0?[
 ['Propongo di valutare il risultato nel suo insieme. Raccogliamo le eccezioni dopo il voto, così ogni reparto pesa allo stesso modo.','Una seconda persona chiede perché dovrebbe votare prima di conoscere l’effetto sul proprio turno.','Critica · Rinvia un’obiezione pertinente oltre la decisione.'],
 ['Rileggo la frase concordata al tavolo e chiedo se sul suo significato ci sono altri dubbi.', 'Il testo è più chiaro. Dal reparto chiedono ancora chi seguirà la questione concreta.','Parziale · Chiarisce il testo senza affrontarne l’effetto.'],
 ['Riprendo il punto '+p.id+' e il suo stato a verbale. Chiedo un esempio al reparto e metto ai voti se affidare alla RSU una modifica su questo punto.','Il reparto descrive un turno concreto. Chi presiede può distinguere il chiarimento richiesto dalla modifica da votare.','Assertiva · Verifica l’effetto concreto e restituisce la decisione all’assemblea.']
 ]:[
 ['Raccogliamo per iscritto le difficoltà. La delegazione troverà da sola la formulazione più adatta al tavolo.','Arrivano due segnalazioni. I presenti chiedono quale limite la delegazione si impegni a rispettare.','Parziale · Raccoglie i casi ma lascia indeterminato il mandato.'],
 ['Facciamo verbalizzare il problema su '+p.id+', il cambiamento richiesto e chi ne verifica l’esito. Sentiamo anche chi lavora su un turno diverso prima di decidere.','Un altro turno precisa dove la stessa misura sarebbe utile. La presidenza rilegge il quesito prima della consultazione.','Assertiva · Fa spazio alle differenze e rende verificabile il mandato.'],
 ['Chiedo un voto di fiducia alla delegazione: con una posizione compatta potremo ottenere una risposta migliore.','Anche chi condivide il lavoro della RSU esita: vorrebbe votare sulla clausola senza esprimere un giudizio sui delegati.','Critica · Trasforma il dissenso su una misura in un giudizio di fiducia.']];
 }
 const offset=(Number(voce.id)+n)%3;
 return {titolo,domanda,prova,tema:critica?'Voce senza riscontro':'Obiezione di merito',opzioni:opzioni.slice(offset).concat(opzioni.slice(0,offset))};
}
function dibattitoSala(){
 const t=turnoSala(g),prev=g.interventi.at(-1);
 screen('Il confronto in assemblea',(prev?panel('Dopo la vostra risposta',esc(prev.effetto)):'')+'<p class="eyebrow">Intervento '+(g.interventi.length+1)+' di 3 · '+esc(t.titolo)+'</p><p class="quote">'+esc(t.domanda)+'</p>'+form('<fieldset><legend>Come risponde la RSU?</legend>'+t.opzioni.map(([testo],i)=>'<label class="scelta"><input type="radio" required name="op" value="'+i+'" '+(g.draft.op===String(i)?'checked':'')+'>'+esc(testo)+'</label>').join('')+'</fieldset>'+campoScelta('perche','Motivate le vostre scelte')+campoScelta('seguito','Quale impegno prendete davanti ai presenti?')+'<p id="errore" role="alert" tabindex="-1"></p>','Prendete la parola'),panel('Elementi disponibili',esc(t.prova))+panel('Verbale',verbaleNuovo(g)));
 collegaForm(d=>{const [replica,effetto,lettura]=t.opzioni[Number(d.op)];g.interventi.push({id:g.interventi.length,voce:t.titolo,domanda:t.domanda,replica,effetto,lettura,tema:t.tema,motivo:richiedi(d.perche,'Motivate la risposta.'),impegno:richiedi(d.seguito,'Indicate il seguito.')});go(g.interventi.length===3?'voto':'dibattito');});
}
function ritornoAzienda(){
 const punti=g.negozio.voci, mandato=g.modifica;
 if(mandato?.risposte)return ratificaModifiche();
 const corpo=punti.map(v=>{const p=proposta(g,v);return panel(p.title,note(p.opts[v.indice][2])+spunta('p'+v.id,'Chiediamo una modifica su questo punto')+select('r'+v.id,'Quale formulazione portate al tavolo?',[['','Scegliete una modifica'],...p.opts.flatMap(([testo],i)=>i===v.indice?[]:[[String(i),testo]]),['verifica','Inserire una verifica congiunta dopo trenta giorni, con segnalazioni da ogni turno']])+campoScelta('m'+v.id,'Motivate le vostre scelte collegandole alla contestazione emersa'));}).join('');
 screen('Ritorno dall’azienda',note(g.voto.passo)+form(corpo+'<p id="errore" tabindex="-1" role="alert"></p>','Presentate le modifiche alla direzione'),panel('Mandato dell’assemblea',esc(g.voto.risultato)));
 for(const v of punti){const el=$('play').elements['r'+v.id];el.value=g.draft['r'+v.id]||'';}
 collegaForm(d=>{const risposte=punti.filter(v=>d['p'+v.id]).map(v=>{
 const p=proposta(g,v), k=richiedi(d['r'+v.id],'Scegliete la modifica per '+p.title);
 const dati=k==='verifica'?['Verifica congiunta dopo trenta giorni','Possiamo fissare tra trenta giorni un incontro con la RSU e raccogliere prima le segnalazioni dei turni. La revisione della misura richiederà una decisione successiva.','Parziale · Concordato il riesame, resta aperta la modifica di merito.']:p.opts[Number(k)];
 return {id:v.id,titolo:p.title,prima:p.opts[v.indice][2],richiesta:dati[0],azienda:dati[1],esito:dati[2],motivo:richiedi(d['m'+v.id],'Motivate la modifica al punto '+v.id)};});
 if(!risposte.length)throw Error('Indicate almeno un punto da modificare.');g.modifica={mandato:g.voto.passo,risposte};go('voto');});
}
function ratificaModifiche(){return mostraScrutinio(true);}

// Ventuno votanti simulati, con sensibilità diverse al testo e al dibattito.
function scrutinioSala(s, modifiche=[]){
 const pesi=[.8,.65,.5], soglie=[35,40,45,50,55,60,65];
 const punti=s.negozio.voci.map(v=>{
  const p=proposta(s,v), revisione=modifiche.find(r=>r.id===v.id);
  const esito=revisione?revisione.esito:(v.aperto||s.esito.tipo==='stallo'?'Aperto':p.opts[v.indice][2]);
  const valore=esito.startsWith('Intesa')?100:esito.startsWith('Parziale')?50:0;
  return {id:v.id,titolo:p.title,valore};
 });
 const merito=punti.reduce((a,p)=>a+p.valore,0)/punti.length;
 const fiducia=s.interventi.reduce((a,i)=>a+(i.lettura?.startsWith('Assertiva')?100:i.lettura?.startsWith('Critica')?0:50),0)/Math.max(1,s.interventi.length);
 let si=0,no=0,astenuti=0;
 for(const peso of pesi){
  const consenso=merito*peso+fiducia*(1-peso);
  for(const soglia of soglie){
   if(consenso>=soglia+5)si++;
   else if(consenso<=soglia-5)no++;
   else astenuti++;
  }
 }
 const votabile=punti.some(p=>p.valore>0);
 // Senza clausole concordate manca l'oggetto della ratifica.
 const approvata=votabile&&si>=11;
 const scelta=approvata?'approva':!modifiche.length?'riapre':!votabile||no>=11?'respinge':'rinvia';
 const descr={approva:'Ipotesi approvata',riapre:'Mandato a riaprire la trattativa',respinge:'Mandato concluso senza approvazione',rinvia:'Decisione rinviata ai reparti'};
 const risultato=descr[scelta]+(votabile?' · '+si+' favorevoli, '+no+' contrari, '+astenuti+' astenuti.':' · Nessuna clausola concordata da porre in votazione.');
 const deboli=punti.filter(p=>p.valore<100);
 const passo=scelta==='riapre'?(deboli.length?'Riesaminate i punti '+deboli.map(p=>p.id+' '+p.titolo).join(', ')+'. Collegate la modifica alla contestazione emersa.':'Riportate al tavolo i chiarimenti e le garanzie chiesti in assemblea.'):{approva:'Comunicate gli impegni e le verifiche ai reparti.',rinvia:'Raccogliete le osservazioni dei reparti prima di una nuova consultazione.',respinge:'Riferite ai reparti le ragioni del mancato accordo.'}[scelta];
 const lettura=punti.filter(p=>p.valore===100).length+' intese, '+punti.filter(p=>p.valore===50).length+' punti parziali, '+punti.filter(p=>!p.valore).length+' punti senza intesa. Repliche in assemblea: '+s.interventi.map(i=>i.lettura?.split(' · ')[0]||'Parziale').join(', ')+'.';
 return {scelta,risultato,passo,lettura,si:votabile?si:null,no:votabile?no:null,astenuti:votabile?astenuti:null};
}
function mostraScrutinio(secondo=false){
 const m=secondo?g.modifica.risposte:[],v=scrutinioSala(g,m);
 const revisioni=m.map(r=>panel(r.titolo,note(r.prima)+'<p>'+esc(r.richiesta)+'</p>'+note(r.azienda)+'<p>'+esc(r.esito)+'</p>')).join('');
 screen(secondo?'Voto dopo il ritorno al tavolo':'Il voto dell’assemblea',(g.interventi.at(-1)?.effetto&&!secondo?note(g.interventi.at(-1).effetto):'')+panel('Scrutinio simulato',note(v.risultato)+'<p>'+esc(v.lettura)+'</p>')+note(v.passo)+revisioni+form('',v.scelta==='riapre'?'Tornate dall’azienda con il mandato':'Leggete il verbale finale'),panel('Ipotesi presentata',termList(g)));
 wireForm(()=>{
  if(secondo)g.modifica.decisione=v;
  else g.primoScrutinio=v;
  g.voto=v;go(v.scelta==='riapre'?'voto':'fine');
 });
}
