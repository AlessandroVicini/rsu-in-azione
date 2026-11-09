(function makeVisualModule(){
  'use strict';
  const C={green:'#087543',deep:'#064c31',green2:'#1ba065',mint:'#d8efe0',lime:'#a8d989',ink:'#163c35',blue:'#42677d',warm:'#f5b54c',neutral:'#e8ecdf',red:'#bc353b',redDark:'#8b252b'};
  const people={
    delegata:{skin:'#d79c79',hair:'#4b302a',shirt:C.green,vest:true,cut:'long'},
    delegato:{skin:'#b97954',hair:'#28201d',shirt:C.green,vest:true,beard:true},
    delegata2:{skin:'#b57862',hair:'#2a2421',shirt:C.green,vest:true,cut:'bun'},
    lavoratrice:{skin:'#e8b28b',hair:'#7b4d2c',shirt:'#557384',vest:false,cut:'long'},
    giovane:{skin:'#bd825f',hair:'#2e2925',shirt:'#456c86',vest:false},
    operaio:{skin:'#c98b61',hair:'#473224',shirt:'#49687c',vest:false,helmet:true},
    anziano:{skin:'#e2ac86',hair:'#c9c2bb',shirt:'#52616d',vest:false,beard:true},
    direzione:{skin:'#d9aa88',hair:'#4a4b4c',shirt:'#233d56',vest:false,tie:true},
    dirigente:{skin:'#b8785a',hair:'#211d21',shirt:'#344254',vest:false,tie:true},
    pretestuoso:{skin:'#d69c73',hair:'#282322',shirt:C.red,vest:false,cap:true,beard:true}
  };
  const escape=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const clamp=v=>Math.max(0,Math.min(100,Math.round(Number(v)||0)));
  const rect=(x,y,w,h,fill,rx=0,stroke='none')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}"/>`;
  const bubble=(x,y,content,color=C.green)=>`<g><rect x="${x}" y="${y}" width="58" height="46" rx="18" fill="#fff" stroke="${color}" stroke-width="3"/><path d="M${x+18} ${y+44} l-9 12 25 -10" fill="#fff" stroke="${color}" stroke-width="3"/><text x="${x+29}" y="${y+30}" text-anchor="middle" font-size="25" font-weight="900" fill="${color}">${content}</text></g>`;
  function character(kind,x,y,scale=1,mood='normal',gesture='none'){
    const p=people[kind]||people.operaio;
    const eyes=mood==='sad'?'<path d="M46 55l8 -4 M70 51l8 4" stroke="#2c2b29" stroke-width="2.5"/>':mood==='angry'?'<path d="M43 45l11 5 M73 50l9 -5" stroke="#322821" stroke-width="3"/>':'<path d="M43 48l11 0 M72 48l10 0" stroke="#3a332e" stroke-width="2.3"/>';
    const mouth=mood==='smile'?'<path d="M52 74Q62 85 75 73" fill="none" stroke="#753f36" stroke-width="3.2" stroke-linecap="round"/>':mood==='angry'?'<path d="M53 79Q64 71 76 79" fill="none" stroke="#753f36" stroke-width="3"/>':mood==='sad'?'<path d="M53 83Q64 73 76 83" fill="none" stroke="#753f36" stroke-width="3"/>':mood==='talk'?'<ellipse cx="64" cy="78" rx="7" ry="5" fill="#713f35"/>':'<path d="M56 77q9 3 17 0" stroke="#753f36" stroke-width="2" fill="none"/>';
    const hair=p.cut==='long'?`<path d="M34 53Q28 8 67 15Q100 17 96 57L100 107Q84 111 88 73Q88 34 62 34Q40 35 39 74L36 106Q23 103 30 64Z" fill="${p.hair}"/>`:
       p.cut==='bun'?`<ellipse cx="90" cy="30" rx="16" ry="15" fill="${p.hair}"/><path d="M36 50Q31 17 63 19Q92 20 90 54Q76 31 53 38Z" fill="${p.hair}"/>`:
       `<path d="M35 50Q28 13 63 17Q95 16 91 48Q69 28 50 35L39 56Z" fill="${p.hair}"/>`;
    const helmet=p.helmet?'<path d="M31 43Q33 4 63 9Q93 8 96 43L103 48L25 48Z" fill="#f2bb37" stroke="#8d6e27" stroke-width="3"/><path d="M57 12v30" stroke="#df9c23" stroke-width="5"/>':'';
    const cap=p.cap?`<path d="M35 43Q38 14 62 18Q88 18 92 42L107 47Q89 57 77 51Z" fill="${C.redDark}" stroke="${C.red}" stroke-width="3"/>`:'';
    const beard=p.beard?'<path d="M42 71Q45 106 65 103Q88 98 85 72Q79 92 65 90Q48 89 42 71Z" fill="#48322a" opacity=".85"/>':'';
    const armLeft=gesture==='fold'?'<path d="M28 131Q47 152 74 144" fill="none" stroke="#d4a17f" stroke-width="15" stroke-linecap="round"/>':'<path d="M28 130Q20 165 33 195" fill="none" stroke="#cb946e" stroke-width="16" stroke-linecap="round"/>';
    const armRight=gesture==='point'?'<path d="M96 126Q124 105 138 73" stroke="#cb946e" stroke-width="15" fill="none" stroke-linecap="round"/><path d="M130 76l13 -31" stroke="#cb946e" stroke-width="10" stroke-linecap="round"/>':
      gesture==='talk'?'<path d="M95 129Q112 118 123 101" fill="none" stroke="#cb946e" stroke-width="16" stroke-linecap="round"/><circle cx="126" cy="98" r="11" fill="#cb946e"/>':
      gesture==='fold'?'<path d="M96 135Q81 157 44 143" fill="none" stroke="#cb946e" stroke-width="14" stroke-linecap="round"/>':
      '<path d="M96 128Q108 157 96 196" fill="none" stroke="#cb946e" stroke-width="16" stroke-linecap="round"/>';
    const clothes=`<path d="M31 114Q61 95 92 114L102 217Q65 225 20 216Z" fill="${p.shirt}" stroke="#254b4a" stroke-width="3.2"/>`+
      (p.vest?`<path d="M27 113L43 112L60 158L64 217L20 216Z M95 112L79 112L65 158L64 217L103 217Z" fill="#159658" stroke="#d7f2db" stroke-width="2"/><path d="M45 113L61 154L77 113" fill="none" stroke="#e3f9e3" stroke-width="3"/><rect x="70" y="164" width="25" height="20" rx="4" fill="#edf9ed"/><text x="82" y="178" font-size="11" text-anchor="middle" font-weight="900" fill="${C.deep}">RSU</text>`:'')+
      (p.tie?'<path d="M58 116L66 115L69 153L62 174L57 152Z" fill="#358f78"/>':'');
    return `<g class="rsu-svg-character rsu-gesture-${gesture}" transform="translate(${x} ${y}) scale(${scale})"><ellipse cx="62" cy="222" rx="55" ry="8" fill="#214239" opacity=".18"/>${clothes}${armLeft}${armRight}<rect x="54" y="88" width="20" height="27" rx="7" fill="${p.skin}"/>${hair}<ellipse cx="61" cy="62" rx="30" ry="34" fill="${p.skin}" stroke="#ae765b" stroke-width="1.6"/><circle cx="31" cy="67" r="7" fill="${p.skin}"/><circle cx="90" cy="67" r="7" fill="${p.skin}"/>${eyes}<circle cx="50" cy="59" r="3.3" fill="#232b2a"/><circle cx="75" cy="59" r="3.3" fill="#232b2a"/><path d="M63 63l-3 9 5 1" fill="none" stroke="#a86e55" stroke-width="1.9"/>${beard}${mouth}${helmet}${cap}</g>`;
  }
  function background(sector,phase){
    let s=`<defs><linearGradient id="rsuSky" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#d7f0e9"/><stop offset="1" stop-color="#f6faf4"/></linearGradient><linearGradient id="rsuFloor" x1="0" x2="1"><stop stop-color="#c5dbd3"/><stop offset="1" stop-color="#ebeee5"/></linearGradient></defs>${rect(0,0,1060,320,'url(#rsuSky)')}`;
    if(phase===1){
      s+=rect(0,218,1060,102,'url(#rsuFloor)')+
         `<path d="M0 224H1060M0 270H1060" stroke="#7aa698" stroke-width="2"/>`+
         `<g opacity=".88">${rect(15,40,400,184,'#bdd4d5',6)}${rect(32,67,150,104,'#8bb4bb',4)}${rect(210,67,176,104,'#86b8c1',4)}</g>`;
      if(sector==='cemento')s+=`<g fill="#cfdbd2" stroke="#63888a" stroke-width="3"><rect x="630" y="92" width="95" height="137" rx="9"/><rect x="749" y="72" width="80" height="157" rx="9"/><rect x="856" y="100" width="86" height="129" rx="9"/><path d="M630 91l48 -31 47 31 M749 73l39 -28 41 28 M856 100l43 -28 43 28" fill="#84adad"/></g><path d="M645 45H911" stroke="#6b8b8a" stroke-width="8"/>`;
      else if(sector==='legno')s+=`${rect(600,115,389,110,'#b99a77',7)}${rect(610,122,180,82,'#ddd0b1',4)}<g stroke="#8b633e" stroke-width="5">${Array.from({length:5},(_,i)=>`<path d="M805 ${131+i*17}h166"/>`).join('')}</g><path d="M670 116V84H921V116" fill="none" stroke="#567a70" stroke-width="10"/>`;
      else if(sector==='laterizi')s+=`${rect(590,85,390,137,'#af715d',4)}<path d="M570 83L625 43H971L993 83Z" fill="#688d86"/><path d="M715 85V223M830 85V223" stroke="#d5a08a" stroke-width="6"/>${Array.from({length:4},(_,i)=>rect(615+i*93,178,73,41,'#c36c4d',2)).join('')}`;
      else if(sector==='lapidei')s+=`<path d="M568 224V136L648 92L749 125L842 78L1000 134L1010 224Z" fill="#a5b2b3" stroke="#6b8582" stroke-width="4"/><g fill="#e1e6e0" stroke="#8ca4a0" stroke-width="2">${rect(660,185,110,45,'#d1d9d7')}${rect(792,165,103,65,'#dee6e4')}${rect(913,186,89,43,'#c5d5d2')}</g>`;
      else s+=`<g stroke="#8c9f92" stroke-width="4">${rect(595,96,326,130,'#bdccc3',2)}<path d="M585 95L761 20L945 95" fill="none"/><path d="M618 95V225M718 95V225M830 95V225M921 95V225"/></g>`;
      s+=`${rect(85,226,890,9,'#7b9d90',2)}`;
    }else if(phase===2){
      s+=`${rect(0,245,1060,75,'#d7e2d8')}${rect(0,0,1060,53,'#f5faf6')}${rect(20,50,365,170,'#a3c9cd',8,'#6c9d9e')}${rect(27,57,351,156,'#d7eaec',5)}<path d="M195 57V213" stroke="#89b4af" stroke-width="5"/>`+
      `${rect(580,41,350,139,'#edf7ee',8,'#629482')}`+
      `<path d="M603 152L653 128L704 135L768 93L827 106L893 66" stroke="#19865c" stroke-width="8" fill="none" stroke-linecap="round"/><g fill="#5eba83">${Array.from({length:5},(_,i)=>rect(617+i*57,159-(i+1)*12,27,13+(i+1)*12,'#b1dac0',2)).join('')}</g>`+
      `<path d="M200 238L335 193H792L914 238L872 278H241Z" fill="#b89268" stroke="#82694e" stroke-width="4"/><path d="M335 193H792" stroke="#e4c89d" stroke-width="8"/>`;
    } else {
      s+=`${rect(0,243,1060,77,'#bed8ce')}${rect(0,0,1060,43,'#f7faf5')}${rect(38,42,295,160,'#9bc6d1',6,'#689d99')}${rect(46,50,278,144,'#c9e6e3',3)}<path d="M192 50V196" stroke="#7ba4a6" stroke-width="5"/>`+
      `${rect(475,28,340,124,'#f9fcf6',7,'#679c82')}${rect(488,40,315,101,'#e4f2e9',5)}<text x="644" y="89" text-anchor="middle" font-size="29" font-weight="900" fill="${C.green}">ASSEMBLEA RSU</text><path d="M558 103H732" stroke="#1b9963" stroke-width="8" stroke-linecap="round"/>`;
      for(let i=0;i<16;i++){const x=14+(i%8)*133,y=207+Math.floor(i/8)*41;s+=`<rect x="${x}" y="${y}" rx="15" width="79" height="48" fill="${i%3===0?'#86bba8':'#5c897f'}" opacity=".68"/>`;}
    }
    return s;
  }
  function overview(s){
    const phase=['colloquio','mandato'].includes(s.page)?1:['tavolo','esito'].includes(s.page)?2:3;
    const turns=Array.isArray(s.interventi)?s.interventi:[];
    const n=turns.length;
    const latest=turns[n-1];
    const crit=latest?.lettura?.startsWith('Critica');
    const assert=latest?.lettura?.startsWith('Assertiva');
    const pretext=phase===3&&s.page==='dibattito'&&n===1;
    const quality=s.negozio?.voci?.map(v=>{
      if(v.indice==null)return null;
      const d=typeof ALBERI!=='undefined'?ALBERI[s.sec]:null;
      const p=d?.proposals?.find(q=>q.id===v.id);
      const status=p?.opts?.[v.indice]?.[2]||'';
      return (v.aperto||s.esito?.tipo==='stallo')?0:/^Intesa/i.test(status)?100:/^Parziale/i.test(status)?50:0;
    }).filter(x=>x!==null)||[];
    const commitments=quality.length?Math.round(quality.reduce((a,b)=>a+b,0)/quality.length):(s.offerte?.length?Math.round(s.offerte.reduce((a,b)=>a+(b.level||0)*50,0)/s.offerte.length):0);
    const lastMoods=turns.map(t=>t.lettura||'');
    const confidence=lastMoods.length?Math.round(lastMoods.reduce((a,t)=>a+(t.startsWith('Assertiva')?85:t.startsWith('Parziale')?52:t.startsWith('Critica')?23:50),0)/lastMoods.length):50;
    const tension=lastMoods.length?Math.round(lastMoods.reduce((a,t)=>a+(t.startsWith('Critica')?85:t.startsWith('Assertiva')?26:54),0)/lastMoods.length):38;
    const hasVoto=s.voto?.si!=null&&s.voto?.no!=null;
    const meters=phase===1?[
      ['Colloqui registrati',Math.min(100,(s.answers?.length||0)/3*100),`${s.answers?.length||0} di 3`],
      ['Richieste approfondite',Math.min(100,(s.dialoghi?.length||0)/3*100),`${s.dialoghi?.length||0} di 3`]
    ]:phase===2?[
      ['Punti con intesa',commitments,quality.length?'Valutazione delle clausole':'Trattativa in corso'],
      ['Proposte esaminate',Math.min(100,((s.negozio?.voci||[]).filter(v=>v.indice!==undefined).length/(s.negozio?.voci?.length||1))*100),'Risposte ricevute']
    ]:[
      ['Qualità delle repliche',confidence,`${turns.length} interventi valutati`],
      ['Tensione del confronto',tension,crit?'Serve ricostruire fiducia':assert?'Confronto costruttivo':'Clima in evoluzione'],
      ...(hasVoto?[['Consenso al voto',Math.round(s.voto.si/21*100),`${s.voto.si} favorevoli su 21`]]:[])
    ];
    let event='';
    if(s.page==='colloquio')event='Ascolto individuale · Le risposte vanno confrontate con CCNL e guida';
    else if(s.page==='mandato')event='Dai problemi individuali alla piattaforma collettiva';
    else if(s.page==='tavolo')event='La direzione risponde alle proposte della RSU';
    else if(s.page==='esito')event=s.esito?.tipo==='stallo'?'Nessuna intesa: preparare un nuovo mandato':'Verifica dell’ipotesi di accordo e dei punti aperti';
    else if(s.page==='assemblea')event=s.esito?.tipo==='stallo'?'La RSU spiega lo stallo e ascolta i reparti':'La RSU presenta l’ipotesi e ascolta le osservazioni';
    else if(s.page==='dibattito')event=pretext?'Contestazione basata su supposizioni: verificare i fatti':n===0?'Obiezione sul merito: ascoltare gli effetti concreti':n===2?'Mandato e verifiche: riportare la discussione sui fatti':'Risposta data: il clima può cambiare';
    else if(s.page==='voto')event=s.voto?.scelta==='riapre'?'Nuovo mandato: ritorno alla direzione':'Consultazione: l’esito dipende da trattativa e risposte';
    else if(s.page==='fine')event=s.voto?.scelta==='approva'?'Accordo approvato':s.voto?.scelta==='respinge'?'Accordo respinto':s.voto?.scelta==='riapre'?'La trattativa deve riaprire':'Consultazione conclusa';
    return {phase,pretext,meters,event,confidence,tension,crit,assert};
  }
  function meter(label,value,extra,i){
    const color=i===1&&label.includes('Tensione')?'#d19a2b':C.green2;
    return `<div class="rsu-meter"><div class="rsu-meter-meta"><strong>${escape(label)}</strong><span>${escape(extra)}</span></div><div class="rsu-meter-track" role="meter" aria-label="${escape(label)}" aria-valuenow="${clamp(value)}" aria-valuemin="0" aria-valuemax="100"><div class="rsu-meter-fill" style="width:${clamp(value)}%;background:${color}"></div></div></div>`;
  }
  function stage(s){
    if(!s||!s.sec)return '';
    const d=overview(s),p=d.phase,sector=s.sec||'cemento';
    let actors='';
    if(p===1){
      actors=character('delegata',235,68,1.05,'talk','talk')+
        character(s.page==='mandato'?'delegato':'operaio',560,76,1.03,s.page==='colloquio'?'normal':'smile','none')+
        character('lavoratrice',766,93,.79,'normal','none');
    }else if(p===2){
      const status=d.meters[0][1]>=75?'smile':d.meters[0][1]<=20?'angry':'normal';
      actors=character('delegata',200,80,.91,'talk','talk')+
         character('delegato',335,94,.76,'normal','none')+
         character('dirigente',680,79,.92,status,status==='angry'?'fold':'talk')+
         character('direzione',845,106,.66,'normal','none');
    }else{
      const inDebate=s.page==='dibattito',n=(s.interventi||[]).length;
      const disrupter=inDebate?d.pretext:(n>=2);
      const angry=d.crit&&d.confidence<45;
      actors=character('anziano',75,131,.63,'normal','none')+
         character('lavoratrice',175,126,.69,'normal','none')+
         character('giovane',302,140,.57,d.assert?'smile':'normal','none')+
         character(disrupter?'pretestuoso':'operaio',625,107,.81,disrupter?'angry':'normal',disrupter?'point':'none')+
         character('operaio',789,125,.69,'normal','none')+
         character('delegata',442,54,1.11,angry?'normal':d.assert?'smile':'talk','talk');
      if(d.pretext)actors+=bubble(744,62,'!',C.red);
      else if(inDebate)actors+=bubble(742,43,'?',C.deep);
      else if(s.voto?.scelta==='approva')actors+=bubble(742,48,'✓',C.green);
    }
    const names={1:'1 · Sportello RSU',2:'2 · Trattativa aziendale',3:'3 · Assemblea dei lavoratori'};
    const vote=s.voto&&p===3&&s.page==='fine'?`<div class="rsu-art-result ${s.voto.scelta==='approva'?'positive':'needs-review'}">${escape(({approva:'Ipotesi approvata',respinge:'Accordo respinto',riapre:'Torna al tavolo',rinvia:'Decisione rinviata'})[s.voto.scelta]||'Esito registrato')}</div>`:'';
    return `<section class="rsu-art-stage" aria-label="Scena dinamica della simulazione"><div class="rsu-art-top"><span class="rsu-art-stage-pill">${names[p]}</span><span class="rsu-art-sector">${escape(({cemento:'Cementeria',legno:'Legno e arredo',laterizi:'Fornace',lapidei:'Lapidei'})[sector]||sector)}</span></div><div class="rsu-art-visual"><svg viewBox="0 0 1060 320" role="img" aria-label="${escape(d.event)}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">${background(sector,p)}${actors}</svg></div><div class="rsu-art-bottom"><div class="rsu-art-description"><strong>${escape(d.event)}</strong><small>${p===3?'Rosso riservato a chi contesta a prescindere; obiezioni di merito con normali abiti da lavoro.':'Personaggi e ambientazione cambiano con la fase e il settore.'}</small>${vote}</div><div class="rsu-art-meters">${d.meters.map(([l,v,e],i)=>meter(l,v,e,i)).join('')}</div></div></section>`;
  }
  function home(){
    return `<div class="rsu-art-home" aria-hidden="true"><svg viewBox="0 0 700 350" xmlns="http://www.w3.org/2000/svg"><rect width="700" height="350" fill="#d8efe0"/><rect y="248" width="700" height="102" fill="#b7d9ca"/><rect x="46" y="82" width="150" height="168" rx="8" fill="#8cadac"/><rect x="61" y="98" width="120" height="72" fill="#c5e2e0"/><rect x="226" y="90" width="85" height="160" rx="8" fill="#a0bcb8"/><rect x="324" y="62" width="54" height="190" rx="8" fill="#b9d2cc"/><rect x="388" y="114" width="280" height="136" rx="8" fill="#8cb5a3"/><path d="M388 114l143 -80 137 80" fill="#c9e2d6"/><g opacity=".65"><path d="M80 250v-80M138 250v-80M245 250v-100M340 250v-130M440 250v-100" stroke="#e7f5e9" stroke-width="7"/></g>${character('delegata',145,95,.86,'smile','talk')}${character('operaio',390,122,.72,'smile','none')}${character('delegato',530,106,.8,'smile','none')}</svg></div>`;
  }
  window.RSUArt={stage,home,overview};
})();