/* RSU in Azione | illustrazioni ORIGINALI; nessun personaggio vettoriale. */
(()=>{
'use strict';
const art=()=>window.RSUArtwork||{};
const sectorNames={laterizi:'Laterizi',cemento:'Cemento',lapidei:'Lapidei',legno:'Legno'};
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
const clamp=x=>Math.max(0,Math.min(100,Math.round(Number(x)||0)));
function phaseOf(s){return ['colloquio','mandato'].includes(s.page)?1:['tavolo','esito'].includes(s.page)?2:3;}
function metrics(s,phase){
 const results=s.interventi||[];
 const score=fn=>results.length?Math.round(results.reduce((a,v)=>a+fn(v),0)/results.length):50;
 const quality=score(v=>v.lettura?.startsWith('Assertiva')?85:v.lettura?.startsWith('Critica')?20:v.lettura?.startsWith('Parziale')?50:50);
 const tension=results.length?score(v=>v.lettura?.startsWith('Critica')?85:v.lettura?.startsWith('Assertiva')?22:54):35;
 if(phase===1)return [['Colloqui registrati',clamp((s.answers?.length||0)/3*100),`${s.answers?.length||0} di 3`],['Colloqui approfonditi',clamp((s.dialoghi?.length||0)/3*100),`${s.dialoghi?.length||0} di 3`]];
 if(phase===2){
  if(s.negozio){const all=s.negozio.voci||[];const reviewed=all.filter(v=>Number.isInteger(v.indice)).length;return [['Proposte esaminate',clamp(reviewed/(all.length||1)*100),`${reviewed} di ${all.length}`],['Accordi confermati',clamp(all.filter(v=>v.aperto===false).length/(all.length||1)*100),'Punti del verbale']];}
  const offers=s.offerte||[];return [['Punti esaminati',clamp(offers.length/2*100),`${offers.length} di 2`],['Convergenze',clamp(offers.filter(v=>v.decisione==='accetta').length/2*100),'Punti accettati']];
 }
 return [['Qualità delle risposte',quality,`${results.length} interventi`],['Tensione del confronto',tension,''],...(s.voto?.si!=null?[['Consenso al voto',clamp(s.voto.si/21*100),`${s.voto.si} sì su 21`]]:[])];
}
function choose(s){
 const phase=phaseOf(s);const n=s.interventi?.length||0;const latest=s.interventi?.at(-1)||{};
 const pretext=phase===3&&s.page==='dibattito'&&n===1&&!!s.negozio;
 let key=phase===1?'colloqui':phase===2?'trattativa':'assemblea';
 let index=0,rows=phase===3?4:3, headline='',detail='';
 if(phase===1){
  index=s.page==='mandato'?3:s.dialoghi?.includes(s.answers?.length||0)?4:s.sec==='legno'?2:s.sec==='cemento'?1:0;
  headline=s.page==='mandato'?'Preparare la piattaforma':'Ascoltare i colleghi';
  detail='Raccogliere i fatti e consultare CCNL e guida prima di rispondere.';
 }else if(phase===2){
  if(s.page==='esito'){index=s.esito?.tipo==='stallo'||s.negozio?.voci?.some(v=>v.aperto)?3:5;headline='Il verbale della trattativa';}
  else if(s.negozio){index=s.negozio.voci?.some(v=>Number.isInteger(v.indice))?4:0;headline='Le risposte della direzione';}
  else{index=(s.offerte||[]).some(v=>v.moves?.length)?3:0;headline='Al tavolo con la direzione';}
  detail='Il confronto si sviluppa sulla base delle proposte, delle risposte e del mandato.';
 }else{
  if(s.page==='assemblea'){index=0;headline='Presentazione dell’esito';}
  else if(s.page==='dibattito'){
   if(pretext){key='pretesto';index=0;rows=1;headline='Contestazione pretestuosa';detail='Un lavoratore contesta a prescindere: abiti rossi, a differenza delle critiche di merito.';}
   else if(n===0){index=2;headline='Critica nel merito';}
   else if(latest.lettura?.startsWith('Critica')){index=4;headline='La tensione cresce';}
   else if(latest.lettura?.startsWith('Assertiva')){index=5;headline='Recuperare la fiducia';}
   else{index=1;headline='Ascolto e chiarimenti';}
  }else if(s.page==='voto'){index=s.voto?.scelta==='riapre'?6:7;headline='Il voto dell’assemblea';}
  else if(s.page==='fine'){index=s.voto?.scelta==='approva'?7:s.voto?.scelta==='riapre'?6:s.voto?.scelta==='respinge'?4:5;headline=({approva:'Accordo approvato',riapre:'Si torna al tavolo',respinge:'Accordo respinto',rinvia:'Consultazione rinviata'})[s.voto?.scelta]||'Esito dell’assemblea';}
  else {index=1;headline='Confronto in assemblea';}
  if(!detail)detail='Le reazioni e il risultato dipendono dalle scelte realmente effettuate.';
 }
 return {phase,key,index,rows,headline,detail,pretext,metrics:metrics(s,phase)};
}
function illustration(key,index,rows){
 const src=art()[key];if(!src)return '';
 // Ogni tavola è suddivisa in due colonne e tre/quattro righe di scene originali.
 const x=index%2,y=Math.floor(index/2);
 const bx=x===0?'0%':'100%';
 const by=rows===1?'0%':(100*y/(rows-1)).toFixed(4)+'%';
 const style=rows===1?'background-size:cover;background-position:center;':`background-size:200% ${rows*100}%;background-position:${bx} ${by};`;
 return `<div class="rsu-raster-illustration" role="img" aria-label="Scena illustrata: ${esc(key)}" style="background-image:url('${src}');${style}"></div>`;
}
function meter(a){const [label,pct,extra]=a;return `<div class="rsu-meter"><div class="rsu-meter-meta"><strong>${esc(label)}</strong><span>${esc(extra)}</span></div><div class="rsu-meter-track" role="meter" aria-label="${esc(label)}" aria-valuenow="${clamp(pct)}" aria-valuemin="0" aria-valuemax="100"><div class="rsu-meter-fill" style="width:${clamp(pct)}%"></div></div></div>`;}
function stage(s){
 if(!s?.sec)return '';
 const d=choose(s);const title=['','Sportello RSU','Trattativa aziendale','Assemblea dei lavoratori'][d.phase];
 return `<section class="rsu-art-stage rsu-art-raster" aria-label="Illustrazioni del gioco"><div class="rsu-art-top"><strong>${d.phase} · ${esc(title)}</strong><span>${esc(sectorNames[s.sec]||s.sec)}</span></div>${illustration(d.key,d.index,d.rows)}<div class="rsu-art-bottom"><div class="rsu-art-description"><strong>${esc(d.headline)}</strong><small>${esc(d.detail)}</small></div><div class="rsu-art-meters">${d.metrics.map(meter).join('')}</div></div></section>`;
}
function home(){return art().verde?`<div class="rsu-raster-home" style="background-image:url('${art().verde}')" role="img" aria-label="Illustrazioni originali di RSU in Azione"></div>`:'';}
function installBrand(){
 if(!art().logo)return;
 const mark=document.querySelector('.mark');
 if(mark){mark.textContent='';const img=document.createElement('img');img.alt='Logo RSU in Azione verde';img.src=art().logo;mark.appendChild(img);mark.classList.add('rsu-logo-mark');}
}
window.RSUArt={stage,home,choose};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installBrand,{once:true});else installBrand();
})();