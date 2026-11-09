/* Illustrazioni vettoriali interattive: verde = RSU; rosso = solo contestazione priva di riscontro. */
(function(){
"use strict";
const GREEN="#087d4d", DEEP="#075737", RED="#c43134", INK="#203a39";
const phase={colloquio:1,mandato:1,tavolo:2,esito:2,assemblea:3,dibattito:3,voto:3,fine:3};
function person(x,coat,pose,shirt="#f6e0bd",hair="#3c2d29",label=""){
 const arm=pose==="speak"?'<path d="M58 135 Q87 118 97 89" stroke="'+coat+'" stroke-width="20" fill="none" stroke-linecap="round"/><circle cx="98" cy="85" r="9" fill="'+shirt+'"/>':
 pose==="cross"?'<path d="M25 138l50 24M75 138l-50 24" stroke="'+shirt+'" stroke-width="10" stroke-linecap="round"/>':
 pose==="question"?'<path d="M64 135Q82 125 90 107" stroke="'+coat+'" stroke-width="18" fill="none" stroke-linecap="round"/><circle cx="90" cy="103" r="9" fill="'+shirt+'"/>':'';
 const mouth=pose==="angry"?'<path d="M39 93 Q49 86 57 93" fill="none" stroke="#783d35" stroke-width="2.5"/>':
 pose==="smile"?'<path d="M40 89 Q48 97 56 89" fill="none" stroke="#783d35" stroke-width="2.5"/>':
 '<path d="M41 91h13" stroke="#783d35" stroke-width="2.5" stroke-linecap="round"/>';
 return '<g transform="translate('+x+' 0)" aria-label="'+label+'">'+
 '<ellipse cx="51" cy="193" rx="66" ry="8" fill="#205b4b" opacity=".12"/>'+
 '<path d="M4 180Q2 127 23 120L35 113H66L85 125Q99 146 97 180Z" fill="'+coat+'" stroke="#1b5547" stroke-width="3"/>'+
 '<path d="M38 117L50 137 63 117" fill="#fffdf8" opacity=".82"/>'+
 '<path d="M49 24Q86 24 82 77L70 103Q51 122 32 101L21 77Q19 35 49 24" fill="'+shirt+'" stroke="#9d7155" stroke-width="2"/>'+
 '<path d="M20 73Q5 26 43 20Q79 13 88 51Q78 40 68 39Q43 34 22 61Z" fill="'+hair+'"/>'+
 '<circle cx="39" cy="73" r="2.8" fill="#1a3835"/><circle cx="61" cy="73" r="2.8" fill="#1a3835"/>'+mouth+arm+
 (coat===GREEN?'<path d="M4 164h91" stroke="#bde9c9" stroke-width="5"/><text x="50" y="156" text-anchor="middle" fill="white" font-family="Arial" font-weight="900" font-size="13">RSU</text>':'')+
 '</g>';
}
function plant(sec){
 if(sec==="cemento")return '<g fill="#8aa8aa" stroke="#6b8989" stroke-width="2"><rect x="744" y="49" width="31" height="120" rx="7"/><rect x="783" y="38" width="36" height="131" rx="8"/><rect x="827" y="59" width="29" height="110" rx="6"/><path d="M740 49L760 28L776 49M782 39L802 16L820 39M825 59L843 39L858 59" fill="#e8f1eb"/></g>';
 if(sec==="laterizi")return '<g fill="#d38e65" stroke="#ae714e" stroke-width="2"><rect x="736" y="86" width="138" height="83"/><path d="M737 110h136M737 139h136M760 86v24M811 86v24M847 110v29M784 139v30M838 139v30" fill="none"/><rect x="812" y="39" width="18" height="47" fill="#b76d4f"/></g>';
 if(sec==="lapidei")return '<g fill="#d4d6ce" stroke="#9ea8a5" stroke-width="2"><path d="M736 165V105L762 77H837L867 112V165Z"/><path d="M762 77l41 38 34-38M803 115v50" fill="none"/><rect x="756" y="149" width="95" height="21" fill="#b9beb8"/></g>';
 return '<g fill="#b9926f" stroke="#9e7655" stroke-width="2"><rect x="735" y="125" width="144" height="21"/><rect x="735" y="146" width="144" height="21"/><path d="M740 92h133v34H740z" fill="#d7b18b"/><circle cx="742" cy="110" r="15" fill="#b9926f"/><circle cx="872" cy="110" r="15" fill="#b9926f"/></g>';
}
function draw(g){
 const p=phase[g?.page]||1;const sec=g?.sec||"laterizi";
 /* In this simulation the second assembly speaker is always the fact-free accusation;
    don't confuse a legitimate objection with a prejudicial one. */
 const pretextual= p===3&&g?.page==="dibattito"&&!!g.negozio&&g.interventi?.length===1;
 const done=g?.voto?.scelta;
 const status=p===1?"ASCOLTARE · VERIFICARE · RISPONDERE":p===2?"NEGOZIARE · VALUTARE · VERBALIZZARE":pretextual?"ASCOLTARE SENZA LEGITTIMARE I PREGIUDIZI":done==="approva"?"ACCORDO APPROVATO":done==="respinge"?"ACCORDO RESPINTO":"CONFRONTARSI · DECIDERE · VOTARE";
 const bubble=p===1?"?":p===2?"↔":pretextual?"!":done==="approva"?"✓":"…";
 const chars=p===1?person(150,GREEN,"speak") +person(420,"#e7a23e","question"):
 p===2?person(130,GREEN,"speak")+person(520,"#344c63","cross"):
 person(100,GREEN,"speak")+person(350,pretextual?RED:"#485d67",pretextual?"angry":"question")+
 person(490,"#dbab48","cross")+
 (p===3&&pretextual?'<rect x="348" y="170" width="116" height="24" rx="12" fill="#fce5e5"/><text x="406" y="186" fill="#a51b26" font-family="Arial" font-size="11" text-anchor="middle" font-weight="800">SENZA RISCONTRI</text>':'');
 const set=p===2?'<rect x="245" y="156" width="289" height="19" rx="5" fill="#b9875d"/><rect x="270" y="175" width="17" height="29" fill="#805a43"/><rect x="498" y="175" width="17" height="29" fill="#805a43"/><rect x="299" y="147" width="71" height="9" fill="#f5f5f1" stroke="#7ca3a0"/><rect x="399" y="147" width="80" height="9" fill="#f5f5f1" stroke="#7ca3a0"/>':
 p===1?'<rect x="327" y="131" width="73" height="52" rx="3" fill="#fff" stroke="#147f55" stroke-width="4"/><path d="M341 147h45M341 159h45M341 172h28" stroke="#95b7a7" stroke-width="3"/>':
 '<rect x="165" y="185" width="480" height="8" rx="4" fill="#9caa9f"/>';
 return '<div class="rsu-graphic" role="img" aria-label="Illustrazione fase '+p+'. Delegati RSU in verde; abiti rossi soltanto per le contestazioni senza riscontro.">'+
 '<svg viewBox="0 0 920 222" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><linearGradient id="rsuBg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#eef8f2"/><stop offset="1" stop-color="#d7ede0"/></linearGradient></defs>'+
 '<rect width="920" height="222" rx="16" fill="url(#rsuBg)"/>'+
 '<rect x="0" y="189" width="920" height="33" fill="#b4cfbd" opacity=".4"/>'+
 '<path d="M710 29h178v157H710z" fill="#f8faf7" stroke="#b8d4c6" stroke-width="3"/>'+
 plant(sec)+
 '<rect x="16" y="14" width="55" height="38" rx="13" fill="'+DEEP+'"/><text x="44" y="41" text-anchor="middle" fill="white" font-family="Arial" font-weight="900" font-size="26">'+p+'</text>'+
 '<rect x="83" y="17" width="425" height="31" rx="15" fill="#ffffff" opacity=".92"/><text x="99" y="38" font-family="Arial" font-size="14" font-weight="900" fill="'+DEEP+'">'+status+'</text>'+
 '<circle cx="'+(p===2?401:588)+'" cy="80" r="28" fill="'+(pretextual?"#f5dfdc":"#d0f0dc")+'" stroke="'+(pretextual?RED:GREEN)+'" stroke-width="3"/>'+
 '<text x="'+(p===2?401:588)+'" y="91" font-size="33" font-family="Arial" font-weight="800" text-anchor="middle" fill="'+(pretextual?RED:GREEN)+'">'+bubble+'</text>'+
 chars+set+
 '<rect x="723" y="183" width="160" height="19" rx="9" fill="'+DEEP+'"/><text x="803" y="196" text-anchor="middle" font-family="Arial" font-size="12" font-weight="900" fill="white">'+({laterizi:"LATERIZI",cemento:"CEMENTO",legno:"LEGNO",lapidei:"LAPIDEI"})[sec]+'</text>'+
 '</svg></div>';
}
window.RSUGrafica={draw};
})();