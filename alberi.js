const ALBERI = {
 "cemento": {
  "persone": [
   [
    "Nadia, conduttrice di sala controllo.",
    "«Quando manca qualcuno chiedono quasi sempre a me di coprire la notte. La RSU può verificare come vengono distribuiti i turni?» Ha conservato tre mesi di calendari. Le sostituzioni ricadono spesso su tre persone."
   ],
   [
    "Matteo, tecnico di laboratorio.",
    "«Devo sostenere un esame all’università. In laboratorio mi hanno suggerito di prendere ferie. Quale richiesta posso fare?» Può documentare la prova."
   ],
   [
    "Rosa, manutentrice elettromeccanica.",
    "«Nel riepilogo annuale vedo quattro settimane di ferie. L’anzianità conta?» Ha sedici anni di servizio e sta leggendo la spettanza annuale."
   ]
  ],
  "gruppi": [
   [
    "Assemblea dei turnisti",
    "Chi lavora di notte ha avuto poche occasioni di usare il nuovo sistema. Chiede posti accessibili, tempo per esercitarsi e recuperi se viene trattenuto al banco."
   ],
   [
    "Decisione sulla sala controllo",
    "Il collaudo dei nuovi videoterminali è stato fissato al mattino. Gli operatori serali segnalano riflessi e chiedono come si organizzano gli avvicendamenti al banco."
   ],
   [
    "Riunione tra manutenzione e produzione",
    "Dopo una fermata dovuta alla rete, il diario riporta il turno presente ma non la causa. I reparti chiedono una ricostruzione verificabile e indicazioni chiare per il cambio."
   ]
  ],
  "incastri": [
   [
    "01 · 02 · 16",
    "Notti e volontari",
    "«Se una persona si offre più spesso ma ha già coperto molte notti, la chiamate comunque per prima?»",
    "Con il registro e la rotazione: «Useremo i cambi effettivi per aggiornare la precedenza tra gli abilitati disponibili». Se si scelgono sia ordine alfabetico fisso sia precedenza a chi ha meno notti sul medesimo elenco, mostrare entrambe le formule. La RSU ne conferma una o lascia aperto il criterio."
   ],
   [
    "03 · 04 · 17",
    "Esami e sostituzioni",
    "«Matteo ha il certificato e non trova un cambio. La pratica parte?»",
    "Se le scelte separano richiesta, documenti e copertura: «Registriamo subito la richiesta e assegniamo la copertura al laboratorio». Se rimane l’addebito automatico delle ferie insieme alla causale esame, la squadra sceglie quale testo sostenere. La formula critica richiede verifica prima dell’applicazione."
   ],
   [
    "05 · 06 · 18",
    "Spettanze e rettifiche",
    "«Un dato medio in bacheca e il riscontro di Rosa possono convivere. Chi riceve la segnalazione e quando risponde?»",
    "Se concordati insieme: «Il personale fornirà il dato aggregato e aprirà pratiche individuali numerate». Se la procedura riguarda solo il pilota, la limitazione compare nel verbale. Una media non chiude la posizione di Rosa."
   ],
   [
    "07 · 08 · 09 · 12",
    "Accesso alla formazione",
    "«Abbiamo un solo posto sull’ultima data. Lo diamo al primo iscritto o a chi è rimasto finora senza corso?»",
    "Se restano due priorità incompatibili la RSU sceglie il criterio. Con posti protetti e recupero: «Prenotiamo il sostituto e registriamo la data della pratica per chi era al banco». Il collegamento dal banco da solo non equivale alla prova effettuata."
   ],
   [
    "10 · 11 · 12",
    "Collaudo e copertura",
    "«Il referente serale è anche l’unico abilitato presente al banco. Come può collaudare e coprire il cambio?»",
    "Se esiste una sostituzione concordata: «Indicheremo i due ruoli prima del turno». Se manca: «Confermiamo la parte documentale e rinviamo la prova pratica a una fascia coperta». Indicare quale impegno rimane condizionato."
   ],
   [
    "13 · 14 · 15",
    "Diario tecnico e consegne",
    "«Possiamo usare un solo diario. Il turno presente è un riferimento temporale o l’indicazione del responsabile del guasto?»",
    "Con causa verificata e consegna: «Registriamo turno, causa accertata o da chiarire e referente tecnico». Sul punto 14 l’apertura del riesame resta distinta dall’attribuzione di responsabilità. Un sospetto o una contestazione individuale richiedono ascolto e seguito dedicato."
   ]
  ],
  "proposals": [
   {
    "id": "01",
    "title": "Ricostruire le notti effettive",
    "origin": "Nadia e sala controllo",
    "p": "Affianchiamo al calendario previsto quello effettivo per tre mesi. Distinguiamo cambi richiesti dalle persone e sostituzioni chieste dal capo turno.",
    "quality": "Corretta. Permette di verificare l’esperienza di Nadia e di capire chi decide le variazioni.",
    "reply": "I turni previsti ci sono. I cambi a voce si perdono. Chi li annoterebbe nella notte?",
    "opts": [
     [
      "Il capoturno annota la variazione al cambio e il motivo con due causali. Verifica mensile con la RSU.",
      "Possiamo partire in sala controllo dal prossimo calendario e portarvi il riepilogo ogni mese.",
      "Intesa · Registro dei cambi per tre mesi in sala controllo, verifica mensile."
     ],
     [
      "Usiamo per ora solo il calendario ufficiale.",
      "Lo consegneremo ogni mese. Le sostituzioni effettive resteranno da ricostruire.",
      "Parziale · Disponibile il programmato, manca il consuntivo."
     ],
     [
      "Prima confrontiamo i tre mesi conservati da Nadia con le registrazioni aziendali.",
      "Fissiamo un incontro tra una settimana per esaminare gli scostamenti. Sul nuovo registro decidiamo dopo.",
      "Aperto · Confronto sui dati passati fissato, procedura futura da definire."
     ]
    ],
    "q": "«Se sostituisco qualcuno stanotte, come ve ne accorgerete?»"
   },
   {
    "id": "02",
    "title": "Affidare le emergenze ai tre esperti",
    "origin": "Nadia e coperture",
    "p": "Quando manca un conduttore di notte, chiamiamo sempre i tre colleghi più esperti in ordine alfabetico.",
    "quality": "Sbagliata rispetto al bisogno. Rende prevedibile la chiamata per il capoturno e concentra il disagio sulle stesse persone.",
    "reply": "Con quei tre garantiamo esperienza. Il primo nome potrebbe ricevere quasi tutte le chiamate. Confermate?",
    "opts": [
     [
      "Fra le persone abilitate chiamiamo prima chi ha coperto meno notti aggiuntive. Registriamo le indisponibilità e formiamo sostituti.",
      "Per un mese proviamo il criterio tra gli abilitati. Il piano per ampliare l’elenco richiede un incontro dedicato.",
      "Parziale · Rotazione sperimentale, ampliamento da negoziare."
     ],
     [
      "Ritiriamo l’elenco alfabetico e chiediamo quanti altri potrebbero essere affiancati.",
      "Vi consegneremo la mappa delle competenze entro venerdì.",
      "Ritirata · Elenco ritirato, mappa richiesta."
     ],
     [
      "Confermiamo e contiamo le chiamate a fine trimestre.",
      "Possiamo farlo da subito e mostrare il totale trimestrale.",
      "Convergenza critica · Elenco fisso, verifica tardiva della concentrazione."
     ]
    ],
    "q": "«Perché dovrei essere sempre io la prima persona chiamata?»"
   },
   {
    "id": "03",
    "title": "Rendere accessibili i permessi per esami",
    "origin": "Matteo e laboratorio",
    "p": "Indichiamo a tutti i turni come chiedere il permesso per un esame, quali documenti servono e chi dà riscontro quando l’ufficio personale è chiuso.",
    "quality": "Corretta. Un ostacolo incontrato da Matteo diventa una procedura utile anche agli altri studenti.",
    "reply": "Il portale è accessibile di giorno. Come raccogliamo una domanda inviata durante il turno di sera?",
    "opts": [
     [
      "Chiediamo prima una ricognizione delle domande rimaste senza risposta.",
      "Vi daremo il numero delle pratiche e i tempi medi alla prossima riunione.",
      "Aperto · Ricognizione concordata, canale ancora da scegliere."
     ],
     [
      "Usiamo una casella con ricevuta e un canale cartaceo equivalente. L’ufficio verifica i documenti il primo giorno di apertura.",
      "Va bene. Esporremo recapito, documenti e referente in laboratorio e in sala controllo.",
      "Intesa · Due canali con ricevuta, referente e verifica alla riapertura."
     ],
     [
      "Consegniamo un modulo al solo responsabile del laboratorio.",
      "Possiamo attivarlo lunedì. Negli altri reparti manca un referente.",
      "Parziale · Procedura del laboratorio, diffusione agli altri turni aperta."
     ]
    ],
    "q": "«Se porto il certificato dopo il turno di sera, come dimostro di averlo consegnato?»"
   },
   {
    "id": "04",
    "title": "Usare le ferie in attesa del certificato",
    "origin": "Matteo e ferie",
    "p": "Segniamo automaticamente come ferie ogni assenza per esame e lasciamo a chi studia il compito di chiederne la rettifica.",
    "quality": "Sbagliata come procedura generale. Un passaggio provvisorio può diventare una decurtazione stabile e rende difficile controllare la domanda originaria.",
    "reply": "Il gestionale scalerebbe subito le ferie. Se il collega non torna a chiedere la correzione, chi se ne accorge?",
    "opts": [
     [
      "Accettiamo il passaggio automatico e distribuiamo un promemoria.",
      "Il personale terrà la procedura come ipotesi da verificare con la disciplina del permesso.",
      "Convergenza critica · Prevista richiesta di rettifica individuale, con rischio sul saldo."
     ],
     [
      "Registriamo la causale esame in attesa di verifica documentale, con ricevuta e avviso di chiusura.",
      "Possiamo aprire una pratica dedicata e comunicare alla persona l’esito dopo la verifica.",
      "Intesa · Pratica esame separata, riscontro individuale conclusivo."
     ],
     [
      "Ritiriamo l’automatismo e seguiamo subito la richiesta di Matteo con i documenti.",
      "L’ufficio riceve Matteo domattina. La procedura generale resta da definire.",
      "Ritirata · Presa in carico del caso, regola comune aperta."
     ]
    ],
    "q": "«Sul mio prospetto come distinguerò il permesso dalla giornata di ferie?»"
   },
   {
    "id": "05",
    "title": "Verificare la spettanza annuale delle ferie",
    "origin": "Rosa e personale",
    "p": "Consegniamo a ciascuno un prospetto che distingua spettanza per anzianità, ferie godute e residuo. Prevediamo un referente per segnalare errori.",
    "quality": "Corretta. Permette a Rosa di controllare quale voce è in discussione e ad altri colleghi di fare la stessa verifica.",
    "reply": "Possiamo aggiungere le tre voci nell’area personale. Le vecchie anzianità vanno controllate sulle schede storiche. Da dove partiamo?",
    "opts": [
     [
      "Controlliamo subito la sola scheda di Rosa.",
      "La riceviamo venerdì con il riepilogo e la data di assunzione.",
      "Parziale · Verifica di Rosa, prospetto generale ancora aperto."
     ],
     [
      "Chiediamo una verifica preliminare di tutte le anzianità, prima di scegliere il formato.",
      "Vi daremo il numero aggregato di posizioni da rivedere fra due settimane.",
      "Aperto · Ricognizione generale, formato e termini rinviati."
     ],
     [
      "Partiamo dai casi con scatto di anzianità e fissiamo un riscontro individuale entro dieci giorni dalla segnalazione.",
      "Il personale prenderà in carico le segnalazioni e indicherà la data di correzione o il motivo del dato confermato.",
      "Intesa · Prospetto individuale, referente e riscontro entro dieci giorni."
     ]
    ],
    "q": "«Quel numero indica le ferie che mi spettano quest’anno o quelle che mi restano?»"
   },
   {
    "id": "06",
    "title": "Pubblicare il saldo medio dello stabilimento",
    "origin": "Rosa e trasparenza",
    "p": "Affiggiamo ogni trimestre un unico dato medio sulle ferie residue, come risposta alle richieste di verifica del saldo.",
    "quality": "Parzialmente corretta. La media segnala accumuli complessivi. Occorre un controllo individuale per rispondere a Rosa.",
    "reply": "La media è facile da produrre. Se è corretta, come individueremo un errore sulla singola posizione?",
    "opts": [
     [
      "Chiediamo di esaminare subito le differenze per anzianità prima di pubblicare un dato.",
      "Porteremo un quadro per fasce alla riunione senza affiggere nomi.",
      "Aperto · Da concordare l’uso del quadro aggregato."
     ],
     [
      "Usiamola solo per il confronto collettivo, con accesso riservato di ciascuno alla propria scheda.",
      "Accettiamo entrambe le viste. Il personale risponderà alle richieste individuali.",
      "Intesa · Media trimestrale e possibilità di controllo personale."
     ],
     [
      "Accettiamo la sola media e fissiamo una discussione trimestrale sugli accumuli.",
      "Va bene. Le singole posizioni seguiranno i canali attuali.",
      "Parziale · Confronto sugli accumuli, nessun nuovo strumento individuale."
     ]
    ],
    "q": "«Se il mio dato è sbagliato, a cosa mi serve conoscere la media?»"
   },
   {
    "id": "07",
    "title": "Riservare posti di formazione al turno di notte",
    "origin": "Assemblea dei turnisti",
    "p": "Distribuiamo le quattro giornate del fornitore tra i turni e riserviamo posti a chi di notte non ha ancora potuto esercitarsi sul nuovo sistema.",
    "quality": "Corretta. Collega l’accesso al corso alla distribuzione effettiva delle competenze.",
    "reply": "Delle diciotto persone già formate solo tre fanno la notte. Possiamo riservare posti, ma durante ogni corso serve un esperto in sala.",
    "opts": [
     [
      "Individuiamo prima la sostituzione e poi confermiamo posto e data a ogni persona.",
      "Per due giornate abbiamo già le coperture. Per le altre due vi presentiamo i nominativi abilitati entro venerdì.",
      "Parziale · Due giornate confermate, altre due subordinate alla copertura."
     ],
     [
      "Alterniamo i gruppi sulle quattro date con almeno un esperto in servizio e una lista dei recuperi.",
      "Con questa condizione possiamo proteggere i posti per tutte e quattro le date. Verifica dopo l’ultima.",
      "Intesa · Quattro date, coperture nominative di turno e recuperi tracciati."
     ],
     [
      "Chiediamo un istruttore disponibile anche di notte prima di sottoscrivere il piano.",
      "Il fornitore ora garantisce solo le quattro giornate. Chiederemo una replica in altra fascia.",
      "Aperto · Disponibilità serale da verificare."
     ]
    ],
    "q": "«Il mio posto resta prenotato se proprio quel giorno devo coprire la sala?»"
   },
   {
    "id": "08",
    "title": "Assegnare i posti ai primi iscritti",
    "origin": "Formazione e accesso dei turni",
    "p": "Apriamo le iscrizioni al nuovo sistema alle 9 e assegniamo i posti in ordine di arrivo fino a esaurimento.",
    "quality": "Sbagliata rispetto al divario osservato. Chi termina la notte o lavora lontano dal portale parte svantaggiato.",
    "reply": "Al mattino esauriremmo facilmente tutti i posti. Quante occasioni restano a chi dorme dopo il turno?",
    "opts": [
     [
      "Lasciamo due giorni per iscriversi. Poi diamo priorità a chi non è mai stato formato e ai turni meno coperti.",
      "Va bene. Il personale verificherà i criteri sul registro della formazione.",
      "Intesa · Finestra comune e priorità ai gruppi meno formati."
     ],
     [
      "Ritiriamo la proposta. Sentiamo i notturnisti sulle fasce praticabili.",
      "Terremo due posti provvisori fino a venerdì attendendo il vostro riscontro.",
      "Ritirata · Due posti accantonati temporaneamente, criterio da definire."
     ],
     [
      "Confermiamo le iscrizioni alle 9 e pubblichiamo gli esclusi in forma aggregata.",
      "Possiamo riportare quanti sono rimasti fuori dopo la chiusura.",
      "Convergenza critica · Ordine di arrivo confermato, accesso dei turni scoperto."
     ]
    ],
    "q": "«Quale posto troverò quando mi sveglio dopo la notte?»"
   },
   {
    "id": "09",
    "title": "Recuperare il corso perso per servizio",
    "origin": "Formazione e continuità di esercizio",
    "p": "Ogni volta che una persona perde il corso perché trattenuta in sala, assegniamo subito una nuova data di esercitazione pratica.",
    "quality": "Corretta. La presenza obbligata in impianto non si traduce in una rinuncia definitiva al corso.",
    "reply": "Dopo le quattro giornate il fornitore andrà via. Chi conduce i recuperi?",
    "opts": [
     [
      "Vogliamo una quinta data garantita dal fornitore prima di approvare il recupero.",
      "Non la possiamo confermare oggi. Raccoglieremo le sue disponibilità.",
      "Aperto · Data ulteriore da negoziare."
     ],
     [
      "Affianchiamo al fornitore un tutor interno e prenotiamo una sessione entro trenta giorni.",
      "Accettiamo se il tutor ha completato il percorso. Il responsabile formazione terrà il registro dei recuperi.",
      "Intesa · Tutor preparato e recupero entro trenta giorni."
     ],
     [
      "Inviamo intanto i materiali e chiediamo una data successiva per la pratica.",
      "Invieremo i materiali il giorno stesso. Sulla pratica non abbiamo ancora una data.",
      "Parziale · Materiali consegnati, esercitazione da fissare."
     ]
    ],
    "q": "«La registrazione del corso mi aiuta, ma quando potrò provare i comandi?»"
   },
   {
    "id": "10",
    "title": "Controllare l’introduzione dei nuovi schermi",
    "origin": "Decisione aziendale di rinnovo della sala",
    "p": "Prima del collaudo raccogliamo tempi di utilizzo, segnalazioni sui riflessi e difficoltà di lettura nei diversi turni. Coinvolgiamo RLS e addetti nel sopralluogo.",
    "quality": "Corretta. Dà voce a chi usa i videoterminali nelle condizioni reali di ciascun turno.",
    "reply": "Il fornitore collauda di mattina. Possiamo capire l’effetto dell’illuminazione notturna senza ritardare tutto?",
    "opts": [
     [
      "Verifichiamo un banco in fascia serale prima della messa in servizio e annotiamo gli interventi necessari.",
      "Il tecnico si fermerà per il cambio turno. Il responsabile raccoglierà i rilievi e indicherà le correzioni prima dell’avvio del banco.",
      "Intesa · Verifica serale del banco pilota e correzioni tracciate."
     ],
     [
      "Consegniamo al tecnico le foto e le segnalazioni dei turni, chiedendo poi un sopralluogo.",
      "Le esaminerà subito. Il secondo sopralluogo resta da prenotare.",
      "Parziale · Segnalazioni acquisite, verifica sul posto da fissare."
     ],
     [
      "Chiediamo l’esame di tutte le postazioni prima di concordare il calendario di estensione.",
      "Forniremo l’elenco delle postazioni e delle fasi di installazione per un nuovo incontro.",
      "Aperto · Calendario di estensione da definire."
     ]
    ],
    "q": "«Chi viene a vedere il riflesso che compare soltanto dopo il tramonto?»"
   },
   {
    "id": "11",
    "title": "Organizzare gli avvicendamenti al videoterminale",
    "origin": "Sala controllo e squadra di riserva",
    "p": "Programmiamo cambi di attività e coperture in sala affinché chi lavora al nuovo videoterminale possa effettuare le interruzioni previste.",
    "quality": "Corretta. Trasforma un’esigenza individuale in organizzazione del presidio. I requisiti applicabili si verificano sulle fonti.",
    "reply": "Il banco deve restare presidiato. Il manutentore di passaggio conosce l’impianto ma non è sempre abilitato alla conduzione.",
    "opts": [
     [
      "Sperimentiamo il cambio di attività sul banco pilota e chiediamo dati per estenderlo.",
      "Possiamo coprire il pilota da lunedì. Restano da organizzare gli altri banchi.",
      "Parziale · Banco pilota coperto, estensione aperta."
     ],
     [
      "Rinviamo la scelta delle persone e chiediamo alla direzione il fabbisogno di presidio per turno.",
      "Lo porteremo venerdì con il quadro delle abilitazioni.",
      "Aperto · Dati richiesti prima di concordare le coperture."
     ],
     [
      "Usiamo solo sostituti preparati e indichiamoli sul turno. Se manca il sostituto, decide subito il responsabile come assicurare la copertura.",
      "Accettiamo una prova di due settimane con elenco degli abilitati e segnalazione degli scostamenti.",
      "Intesa · Copertura qualificata programmata e verifica dopo due settimane."
     ]
    ],
    "q": "«Se il collega che dovrebbe darmi il cambio è assente, chi interviene?»"
   },
   {
    "id": "12",
    "title": "Far coincidere il corso con la conduzione della sala",
    "origin": "Copertura durante le quattro giornate",
    "p": "Facciamo seguire la dimostrazione in cuffia mentre la stessa persona conduce il banco, contando la giornata come formazione completata.",
    "quality": "Sbagliata. Presidio attivo e pratica guidata richiedono attenzione e responsabilità distinte.",
    "reply": "Ci eviterebbe una sostituzione. Se arriva un allarme durante l’esercizio, chi segue la lezione e chi presidia?",
    "opts": [
     [
      "Ritiriamo il doppio incarico e chiediamo al fornitore una diversa scansione dei gruppi.",
      "Rivedremo il programma senza registrare come formato chi era impegnato in conduzione.",
      "Ritirata · Programma da ripianificare."
     ],
     [
      "Correggiamo la formula e separiamo presidio ed esercitazione con un sostituto qualificato.",
      "Possiamo farlo su due date già coperte. Le altre presenze saranno confermate dopo la verifica dei turni.",
      "Parziale · Due esercitazioni protette, nessun doppio incarico."
     ],
     [
      "Chiediamo un collegamento solo per una breve presentazione, con pratica separata e copertura per chi partecipa.",
      "Possiamo distinguere i due moduli. Il registro darà evidenza separata della prova pratica.",
      "Intesa · Presentazione e prova distinte, coperture esplicite."
     ]
    ],
    "q": "«Se ho dovuto seguire un allarme, come saprete che ho davvero imparato a usare il sistema?»"
   },
   {
    "id": "13",
    "title": "Separare le cause delle fermate",
    "origin": "Riunione di manutenzione e produzione",
    "p": "Nel diario impianto distinguiamo guasto interno, interruzione elettrica esterna e causa da accertare. Ogni mese scegliamo gli interventi tecnici da approfondire.",
    "quality": "Corretta. Consente di destinare risorse a problemi su cui lo stabilimento può intervenire.",
    "reply": "Su 74 ore di fermata, 26 dipendono dalla rete esterna. Per gli altri episodi spesso si fanno ipotesi. Chi valida la causale?",
    "opts": [
     [
      "Il turno registra l’evento, la manutenzione verifica la causa entro la riunione mensile. I dubbi restano espliciti.",
      "Possiamo introdurre le tre causali e presentare alla RSU il prospetto aggregato.",
      "Intesa · Diario con verifica tecnica e confronto mensile."
     ],
     [
      "Cominciamo dalle sole interruzioni esterne già documentate.",
      "Le isoleremo nel prospetto. Le cause interne richiederanno una seconda analisi.",
      "Parziale · Distinte le fermate esterne, analisi interna aperta."
     ],
     [
      "Chiediamo prima un campione anonimo del diario per decidere i criteri.",
      "Vi mostreremo cinque eventi alla prossima riunione.",
      "Aperto · Criteri da definire sul campione."
     ]
    ],
    "q": "«Se la causa è ancora incerta, sul diario compare un’ipotesi o un guasto accertato?»"
   },
   {
    "id": "14",
    "title": "Attribuire ogni fermata al turno presente",
    "origin": "Diario impianto e responsabilità",
    "p": "Intestiamo la fermata alla squadra presente al banco e usiamo l’elenco per individuare il turno che deve cambiare modo di lavorare.",
    "quality": "Sbagliata. La presenza coincide nel tempo con l’evento e da sola non ne dimostra la causa.",
    "reply": "Per un blackout esterno il turno era in sala. Dobbiamo davvero attribuirgli quelle ore?",
    "opts": [
     [
      "Manteniamo solo il riepilogo per fascia senza giudicare la squadra. Verifichiamo le cause in seguito.",
      "Lo useremo come mappa temporale e fisseremo un approfondimento fra un mese.",
      "Parziale · Riepilogo temporale, attribuzione causale rinviata."
     ],
     [
      "Ritiriamo l’attribuzione e ascoltiamo chi ha gestito il blackout.",
      "Accettiamo un incontro di ricostruzione dell’episodio con i conduttori.",
      "Ritirata · Nessuna attribuzione alla squadra, incontro tecnico concordato."
     ],
     [
      "Tenete l’orario per ricostruire l’evento e classificate separatamente la causa tecnica.",
      "Possiamo distinguere le due colonne e rivedere gli episodi con la manutenzione.",
      "Intesa · Orario e causa separati, verifica tecnica con manutenzione."
     ]
    ],
    "q": "«Il guasto era sulla rete esterna. Perché dovrebbe pesare sulla valutazione del mio turno?»"
   },
   {
    "id": "15",
    "title": "Preparare la consegna dopo un guasto",
    "origin": "Incontro con manutentori e conduttori",
    "p": "Al cambio turno condividiamo causa nota, intervento effettuato, limitazioni residue e referente tecnico prima della ripartenza.",
    "quality": "Corretta. I colleghi che subentrano sanno quale problema resta aperto e chi può chiarirlo.",
    "reply": "La squadra successiva spesso trova solo la dicitura “ripristinato”. Chi può completarla se il tecnico è già uscito?",
    "opts": [
     [
      "Rinviamo il formato finché non abbiamo ascoltato chi prende servizio la notte.",
      "Incontreremo il turno notturno al cambio di mercoledì.",
      "Aperto · Ascolto programmato, procedura da definire."
     ],
     [
      "Prevediamo un referente per fascia e un passaggio in orario fra turno uscente e subentrante.",
      "Sulla macinazione possiamo provarlo un mese. Il capo manutenzione verificherà le schede incomplete.",
      "Parziale · Prova in macinazione, estensione agli altri impianti aperta."
     ],
     [
      "Inseriamo i quattro campi nel diario e chiediamo alla manutenzione un referente di reparto per le anomalie aperte.",
      "Accettiamo un riferimento tecnico per ciascuna fascia operativa e la verifica settimanale dei casi ancora aperti.",
      "Intesa · Quattro campi e referente per fascia, verifica settimanale."
     ]
    ],
    "q": "«Quando leggo “ripristinato”, chi mi conferma se rimangono limitazioni?»"
   },
   {
    "id": "16",
    "title": "Scegliere le sostituzioni con un elenco volontario",
    "origin": "Nadia e organizzazione dei cambi",
    "p": "Apriamo un elenco di volontari per le notti scoperte e aggiorniamolo ogni mese.",
    "quality": "Parzialmente corretta. La disponibilità aiuta ma occorrono criteri di chiamata, competenze e controllo della concentrazione.",
    "reply": "Tre persone si sono già offerte. Se restano le sole, come cambia la situazione di Nadia?",
    "opts": [
     [
      "Prevediamo revoca della disponibilità, chiamata a rotazione fra abilitati e verifica mensile del carico.",
      "Possiamo adottare l’elenco con queste condizioni e discutere le carenze di copertura ogni mese.",
      "Intesa · Elenco revocabile con rotazione e verifica del carico."
     ],
     [
      "Usiamo l’elenco per un mese e riportiamo quanti turni ha coperto ciascuna fascia.",
      "Accettiamo la prova. I criteri di chiamata resteranno affidati ai capi.",
      "Parziale · Elenco pilota, criterio di distribuzione da completare."
     ],
     [
      "Chiediamo una proposta ordinaria di copertura prima di raccogliere disponibilità.",
      "Produzione vi porterà il calendario e i vuoti previsti la prossima settimana.",
      "Aperto · Calendario atteso, elenco rinviato."
     ]
    ],
    "q": "«Se mi tolgo dall’elenco, come sarà coperta la notte successiva?»"
   },
   {
    "id": "17",
    "title": "Legare il permesso esame al reperimento di un cambio",
    "origin": "Matteo e copertura del laboratorio",
    "p": "Facciamo presentare la richiesta d’esame solo quando lo studente ha già individuato un collega per il cambio.",
    "quality": "Sbagliata. Trasferisce sulla persona una responsabilità organizzativa e rischia di ostacolare la richiesta di una tutela.",
    "reply": "Se nessuno cambia con Matteo, dobbiamo davvero lasciare la pratica ferma?",
    "opts": [
     [
      "Gli scambi disponibili possono essere segnalati facoltativamente allegando la domanda.",
      "Li valuteremo come aiuto organizzativo. Prenderemo in carico anche le richieste prive di scambio.",
      "Intesa · Scambio facoltativo, ricevuta per tutte le domande."
     ],
     [
      "Ritiriamo la condizione e assistiamo Matteo nella verifica della sua richiesta.",
      "Il personale incontrerà Matteo e la RSU. La procedura comune viene rinviata.",
      "Ritirata · Seguito individuale e procedura generale aperta."
     ],
     [
      "La domanda parte subito. Il responsabile del laboratorio organizza la copertura e informa lo studente sul seguito.",
      "Concordiamo un canale diretto e una verifica separata delle coperture.",
      "Intesa · Domanda ricevuta subito, copertura a carico dell’organizzazione."
     ]
    ],
    "q": "«Se il mio collega è in ferie, posso comunque presentare la documentazione dell’esame?»"
   },
   {
    "id": "18",
    "title": "Aprire un canale di rettifica dei dati ferie",
    "origin": "Rosa e ufficio personale",
    "p": "Istituiamo un recapito riservato per chi contesta la spettanza o il residuo. Ogni richiesta riceve un numero e una risposta motivata.",
    "quality": "Corretta. Rende verificabile la conclusione della pratica conservando la riservatezza della singola posizione.",
    "reply": "Possiamo dare un numero subito. Alcune anzianità storiche richiedono più tempo. Che cosa promettiamo alla persona?",
    "opts": [
     [
      "Chiediamo una verifica sulla pratica di Rosa prima di fissare termini comuni.",
      "La esamineremo nella settimana. Torniamo sulla procedura al prossimo incontro.",
      "Aperto · Pratica individuale avviata, termini comuni da concordare."
     ],
     [
      "Risposta entro dieci giorni oppure, se manca un documento, indicazione di quello necessario e della nuova data.",
      "Il personale può rispettare questo impegno e riportare alla RSU i soli tempi aggregati.",
      "Intesa · Ricevuta, termine e aggiornamento motivato."
     ],
     [
      "Partiamo per due mesi dai casi di anzianità oltre quindici anni e poi estendiamo.",
      "Possiamo gestire il gruppo pilota e fare il punto dopo due mesi.",
      "Parziale · Pilota sulle anzianità, estensione da valutare."
     ]
    ],
    "q": "«Se il documento storico non si trova, quando qualcuno mi aggiornerà?»"
   }
  ]
 },
 "lapidei": {
  "persone": [
   [
    "Elisa, operaia di lucidatura.",
    "«Per usare di più le lucidatrici vogliono spostare il nostro riposo del sabato a rotazione. Che ruolo ha la RSU?» La proposta riguarda il trimestre e un reparto su cinque giorni."
   ],
   [
    "Samir, tecnico CAD.",
    "«Il turno del pomeriggio ora coincide con le lezioni serali. Devo trovare un collega disposto allo scambio ogni settimana?» Ha calendario e attestazioni dell’istituto tecnico."
   ],
   [
    "Irene, operaia al taglio.",
    "«Nel reparto taglio vorremmo esprimere le preferenze prima che escano le chiusure. Il contratto ne tiene conto?» Diverse persone chiedono le stesse due settimane."
   ]
  ],
  "gruppi": [
   [
    "Assemblea dopo la proposta sui sabati",
    "I turnisti chiedono di leggere insieme uscita, rientro e riposo previsto. Alcuni scambi successivi alla pubblicazione hanno cambiato la sequenza effettiva."
   ],
   [
    "Riunione con la finitura",
    "Gli addetti mostrano due lastre della stessa superficie che richiedono passaggi diversi. Chiedono che piano e urgenze tengano conto del lavoro effettivo."
   ],
   [
    "Decisione sul secondo videoterminale CAD",
    "L’azienda intende visualizzare insieme disegno e scheda lotto. CAD e taglio segnalano che due revisioni sono arrivate dopo la preparazione e chiedono come identificare la versione valida e chi contattare."
   ]
  ],
  "incastri": [
   [
    "01 · 02 · 03 · 13 · 14",
    "Sabati e riposi effettivi",
    "«Il sabato è assegnato a rotazione. Un cambio del venerdì sera accorcia l’intervallo prima del rientro. Chi lo verifica?»",
    "Con controllo preventivo: «Il capoturno verifica il turno effettivo prima di confermare». Il conteggio dei sabati e il riepilogo trimestrale restano strumenti di osservazione. Se si tenta di confermare contemporaneamente riposo identificato e data da decidere dopo, la squadra deve scegliere un testo o riaprire il punto."
   ],
   [
    "04 · 05 · 06 · 16",
    "Frequenza di Samir e continuità del CAD",
    "«Se Samir è a lezione e nessun volontario si offre, a chi arriva il disegno urgente?»",
    "Con calendario compatibile e referente formato: «Il responsabile organizza la copertura e il tecnico disponibile verifica la revisione». Se il sostituto è ancora in affiancamento, la validazione attende la persona qualificata. La disponibilità di Samir a uno scambio rimane facoltativa."
   ],
   [
    "07 · 08 · 17",
    "Ferie del taglio e aperture del deposito",
    "«Quando due famiglie chiedono la stessa settimana, verifichiamo prima la copertura con il deposito o promettiamo già la data?»",
    "Se i piani sono coordinati: «Prima definiamo le coperture, poi applichiamo il criterio concordato e comunichiamo i calendari». Se esiste solo una finestra di raccolta, resta aperta la data della conferma. Un’intesa sulla settimana pilota non si estende da sola all’estate."
   ],
   [
    "09 · 10 · 12",
    "Tempi delle lavorazioni speciali",
    "«Abbiamo un lotto speciale di pochi metri ma con due passaggi in più. Dove compare il carico?»",
    "Con tempi rivisti: «Aggiorniamo la scheda sul campione e controlliamo ore impegnate prima dell’urgenza». Uno standard provvisorio è compatibile se si sospende al cambio del lotto. Se manca il tempo alternativo, quel pezzo resta da riprogrammare."
   ],
   [
    "11 · 15 · 16",
    "Nuove revisioni a piano chiuso",
    "«Il cliente cambia il disegno alle 17. Il CAD ha finito. Possiamo confermare la consegna al cliente?»",
    "Con revisione validata e referente disponibile: «Commessa sente taglio e deposito prima della conferma». Se la persona qualificata è assente, l’attesa di validazione diventa un vincolo della consegna. Si registra l’ordine che slitta."
   ],
   [
    "15 · 18",
    "Postazione CAD e versione corretta",
    "«La revisione è leggibile sullo schermo pilota. Vale già come autorizzazione al taglio?»",
    "Con ruoli di validazione concordati: «Il referente verifica versione e lotto prima del via». Se si è ottenuto solo un test di leggibilità, la responsabilità di autorizzare resta aperta. Il pilota su un banco non si applica alle altre postazioni."
   ]
  ],
  "proposals": [
   {
    "id": "01",
    "title": "Sperimentare lo scorrimento dei riposi",
    "origin": "Elisa e lucidatura",
    "p": "Concordiamo una prova di otto settimane in lucidatura con calendario dei sabati, riposi sostitutivi identificati e verifica dei turni effettivamente svolti.",
    "quality": "Corretta. Considera insieme utilizzo degli impianti, riposo effettivo e prevedibilità.",
    "reply": "Ci serve usare le lucidatrici il sabato per tutto il trimestre. Possiamo iniziare con otto settimane. Quando valutiamo se proseguire?",
    "opts": [
     [
      "Quarta e ottava settimana, con calendari previsti ed effettivi. Ogni estensione torna al tavolo.",
      "Accettiamo le due verifiche. Consegneremo i prospetti tre giorni prima.",
      "Intesa · Prova di otto settimane con due verifiche ed estensione da concordare."
     ],
     [
      "Proviamo su una sola squadra e raccogliamo i problemi di riposo al primo cambio di ciclo.",
      "Possiamo iniziare dalla prima squadra per quattro settimane.",
      "Parziale · Pilota ristretto, secondo gruppo e seguito aperti."
     ],
     [
      "Chiediamo prima i dati sull’utilizzo del sabato e sulle coperture disponibili.",
      "Vi daremo il quadro delle ultime sei settimane. Oggi non fissiamo la partenza.",
      "Aperto · Dati richiesti prima di definire lo scorrimento."
     ]
    ],
    "q": "«In quale giorno riposo nella settimana in cui lavoro sabato?»"
   },
   {
    "id": "02",
    "title": "Contare soltanto i sabati distribuiti",
    "origin": "Elisa e assemblea dei turnisti",
    "p": "Usiamo come unico criterio di equità il numero di sabati assegnati a ogni persona nel trimestre.",
    "quality": "Parzialmente corretta. Il conteggio aiuta a vedere concentrazioni ma non mostra durata e collocazione dei riposi.",
    "reply": "Con sei sabati a testa il conteggio potrebbe essere uguale anche per chi ha più cambi ravvicinati. Quali dati volete vedere?",
    "opts": [
     [
      "Per ora usiamo solo il conteggio dei sabati, con un recapito per segnalare anomalie.",
      "Lo pubblicheremo per turno. Il responsabile riceverà le segnalazioni individuali.",
      "Parziale · Conteggio e segnalazioni, verifica sistematica dei riposi aperta."
     ],
     [
      "Sospendiamo il criterio e chiediamo due calendari tipo da discutere nel reparto.",
      "Li porteremo alla prossima assemblea tecnica con la RSU.",
      "Aperto · Equità da valutare sui due calendari."
     ],
     [
      "Aggiungete uscita, rientro e riposo effettivo. Verifichiamo anche gli scambi intervenuti dopo la pubblicazione.",
      "Possiamo incrociare i calendari con il consuntivo e discuterli ogni mese.",
      "Intesa · Sabati e riposi effettivi controllati ogni mese."
     ]
    ],
    "q": "«Ho lo stesso numero di sabati di un collega, ma meno tempo tra uscita e rientro. Dove emerge?»"
   },
   {
    "id": "03",
    "title": "Far scegliere il riposo dopo il sabato lavorato",
    "origin": "Elisa e pianificazione",
    "p": "Programmiamo il sabato di lavoro e decidiamo il giorno di riposo quando arrivano le commesse successive.",
    "quality": "Sbagliata. Lascia incerto un elemento essenziale della programmazione e rende difficile controllare il riposo obbligatorio.",
    "reply": "Ci lascerebbe flessibilità. Che cosa scriviamo oggi sul calendario che Elisa deve organizzare in famiglia?",
    "opts": [
     [
      "Ritiriamo la formula del riposo da decidere dopo. Torniamo ai turnisti per il mandato.",
      "Prendiamo atto. Oggi nessun calendario viene concordato.",
      "Ritirata · Nuovo mandato sui riposi."
     ],
     [
      "Indichiamo ora il giorno di riposo per ogni sabato e la procedura per ogni variazione.",
      "Possiamo formulare una bozza su quattro settimane e verificare gli intervalli prima di emetterla.",
      "Intesa · Calendario di quattro settimane con riposi identificati e verifica preventiva."
     ],
     [
      "Chiediamo la bozza anticipata del solo reparto lucidatura e un controllo con RSU prima della prova.",
      "La consegneremo entro venerdì. La prova attenderà la verifica.",
      "Parziale · Bozza e controllo concordati, avvio aperto."
     ]
    ],
    "q": "«Prima di dire sì al sabato, quando potrò vedere il riposo previsto?»"
   },
   {
    "id": "04",
    "title": "Raccogliere i calendari scolastici",
    "origin": "Samir e ufficio CAD",
    "p": "Prima di ogni quadrimestre raccogliamo in modo riservato orari delle lezioni e documentazione degli studenti. L’ufficio turni esamina le compatibilità prima di pubblicare il piano.",
    "quality": "Corretta. Trasforma le difficoltà settimanali di Samir in programmazione anticipata.",
    "reply": "Ci serve qualcuno al CAD il pomeriggio. Se Samir ha lezione due sere, come copriamo quelle ore?",
    "opts": [
     [
      "Verifichiamo con gli altri tecnici la copertura e restituiamo a ogni studente il calendario prima delle lezioni.",
      "Per il quadrimestre possiamo chiudere la verifica sette giorni prima dell’avvio.",
      "Intesa · Raccolta riservata, verifica delle coperture e calendario sette giorni prima."
     ],
     [
      "Iniziamo dalla posizione documentata di Samir e verifichiamo dopo un mese le altre richieste.",
      "Possiamo concordare con lui il turno del prossimo mese. L’estensione resta aperta.",
      "Parziale · Calendario mensile di Samir, altri studenti da includere."
     ],
     [
      "Chiediamo prima il fabbisogno CAD per fascia e le competenze dei sostituti.",
      "Vi porteremo il prospetto degli orari alla riunione di giovedì.",
      "Aperto · Quadro richiesto, procedura da definire."
     ]
    ],
    "q": "«Quando riceverò un turno che posso confrontare con il calendario della scuola?»"
   },
   {
    "id": "05",
    "title": "Affidare allo studente ogni scambio",
    "origin": "Samir e turni serali",
    "p": "Riserviamo agli studenti la possibilità di scambiarsi il turno a condizione che trovino personalmente un sostituto ogni settimana.",
    "quality": "Sbagliata rispetto al caso. Rende la frequenza dipendente dalla disponibilità occasionale dei colleghi.",
    "reply": "Va bene per l’ufficio turni. Se tutti sono impegnati, Samir perde la lezione o chi interviene?",
    "opts": [
     [
      "Manteniamo un elenco di volontari e rivediamolo con il responsabile dopo due settimane.",
      "Possiamo provarlo, ma oggi non garantiamo una soluzione per ogni fascia.",
      "Parziale · Elenco volontario, situazioni prive di sostituto aperte."
     ],
     [
      "Ritiriamo la condizione. Accompagniamo Samir all’incontro sul suo orario documentato.",
      "Lo riceveremo prima del prossimo turno pomeridiano.",
      "Ritirata · Assistenza individuale, regola generale aperta."
     ],
     [
      "La segnalazione va al responsabile che cerca una soluzione programmata. Lo scambio può essere proposto anche dallo studente.",
      "Accettiamo una verifica settimanale prima della pubblicazione dei turni.",
      "Intesa · Responsabile incaricato delle compatibilità, scambio facoltativo."
     ]
    ],
    "q": "«Se mancano volontari, a chi posso portare l’orario delle lezioni?»"
   },
   {
    "id": "06",
    "title": "Distinguere lezioni ed esami",
    "origin": "Samir e richieste degli studenti",
    "p": "Indichiamo nel modulo se la richiesta riguarda la frequenza o una prova d’esame, con referente e documenti pertinenti per ciascun percorso.",
    "quality": "Corretta. Consente di chiedere la misura appropriata e di risalire alla fonte contrattuale.",
    "reply": "Possiamo preparare due percorsi. Chi controlla che in reparto non venga usato sempre il modulo esami?",
    "opts": [
     [
      "Rinviamo il modulo e verifichiamo subito la richiesta di frequenza di Samir.",
      "Il personale lo riceve con calendario e attestazioni.",
      "Aperto · Caso avviato, procedura comune rinviata."
     ],
     [
      "Facciamo verificare la scheda a personale e RSU sul CCNL e consegniamola ai capi turno.",
      "D’accordo. Dopo il primo mese rivedremo insieme le richieste indirizzate al percorso sbagliato.",
      "Intesa · Istruzioni condivise e verifica mensile iniziale."
     ],
     [
      "Prepariamo una scheda per il CAD e raccogliamo domande dagli altri reparti.",
      "Possiamo iniziare dal CAD, poi discuteremo la diffusione.",
      "Parziale · Scheda pilota, altri reparti aperti."
     ]
    ],
    "q": "«Se il problema sono le lezioni del martedì, quale richiesta presento?»"
   },
   {
    "id": "07",
    "title": "Raccogliere le preferenze prima delle chiusure",
    "origin": "Irene e reparto taglio",
    "p": "Apriamo una finestra per le preferenze ferie prima di fissare le chiusure, comunichiamo le sovrapposizioni e definiamo quando arriva la risposta.",
    "quality": "Corretta. Dà una possibilità reale di incidere sul calendario prima che la scelta sia definitiva.",
    "reply": "Taglio e deposito attendono gli ordini estivi. Se il piano ordini cambia, come rispondiamo a chi ha già chiesto le stesse settimane?",
    "opts": [
     [
      "Preferenze entro aprile, risposta a metà maggio e confronto preventivo sulle variazioni successive.",
      "Possiamo rispettare le date se i responsabili ci consegnano le coperture la prima settimana di maggio.",
      "Intesa · Scadenze concordate e confronto sulle variazioni, coperture da acquisire."
     ],
     [
      "Concordiamo subito la finestra, poi chiediamo un secondo incontro sulle date finali.",
      "Fissiamo la raccolta ad aprile e l’incontro il 5 maggio.",
      "Parziale · Finestra e incontro, data della risposta ancora aperta."
     ],
     [
      "Vogliamo prima conoscere i vincoli di chiusura del deposito.",
      "Li raccoglieremo entro venerdì. Il piano ferie torna al tavolo.",
      "Aperto · Vincoli richiesti prima del calendario."
     ]
    ],
    "q": "«La mia preferenza sarà letta prima che vengano decise le chiusure?»"
   },
   {
    "id": "08",
    "title": "Dare le settimane contese sempre agli stessi",
    "origin": "Irene e sovrapposizioni",
    "p": "Assegniamo le due settimane più richieste a chi le ha ottenute l’estate scorsa per ridurre il numero di cambi organizzativi.",
    "quality": "Sbagliata. Consolida le esclusioni e lascia senza risposta chi ha già rinunciato.",
    "reply": "Il piano sarebbe rapido da rifare. Cosa diciamo ai colleghi che hanno ceduto le settimane lo scorso anno?",
    "opts": [
     [
      "Cerchiamo prima scambi volontari e rimandiamo il criterio per le domande ancora in conflitto.",
      "Apriremo tre giorni per gli scambi e riconvocheremo la RSU sui conflitti residui.",
      "Parziale · Finestra di scambio, criterio finale aperto."
     ],
     [
      "Ritiriamo la conferma automatica e consultiamo chi è rimasto escluso.",
      "Attenderemo la proposta prima di assegnare le settimane contese.",
      "Ritirata · Assegnazioni contese sospese in attesa del confronto."
     ],
     [
      "Diamo loro priorità a parità di copertura e tracciamo le rinunce per l’anno successivo.",
      "Possiamo applicarlo quest’estate verificando lo storico del taglio.",
      "Intesa · Rotazione nel taglio a parità di copertura."
     ]
    ],
    "q": "«Se l’anno scorso ho lasciato il posto a un collega, quest’anno conterà?»"
   },
   {
    "id": "09",
    "title": "Programmare i pezzi speciali per tipo di lavorazione",
    "origin": "Incontro dei lavoratori della finitura",
    "p": "Distinguere nel piano settimanale lastre standard e pezzi speciali, indicando passaggi richiesti, competenze disponibili e margine per gli imprevisti.",
    "quality": "Corretta. Il maggior peso delle finiture complesse viene tradotto in tempi e carichi riconoscibili.",
    "reply": "Le ore dedicate agli speciali sono salite dal 20 al 34 per cento. Il cliente cambia talvolta la finitura dopo il campione. Chi aggiorna il piano?",
    "opts": [
     [
      "Chiediamo una settimana di osservazione con gli addetti prima di scegliere le categorie.",
      "Il caporeparto raccoglierà con loro cinque esempi da riportare al tavolo.",
      "Aperto · Campione da analizzare, classificazione da concordare."
     ],
     [
      "Il responsabile commesse aggiorna la scheda dopo il campione e avvisa finitura e deposito prima di cambiare consegna.",
      "Proviamo per un mese su tutti i pezzi speciali e discutiamo ogni venerdì gli scostamenti.",
      "Intesa · Piano aggiornato dal responsabile, avviso ai reparti e verifica settimanale."
     ],
     [
      "Iniziamo dalle sole commesse con venature fuori campione.",
      "Possiamo tracciarle da lunedì. Per gli altri pezzi terremo il piano attuale.",
      "Parziale · Pilota sulle venature, altre finiture aperte."
     ]
    ],
    "q": "«Se cambia la pietra del lotto a metà commessa, chi rivede il tempo previsto?»"
   },
   {
    "id": "10",
    "title": "Usare un solo tempo per tutte le lastre",
    "origin": "Finitura e carichi",
    "p": "Calcoliamo il tempo assegnato a un pezzo speciale usando lo stesso tempo al metro quadrato delle lastre standard.",
    "quality": "Sbagliata. Il dato di superficie trascura venature, passaggi manuali e attrezzaggi. Può occultare gli sforamenti.",
    "reply": "Il calcolo è semplice. Per le lastre venate che richiedono due passaggi in più, dove mettiamo quel tempo?",
    "opts": [
     [
      "Aggiungiamo alla scheda i passaggi effettivi e rivediamo il tempo col reparto dopo il campione.",
      "Lo accettiamo per le commesse con finitura speciale. Il responsabile approverà la revisione.",
      "Intesa · Tempi rivisti sulla scheda di commessa."
     ],
     [
      "Usiamo il tempo standard come preventivo provvisorio, con facoltà del capo reparto di sospenderlo se cambia il lotto.",
      "Concordiamo la sospensione documentata. I tempi alternativi vanno ancora costruiti.",
      "Parziale · Standard provvisorio con sospensione, tempi speciali aperti."
     ],
     [
      "Ritiriamo il tempo unico e chiediamo i consuntivi dei pezzi speciali.",
      "Vi forniremo quelli delle ultime quattro commesse.",
      "Ritirata · Consuntivi richiesti per nuova proposta."
     ]
    ],
    "q": "«Dove si vede che su questa lastra ho dovuto ripetere la finitura?»"
   },
   {
    "id": "11",
    "title": "Gestire le urgenze dopo la pubblicazione del piano",
    "origin": "Decisione dell’ufficio commesse",
    "p": "Per ogni urgenza sopraggiunta registriamo chi la autorizza, quale commessa slitta e quali reparti subiscono lo spostamento.",
    "quality": "Corretta. Rende esplicito il costo organizzativo di una nuova priorità e permette di avvisare chi ne subisce gli effetti.",
    "reply": "Nove delle ultime quindici urgenze sono arrivate a piano già pubblicato. Non sempre possiamo riunire tutti. Qual è il passaggio minimo?",
    "opts": [
     [
      "Per un mese annotiamo le variazioni e discutiamole a fine settimana.",
      "Possiamo farlo subito. Nel frattempo l’ordine urgente entra con la procedura corrente.",
      "Parziale · Registro e verifica successiva, prevenzione aperta."
     ],
     [
      "Chiediamo di rifiutare ogni urgenza dopo il piano.",
      "Sul blocco assoluto non ci siamo. Porteremo gli esempi di ordini rinviabili e inderogabili.",
      "Aperto · Criterio per le eccezioni da negoziare."
     ],
     [
      "Prima di confermare la consegna, commesse sente il responsabile della lavorazione spostata e informa deposito e turni interessati.",
      "Accettiamo un referente per reparto e una comunicazione scritta lo stesso giorno.",
      "Intesa · Verifica prima della conferma e avviso tracciato."
     ]
    ],
    "q": "«Quando cambiate la mia commessa, chi avverte l’altro reparto che aspetta il pezzo?»"
   },
   {
    "id": "12",
    "title": "Distribuire le urgenze guardando solo i volumi",
    "origin": "Urgenze e pezzi speciali",
    "p": "Assegniamo il prossimo ordine urgente al reparto che ha completato meno metri quadrati nella settimana.",
    "quality": "Sbagliata. Superfici lavorate e capacità disponibile divergono soprattutto sui pezzi speciali.",
    "reply": "Il reparto con meno metri sta rifinendo pezzi fuori campione. Gli assegniamo comunque il nuovo ordine?",
    "opts": [
     [
      "Ritiriamo il criterio sui metri e chiediamo agli addetti due esempi di carico sottostimato.",
      "Il responsabile commesse parteciperà alla ricostruzione.",
      "Ritirata · Criterio ritirato, esempi da esaminare."
     ],
     [
      "Prima controlliamo ore impegnate, competenze e scadenze sulle schede di commessa.",
      "Possiamo concordare questa verifica prima della riassegnazione e riportarla sul piano.",
      "Intesa · Nuova urgenza assegnata dopo verifica dei carichi reali."
     ],
     [
      "Usiamo i metri solo per individuare chi sentire, lasciando al responsabile la possibilità di motivare l’indisponibilità.",
      "Accettiamo il passaggio al responsabile. Il confronto tra carichi resta da uniformare.",
      "Parziale · Diritto di segnalare saturazione, criteri ancora incompleti."
     ]
    ],
    "q": "«Come fate a sapere se abbiamo ore libere quando un pezzo piccolo impegna mezza giornata?»"
   },
   {
    "id": "13",
    "title": "Controllare uscita e rientro dopo una variazione",
    "origin": "Elisa e riposo obbligatorio",
    "p": "Prima di confermare un cambio, verifichiamo sul turno effettivo l’uscita precedente, il rientro e il riposo settimanale previsto dal regime applicabile.",
    "quality": "Corretta. Il controllo riguarda il riposo realmente fruibile e si applica anche agli scambi richiesti dopo la programmazione.",
    "reply": "Sul piano i riposi tornano. La criticità è lo scambio dell’ultima ora. Chi può confermarlo?",
    "opts": [
     [
      "Il capoturno controlla gli intervalli e annota la decisione. Se non può verificare, propone una copertura alternativa.",
      "Accettiamo la procedura e consegneremo alla RSU un riepilogo mensile aggregato degli scambi bloccati.",
      "Intesa · Controllo preventivo sul turno effettivo e alternative tracciate."
     ],
     [
      "Sperimentiamolo in lucidatura per quattro settimane e raccogliamo gli scostamenti negli altri reparti.",
      "Sul pilota siamo disponibili. Fissiamo già il confronto per l’estensione.",
      "Parziale · Pilota e verifica concordati, estensione aperta."
     ],
     [
      "Chiediamo prima i calendari dei due ultimi cicli per individuare i casi critici.",
      "Li esamineremo con voi lunedì. La procedura resta da definire.",
      "Aperto · Esame dei cicli pregressi, regola futura rinviata."
     ]
    ],
    "q": "«Se faccio uno scambio il venerdì sera, chi controlla quando posso rientrare?»"
   },
   {
    "id": "14",
    "title": "Recuperare i riposi con un conteggio a fine trimestre",
    "origin": "Cambio turni e urgenze",
    "p": "Autorizziamo ogni cambio richiesto e controlliamo solo alla fine del trimestre il totale dei giorni di riposo.",
    "quality": "Sbagliata. Il controllo tardivo del totale non consente di prevenire intervalli insufficienti tra due prestazioni.",
    "reply": "Il totale può sembrare regolare anche con due servizi troppo vicini. Come interveniamo prima del rientro?",
    "opts": [
     [
      "Conserviamo il riepilogo aggregato e ritiriamo l’autorizzazione generalizzata.",
      "Possiamo usare il riepilogo a fini di osservazione, mantenendo il controllo dei singoli cambi.",
      "Parziale · Riepilogo concordato, nuova procedura da definire."
     ],
     [
      "Sospendiamo la richiesta fino alla verifica di Guida, CCNL e calendario del reparto.",
      "Porteremo al confronto i turni effettivi e gli accordi di stabilimento disponibili.",
      "Aperto · Verifica delle fonti e dei turni prima della scelta."
     ],
     [
      "Introduciamo un controllo prima di approvare lo scambio e usiamo il totale trimestrale per individuare ricorrenze.",
      "D’accordo. La validazione passa al capoturno con accesso ai turni effettivi.",
      "Intesa · Validazione preventiva e riepilogo trimestrale."
     ]
    ],
    "q": "«Se il problema è il rientro di domani, quando verrebbe scoperto?»"
   },
   {
    "id": "15",
    "title": "Concordare avvisi tra CAD e taglio",
    "origin": "Segnalazione congiunta di tecnici e operatori",
    "p": "Prima di avviare un taglio fuori standard, CAD e taglio esaminano la stessa revisione del disegno e individuano chi autorizza la partenza.",
    "quality": "Corretta. La richiesta nasce da due disegni aggiornati dopo la preparazione del lotto e riduce le istruzioni discordanti.",
    "reply": "Quando l’ultimo disegno arriva a fine pomeriggio, il progettista può essere già uscito. Chi può validarlo?",
    "opts": [
     [
      "Chiediamo prima una simulazione su due ordini recenti con le persone coinvolte.",
      "Disponibili a ricostruirli venerdì senza avviare subito la procedura.",
      "Aperto · Prova sui due ordini, regola da concordare."
     ],
     [
      "Nominiamo un referente qualificato per fascia. In sua assenza la commessa attende la verifica della revisione.",
      "Possiamo farlo sui pezzi speciali dal prossimo piano. Verifica dopo un mese.",
      "Intesa · Versione confermata prima del taglio e referente per fascia."
     ],
     [
      "Iniziamo da un controllo visibile del numero di revisione, con telefonata al responsabile se c’è discordanza.",
      "Il numero sarà stampato anche sul cartellino del lotto. Le sostituzioni CAD restano aperte.",
      "Parziale · Identificazione comune, copertura delle competenze da definire."
     ]
    ],
    "q": "«Se sulla lastra compare revisione 2 e al CAD è già uscita la 3, chi decide?»"
   },
   {
    "id": "16",
    "title": "Tenere il tecnico CAD raggiungibile durante le lezioni",
    "origin": "Samir e modifiche ai disegni",
    "p": "Per consentire a Samir di seguire la scuola, chiediamogli di rispondere dal telefono alle richieste urgenti del taglio durante le lezioni.",
    "quality": "Sbagliata. La soluzione mantiene la dipendenza da una sola persona e rende incerta la possibilità di frequentare.",
    "reply": "Con un solo tecnico esperto ci farebbe comodo. Ma se non può rispondere durante una verifica scolastica, chi autorizza il taglio?",
    "opts": [
     [
      "Formiamo un secondo referente e sospendiamo la validazione quando manca una persona abilitata.",
      "Accettiamo due affiancamenti entro il mese e una verifica delle competenze prima dell’autonomia.",
      "Intesa · Referente aggiuntivo da formare e regola transitoria per l’assenza."
     ],
     [
      "Consegniamo i disegni verificati prima dell’uscita. Le revisioni nuove attendono il referente disponibile.",
      "Possiamo provarlo per quattro settimane, registrando le attese del taglio.",
      "Parziale · Consegna anticipata e attesa documentata, copertura futura aperta."
     ],
     [
      "Ritiriamo la reperibilità a lezione e chiediamo alla direzione un piano di copertura.",
      "Vi presenteremo la mappa delle competenze al prossimo incontro.",
      "Ritirata · Nessuna disponibilità richiesta allo studente, piano atteso."
     ]
    ],
    "q": "«Durante la lezione posso spegnere il telefono e a chi lascio la commessa?»"
   },
   {
    "id": "17",
    "title": "Coordinare ferie tra taglio e deposito",
    "origin": "Irene e piano estivo",
    "p": "Discutiamo insieme i fabbisogni minimi di taglio e deposito prima di fissare chiusure diverse per reparti che si scambiano le lastre.",
    "quality": "Corretta. Collega le preferenze raccolte alle effettive dipendenze fra reparti.",
    "reply": "Il deposito potrebbe restare aperto una settimana in più. Chi sa movimentare i pezzi speciali in quei giorni?",
    "opts": [
     [
      "Proviamo il coordinamento sulla settimana più contesa e raccogliamo le altre criticità.",
      "Possiamo farlo per quella settimana. Sul periodo restante il piano resta aperto.",
      "Parziale · Coordinamento limitato alla settimana critica."
     ],
     [
      "Chiediamo la stessa chiusura per tutti indipendentemente dalle commesse.",
      "Non possiamo assumerla oggi. Porteremo gli impegni di consegna al confronto.",
      "Aperto · Chiusura comune da discutere con dati sulle commesse."
     ],
     [
      "Individuiamo competenze e coperture prima di confermare le ferie, poi comunichiamo insieme i due piani.",
      "Accettiamo il tavolo con i due responsabili e consegneremo un prospetto unico entro metà maggio.",
      "Intesa · Piani coordinati, coperture verificate prima della comunicazione."
     ]
    ],
    "q": "«Se il deposito cambia settimana, il mio piano al taglio sarà rivisto prima o dopo la comunicazione?»"
   },
   {
    "id": "18",
    "title": "Controllare il collaudo della nuova postazione CAD",
    "origin": "Decisione di introdurre un secondo videoterminale",
    "p": "Coinvolgiamo tecnici CAD, RLS e taglio nella prova della nuova postazione che mostra insieme disegno e scheda del lotto. Raccogliamo difficoltà di lettura e cambi di attività.",
    "quality": "Corretta. Collega l’uso concreto degli schermi al lavoro dei tecnici e alle istruzioni che arrivano in produzione.",
    "reply": "Possiamo provare una postazione per due settimane. Quale evidenza volete prima dell’estensione?",
    "opts": [
     [
      "Chiediamo prima al fornitore le impostazioni modificabili e le attività previste sulla postazione.",
      "Vi mostreremo la scheda tecnica alla prossima riunione senza chiudere il collaudo.",
      "Aperto · Informazioni richieste prima del pilota."
     ],
     [
      "Proviamo su turni diversi e su un pezzo standard e uno speciale. Registriamo problemi visivi, organizzativi e di versione del disegno.",
      "D’accordo. Il responsabile CAD e l’RLS parteciperanno alla verifica di fine prova.",
      "Intesa · Pilota di due settimane con casi diversi e verifica prima dell’estensione."
     ],
     [
      "Partiamo dalla sola leggibilità del disegno sul turno di mattina e fissiamo l’esame delle altre condizioni.",
      "Accettiamo il primo test. Il turno pomeridiano e i cambi di attività restano da esaminare.",
      "Parziale · Test di mattina, valutazione da completare."
     ]
    ],
    "q": "«Chi raccoglierà i problemi che incontro solo sui disegni complessi nel turno del pomeriggio?»"
   }
  ]
 },
 "legno": {
  "persone": [
   [
    "Giorgio, addetto alla bordatura.",
    "«Ci chiedono cinque ore il sabato per la commessa anticipata. Come capisco se le ore sono flessibilità o straordinario e quando le recupererò?»"
   ],
   [
    "Ada, addetta alla progettazione.",
    "«Ho un corso già fissato il sabato. Devo trovarmi un cambio da sola? E il mio ufficio è davvero coinvolto, se i disegni del lotto sono già pronti?»"
   ],
   [
    "Marta, operaia al montaggio.",
    "«Il mercoledì di recupero risulta libero al montaggio ma il magazzino mi aspetta al carico. Quale calendario seguo e come viene registrata la giornata?»"
   ]
  ],
  "gruppi": [
   [
    "Comunicazione della direzione",
    "Il cliente anticipa il ritiro. La direzione propone i sabati. La RSU chiede perché la programmazione ordinaria non basti e quali reparti abbiano un picco effettivo."
   ],
   [
    "Assemblea prima del primo blocco",
    "Chi lavora tra reparti chiede date credibili sia per l’aumento sia per il minor orario. Altri chiedono come segnalare impedimenti e controllare la registrazione delle ore."
   ],
   [
    "Incontro con taglio e bordatura",
    "Il tutor del pomeriggio ha già rinviato una sessione. Gli addetti chiedono chi sarà preparato a condurre la bordatrice nei sabati e come verranno coperti i recuperi degli esperti."
   ]
  ],
  "incastri": [
   [
    "01 · 02 · 18",
    "Perimetro della richiesta",
    "«Una modifica di colore riguarda soltanto la bordatura. Convocate anche progettazione e montaggio?»",
    "Se prevale il perimetro mirato: «Vi presenteremo fabbisogno e programma per i soli reparti coinvolti». Un’autorizzazione generale per tutti e un pilota limitato ai reparti con fabbisogno documentato non possono entrambi governare lo stesso sabato. La RSU sceglie o lascia aperta l’estensione."
   ],
   [
    "03 · 04 · 15 · 17",
    "Recuperi e doppia assegnazione",
    "«Il mercoledì concordato per Marta salta in magazzino. Quale nuova data comunichiamo?»",
    "Con verifica interreparto e nuova finestra condivisa: «Controlliamo entrambi i carichi e confermiamo un’unica data prima di spostare quella prevista». Una decisione unilaterale a fine anno è incompatibile con una finestra concordata per gli stessi addetti. La copertura mancante lascia aperto lo spostamento."
   ],
   [
    "05 · 06 · 07 · 08",
    "Preavviso e impedimenti",
    "«Se il calendario cambia venerdì, quando Ada potrà far esaminare il documento e da chi riceverà risposta?»",
    "Con programma anticipato: «Il venerdì confermiamo quanto condiviso. L’ufficio personale prende subito in carico la segnalazione». Se manca l’alternativa qualificata, il problema di copertura torna a produzione. Il ricevimento della segnalazione resta tracciato."
   ],
   [
    "09 · 10 · 16 · 17",
    "Rendiconto e recuperi individuali",
    "«Il monte ore aziendale scende ma quello di Marta rimane identico. Quale documento consultiamo?»",
    "Con viste distinte: «Controlliamo causali e saldi individuali con la persona e forniamo alla RSU l’aggregato per reparto e livello». Il totale assembleare può affiancare il rendiconto. Il solo totale non chiude una rettifica individuale."
   ],
   [
    "11 · 12 · 16",
    "Causali e saldo",
    "«Il capo chiede ancora il venerdì sera. Qual è la causale prima della prestazione e come si ritrova in paga?»",
    "Con classificazione preventiva: «Verifichiamo programma e condizioni prima di comunicare la richiesta». Se sono concordati codici distinti, una giornata di ferie non può chiudere automaticamente un recupero. Le ore controverse vengono identificate e portate alla verifica con paghe."
   ],
   [
    "03 · 13 · 14 · 15",
    "Tutor e copertura dei sabati",
    "«Il secondo tutor è anche l’unico esperto programmato in recupero. Può partire la prova del pomeriggio?»",
    "Con copertura qualificata: «Confermiamo il turno solo dopo aver individuato un sostituto preparato». In mancanza la prova resta condizionata, il recupero concordato resta tracciato e l’affiancamento rinviato riceve una nuova data secondo l’eventuale clausola accolta."
   ]
  ],
  "proposals": [
   {
    "id": "01",
    "title": "Verificare perché servono i sabati",
    "origin": "Giorgio e nuova commessa",
    "p": "Prima di definire un programma chiediamo ordini, date di consegna, capacità di taglio e bordatura e motivi degli ultimi cambi al montaggio.",
    "quality": "Corretta. Permette di distinguere un picco temporaneo da una difficoltà stabile di programmazione.",
    "reply": "Il cliente ha anticipato il ritiro. In otto settimane sette degli undici cambi al montaggio derivavano da modifiche tardive degli ordini. Quali dati vi servono adesso?",
    "opts": [
     [
      "Per il primo lotto confrontiamo carico previsto e capacità per reparto, con le revisioni degli ordini degli ultimi due mesi.",
      "Porteremo alla riunione di giovedì il carico per reparto e lo storico delle revisioni. Sui sabati decidiamo dopo il confronto.",
      "Intesa · Confronto sui dati giovedì. Attivazione dei sabati ancora da decidere."
     ],
     [
      "Per ora basta la data di ritiro, fissiamo una verifica del fabbisogno dopo la prima settimana.",
      "Possiamo mettere a verbale la data e la verifica. I reparti coinvolti richiedono ancora una definizione.",
      "Parziale · Data documentata, analisi iniziale incompleta."
     ],
     [
      "Chiediamo subito l’abbandono della flessibilità su tutta la commessa.",
      "Oggi non ritiriamo la richiesta. Presenteremo anche le alternative logistiche al prossimo incontro.",
      "Aperto · Alternative e fabbisogno da discutere."
     ]
    ],
    "q": "«Le cinque ore del sabato servono alla mia linea o il ritardo nasce prima della bordatura?»"
   },
   {
    "id": "02",
    "title": "Estendere il programma a tutto lo stabilimento",
    "origin": "Decisione aziendale sulla commessa",
    "p": "Applichiamo gli stessi sabati a taglio, bordatura, progettazione e montaggio, così tutti seguono un unico calendario.",
    "quality": "Sbagliata se il fabbisogno riguarda solo alcune lavorazioni. Rischia di generare ore aggiuntive inutili e recuperi difficili da collocare.",
    "reply": "Alcuni disegni sono già pronti e il montaggio attende i pannelli. Confermate la presenza contemporanea di tutti?",
    "opts": [
     [
      "Limitiamo il primo periodo ai reparti con carico documentato e valutiamo le altre fasi alla consegna dei pannelli.",
      "Possiamo partire dalla proposta per taglio e bordatura, con programma specifico da definire con la RSU.",
      "Parziale · Perimetro ristretto, programma e recuperi da concordare."
     ],
     [
      "Ritiriamo il calendario unico e chiediamo la sequenza delle lavorazioni.",
      "L’ufficio commesse consegnerà la sequenza domattina.",
      "Ritirata · Perimetro da ricostruire sui dati."
     ],
     [
      "Confermiamo il calendario unico come proposta da sottoporre ai reparti.",
      "Ci agevola nella convocazione, ma dovremo dichiarare quali attività sono disponibili e quando potranno essere recuperate le ore.",
      "Convergenza critica · Perimetro generale in ipotesi, attività e recuperi da verificare prima dell’avvio."
     ]
    ],
    "q": "«Perché dovrei venire sabato al montaggio se i pannelli non sono ancora pronti?»"
   },
   {
    "id": "03",
    "title": "Concordare settimane di aumento e recupero",
    "origin": "Marta e programma aziendale",
    "p": "Indichiamo nello stesso programma settimane di maggior orario e finestre reali di minor orario per ciascun reparto interessato.",
    "quality": "Corretta. La scheda didattica sull’art. 19 collega l’aumento al recupero e alla definizione congiunta delle modalità.",
    "reply": "Conosciamo la consegna di fine mese, ma gli ordini successivi sono instabili. Quale recupero possiamo programmare senza promettere una chiusura impossibile?",
    "opts": [
     [
      "Riteniamo insufficienti le previsioni. Convochiamo un nuovo incontro dopo il portafoglio ordini aggiornato.",
      "Vi forniremo il portafoglio mercoledì. Nessun programma viene concordato oggi.",
      "Aperto · Programma e recuperi sospesi al confronto."
     ],
     [
      "Per il primo blocco individuiamo due finestre compatibili con il carico e una data di verifica prima della seconda.",
      "Per la bordatura possiamo indicare le due settimane di minor carico e verbalizzare modalità e verifica congiunta.",
      "Intesa · Primo blocco circoscritto, due finestre individuate e verifica prima della seconda."
     ],
     [
      "Definiamo prima solo una prova di un sabato con recupero già collocato e poi rivalutiamo il resto.",
      "Possiamo concordare cinque ore e la corrispondente riduzione nella settimana successiva per il reparto pilota.",
      "Parziale · Una sola prova con recupero definito, periodi successivi aperti."
     ]
    ],
    "q": "«Sul mio calendario trovo sia il sabato aggiuntivo sia il periodo in cui recupererò?»"
   },
   {
    "id": "04",
    "title": "Rinviare tutti i recuperi a fine anno",
    "origin": "Marta e recuperi",
    "p": "Accettiamo subito il pacchetto di sabati e scriviamo che i periodi di recupero saranno scelti dall’azienda a fine anno.",
    "quality": "Sbagliata. Rende incerta la restituzione delle ore e svuota la definizione congiunta del programma descritta nella scheda.",
    "reply": "La formula ci lascerebbe decidere dopo. Quale garanzia avrebbero le persone che lavorano tra montaggio e magazzino?",
    "opts": [
     [
      "Chiediamo finestre per reparto e un controllo congiunto prima di ogni spostamento.",
      "Possiamo definirle per il primo blocco e riesaminare il successivo prima di attivarlo.",
      "Parziale · Primo blocco condizionato a finestre definite, successivi aperti."
     ],
     [
      "Confermiamo la formula generica per raccogliere il parere dell’assemblea.",
      "La accoglieremmo, ma la proposta andrà verificata sul programma congiunto prima dell’applicazione.",
      "Convergenza critica · Collocazione del recupero irrisolta, verifica contrattuale necessaria."
     ],
     [
      "Ritiriamo il pacchetto e chiediamo un calendario a salire e scendere prima di riprendere il confronto.",
      "L’ufficio produzione lo predisporrà per reparto entro una settimana.",
      "Ritirata · Calendario richiesto, avvio aperto."
     ]
    ],
    "q": "«Se a dicembre il magazzino lavora a pieno ritmo, quando recupero le ore già fatte?»"
   },
   {
    "id": "05",
    "title": "Gestire gli impedimenti documentati",
    "origin": "Ada e sabati",
    "p": "Indichiamo un referente riservato e un termine di risposta per chi segnala un impedimento al sabato programmato. Distinguiamo il motivo documentato dalla ricerca di un cambio.",
    "quality": "Corretta. Offre ad Ada un percorso verificabile e permette di organizzare le coperture senza divulgare informazioni personali.",
    "reply": "Ada ha lezioni già fissate. Altri hanno esigenze di cura. Chi riceve i documenti e come rispondiamo in tempo?",
    "opts": [
     [
      "Partiamo dal caso documentato di Ada e rivediamo dopo il primo sabato le altre situazioni.",
      "Il personale la riceverà domani. La procedura per gli altri resta aperta.",
      "Parziale · Caso Ada avviato, regola comune da definire."
     ],
     [
      "Chiediamo che qualsiasi dichiarazione basti a escludere definitivamente la persona dal programma.",
      "Non condividiamo un’esclusione automatica permanente. Torniamo ai criteri e ai casi documentati.",
      "Aperto · Criteri degli impedimenti da concordare."
     ],
     [
      "Il personale riceve la segnalazione, verifica il caso e comunica l’esito prima del turno. Il reparto conosce soltanto la copertura necessaria.",
      "Accettiamo canale riservato e risposta prima del turno, con referente sostitutivo il venerdì.",
      "Intesa · Procedura riservata e copertura trattata separatamente."
     ]
    ],
    "q": "«A chi porto l’orario del corso e quando saprò se per quel sabato è stata trovata una soluzione?»"
   },
   {
    "id": "06",
    "title": "Subordinare la segnalazione a un sostituto",
    "origin": "Ada e bordatura",
    "p": "Accogliamo la segnalazione di impedimento solo quando la persona presenta anche il nome di chi la sostituirà.",
    "quality": "Sbagliata. La possibilità di far esaminare un impedimento dipende dalla disponibilità di altri e dalla loro abilitazione.",
    "reply": "Se Ada segnala una difficoltà ma non trova una persona con le competenze necessarie, la sua richiesta rimane fuori?",
    "opts": [
     [
      "Ritiriamo la condizione e chiediamo un confronto sui casi che hanno già ricevuto risposta negativa.",
      "Il personale esaminerà i casi su richiesta degli interessati con la RSU.",
      "Ritirata · Riesame individuale, procedura generale aperta."
     ],
     [
      "Correggiamo la proposta. Esaminiamo subito l’impedimento e affidiamo la ricerca di copertura al responsabile.",
      "Possiamo separare le due verifiche e dare ricevuta della segnalazione.",
      "Intesa · Ricevuta immediata e copertura organizzata dal responsabile."
     ],
     [
      "Manteniamo soltanto la possibilità di suggerire uno scambio tra persone idonee.",
      "Accettiamo suggerimenti volontari. Il capo verifica le competenze prima di approvare il cambio.",
      "Intesa · Scambio facoltativo, verifica di idoneità del sostituto."
     ]
    ],
    "q": "«Se nessuno sa sostituirmi, potrò comunque far esaminare la mia situazione?»"
   },
   {
    "id": "07",
    "title": "Stabilire il preavviso del calendario",
    "origin": "Assemblea dei reparti e Giorgio",
    "p": "Pubblicare insieme calendario ordinario e modifiche programmate con due settimane di anticipo. Definire come si discutono le variazioni successive.",
    "quality": "Corretta. Le due settimane sono una proposta aziendale simulata di miglioramento da negoziare.",
    "reply": "Il cliente modifica gli ordini anche tre giorni prima. Come gestiamo un cambiamento dopo la pubblicazione?",
    "opts": [
     [
      "Confronto con la RSU prima di cambiare il programma. Il responsabile avvisa tutte le persone coinvolte e registra il motivo.",
      "Possiamo provare le due settimane per un mese e incontrarvi sulle eccezioni prima della modifica.",
      "Intesa · Preavviso sperimentale e confronto preventivo sulle eccezioni."
     ],
     [
      "Accettiamo una bozza a due settimane e conferma a una settimana, con verifica dei disagi dopo la commessa.",
      "Possiamo farlo per il primo lotto. Il regime successivo resta aperto.",
      "Parziale · Doppia comunicazione sul primo lotto, verifica finale."
     ],
     [
      "Per noi servono quattro settimane ferme. Se non sono garantite, riportiamo il punto al mandato.",
      "Sul primo lotto non possiamo garantirle. Presenteremo le ragioni della previsione più corta.",
      "Aperto · Preavviso ancora oggetto di mandato."
     ]
    ],
    "q": "«Il calendario che vedo oggi è una bozza o posso già organizzare la mia famiglia?»"
   },
   {
    "id": "08",
    "title": "Comunicare il sabato solo il venerdì",
    "origin": "Ordini modificati e vita familiare",
    "p": "Per ogni settimana aspettiamo il venerdì pomeriggio e solo allora comunichiamo se il reparto lavorerà sabato.",
    "quality": "Sbagliata come sistema ordinario. Trasferisce l’incertezza commerciale su tutte le persone e comprime il confronto sul programma.",
    "reply": "Ci darebbe la massima precisione sugli ordini. Ma chi ha un impedimento avrà solo poche ore per segnalarlo.",
    "opts": [
     [
      "Consegniamo un programma per il solo primo sabato con preavviso condiviso e rinviamo gli altri.",
      "Per il primo possiamo fissare oggi data, reparto e recupero. Gli altri sabati restano da definire.",
      "Parziale · Un sabato definito, serie successiva aperta."
     ],
     [
      "Ritiriamo la comunicazione ordinaria all’ultimo momento e chiediamo il calendario per tutta la commessa.",
      "Lo porteremo con i dati dei clienti al prossimo incontro.",
      "Ritirata · Attesa del calendario complessivo."
     ],
     [
      "Limitiamo il venerdì al riscontro di quanto già programmato. Le modifiche passano dal confronto previsto.",
      "Possiamo confermare il venerdì una programmazione già condivisa e documentare le richieste di variazione.",
      "Intesa · Venerdì di conferma, cambi soggetti a confronto."
     ]
    ],
    "q": "«Se il messaggio arriva dopo il mio turno del venerdì, come faccio a segnalare un problema?»"
   },
   {
    "id": "09",
    "title": "Consegnare un rendiconto per livelli",
    "origin": "Giorgio e verifica delle ore",
    "p": "Fornire alla RSU un rendiconto per reparto delle prestazioni nei quattro livelli della scheda e delle ore recuperate o da recuperare. Garantire a ciascuno la verifica del proprio dato.",
    "quality": "Corretta. Permette di collegare conteggi individuali, periodo del programma e verifica collettiva.",
    "reply": "Possiamo estrarre ore per persona ma la RSU chiede un quadro per reparto. Quale dettaglio serve per rilevare errori?",
    "opts": [
     [
      "Chiediamo una prova di lettura su un cedolino simulato prima di stabilire il rendiconto.",
      "L’ufficio paghe porterà l’esempio alla prossima riunione.",
      "Aperto · Esempio concordato, flusso periodico da definire."
     ],
     [
      "Due viste. La persona riceve il proprio dettaglio, la RSU riceve livelli e recuperi aggregati per reparto ogni mese.",
      "Possiamo produrle dopo la chiusura delle presenze, con referente per le rettifiche.",
      "Intesa · Due prospetti mensili e referente per gli scostamenti."
     ],
     [
      "Partiamo dal solo reparto pilota e facciamo un controllo campione con gli interessati.",
      "D’accordo sul pilota. Verificheremo dopo la seconda chiusura mensile.",
      "Parziale · Due rilevazioni pilota, altri reparti da includere."
     ]
    ],
    "q": "«Come distinguo le ore salite di livello da quelle che ho già recuperato?»"
   },
   {
    "id": "10",
    "title": "Comunicare soltanto il monte ore totale",
    "origin": "RSU e controllo dei recuperi",
    "p": "Consegniamo un totale unico per l’intera azienda alla fine della commessa come unico strumento di verifica.",
    "quality": "Parzialmente corretta. Informa sulla dimensione del programma. Non consente da solo di controllare livelli, singole posizioni e recuperi.",
    "reply": "Un totale finale è facile. Se montaggio recupera e bordatura accumula, come lo vedrete?",
    "opts": [
     [
      "Chiediamo almeno i saldi per reparto e livello a ogni chiusura mensile e il riscontro individuale su richiesta.",
      "Accettiamo questo dettaglio mensile e una verifica RSU al termine del primo blocco.",
      "Intesa · Rendiconto distinto e verifica di fine blocco."
     ],
     [
      "Manteniamo il totale finale solo per la comunicazione in assemblea e lasciamo aperto il controllo analitico.",
      "Lo daremo per il riepilogo generale. Il dettaglio richiede una decisione separata.",
      "Parziale · Totale assembleare, modalità di controllo aperte."
     ],
     [
      "Ritiriamo il totale come unica verifica e chiediamo di provare l’estrazione dai cartellini.",
      "Il personale mostrerà una prova su dati anonimi venerdì.",
      "Ritirata · Prova di estrazione prima della nuova proposta."
     ]
    ],
    "q": "«Se il totale aziendale torna, chi controlla le mie cinque ore del secondo sabato?»"
   },
   {
    "id": "11",
    "title": "Separare flessibilità e straordinario",
    "origin": "Giorgio e reparto bordatura",
    "p": "Nel programma identifichiamo per persone, periodo e causale le ore di flessibilità. Verifichiamo sulla scheda art. 19 le condizioni per eventuali richieste di straordinario agli stessi addetti.",
    "quality": "Corretta. Evita sovrapposizioni tra istituti e permette controlli sull’effettivo utilizzo del programma.",
    "reply": "Il capo vorrebbe chiamare le stesse persone anche il venerdì sera. Prima di dare una risposta quali registrazioni vi servono?",
    "opts": [
     [
      "Limitiamo il primo programma ai sabati già definiti e accantoniamo le richieste aggiuntive finché chiariamo la disciplina.",
      "Accettiamo il perimetro circoscritto per il primo blocco.",
      "Parziale · Primo blocco delimitato, chiamate ulteriori da esaminare."
     ],
     [
      "Rinviamo la clausola e chiediamo lettura congiunta della scheda e del testo applicato.",
      "Possiamo riunirci con il personale prima di inserire ulteriori prestazioni.",
      "Aperto · Verifica contrattuale preliminare."
     ],
     [
      "Per ogni persona interessata verifichiamo ore, livello raggiunto, causale e trattamento previsto prima della chiamata.",
      "Possiamo introdurre un controllo preventivo di personale e responsabile. I dubbi torneranno al tavolo.",
      "Intesa · Controllo preventivo per gli stessi addetti, dubbi sospesi per verifica."
     ]
    ],
    "q": "«Quando mi chiedono il venerdì sera, come so a quale istituto si riferiscono?»"
   },
   {
    "id": "12",
    "title": "Cambiare la causale dopo aver visto gli ordini",
    "origin": "Gestione delle ore e cedolino",
    "p": "Registriamo le ore del sabato senza causale precisa e decidiamo a fine mese se trattarle come flessibilità o straordinario.",
    "quality": "Sbagliata. Rende impossibile conoscere prima la disciplina usata, il programma di recupero e il trattamento atteso.",
    "reply": "Per il reparto sarebbe semplice. Cosa spieghiamo alla persona prima del sabato e che cosa può controllare al rientro?",
    "opts": [
     [
      "Ritiriamo la classificazione a posteriori e chiediamo alla RSU di esaminare i casi dubbi con paghe.",
      "Porteremo due esempi anonimi al prossimo incontro.",
      "Ritirata · Esempi per la verifica, nessuna riclassificazione concordata."
     ],
     [
      "Definiamo la causale nel programma prima della prestazione e comunichiamola a ogni interessato.",
      "Possiamo riportarla sul calendario e riprenderla nel riepilogo delle presenze.",
      "Intesa · Causale preventiva e confronto con il consuntivo."
     ],
     [
      "Per il primo blocco ammettiamo solo ore già programmate e riconoscibili nel registro.",
      "Accettiamo. Le prestazioni ulteriori richiederanno una verifica separata.",
      "Parziale · Registro del primo blocco, richieste ulteriori aperte."
     ]
    ],
    "q": "«Quando accetto quella giornata, saprò già quando recupero le ore?»"
   },
   {
    "id": "13",
    "title": "Garantire competenze in ogni sabato programmato",
    "origin": "Incontro di taglio e bordatura",
    "p": "Prima di estendere i sabati alla bordatrice, programmiamo tutor, persone affiancate e copertura qualificata per ogni turno coinvolto.",
    "quality": "Corretta. Solo quattro dei sedici addetti di taglio e bordatura risultano già affiancati, tutti al mattino.",
    "reply": "Il cliente anticipa il ritiro e ci chiede la macchina attiva. Il tutor del pomeriggio era già stato rinviato una volta. Come copriamo la prova?",
    "opts": [
     [
      "Prenotiamo un secondo tutor e confermiamo il sabato solo dove competenze e recuperi sono documentati.",
      "Possiamo garantire il secondo tutor per il primo blocco. Verifichiamo l’autonomia raggiunta prima di estendere.",
      "Parziale · Primo blocco coperto con tutor, estensione condizionata."
     ],
     [
      "Manteniamo l’affiancamento pomeridiano e riprogrammiamo una lavorazione per liberare il tutor prima del sabato.",
      "Commessa e produzione possono spostare quel lotto. Registreremo affiancamento e coperture prima dell’avvio.",
      "Intesa · Affiancamento conservato e verifica delle competenze prima dell’avvio."
     ],
     [
      "Se manca la persona preparata, sospendiamo l’estensione al pomeriggio e chiediamo un nuovo piano.",
      "Possiamo riportare l’estensione al tavolo dopo la verifica del tutor.",
      "Aperto · Estensione pomeridiana rinviata."
     ]
    ],
    "q": "«Chi sarà al mio fianco il primo sabato sulla macchina nuova?»"
   },
   {
    "id": "14",
    "title": "Rinviare sempre la formazione del pomeriggio",
    "origin": "Copertura della bordatrice",
    "p": "Quando si avvicina una consegna, rinviamo automaticamente l’affiancamento del pomeriggio e ricorriamo agli esperti del mattino.",
    "quality": "Sbagliata. Consolida lo squilibrio delle competenze e concentra il peso della flessibilità.",
    "reply": "La commessa parte in tempo così, ma tra un mese il pomeriggio potrebbe dipendere ancora dalle stesse quattro persone.",
    "opts": [
     [
      "Se un rinvio è inevitabile fissiamo contestualmente recupero, tutor e data prima del successivo sabato affidato ai nuovi addetti.",
      "Accettiamo la regola. Il responsabile terrà l’elenco delle sessioni recuperate prima dell’assegnazione.",
      "Intesa · Rinvio documentato con recupero e verifica della preparazione."
     ],
     [
      "Ritiriamo l’automatismo e chiediamo la mappa dei sabati già coperti dai quattro esperti.",
      "Produzione la consegnerà alla RSU con il calendario dei tutor.",
      "Ritirata · Dati su coperture e rinvii richiesti."
     ],
     [
      "Proteggiamo l’affiancamento già rinviato. Individuiamo un tutor sostitutivo per le emergenze.",
      "Per la prossima settimana possiamo indicare tutor e sostituto sul calendario.",
      "Parziale · Prossima sessione protetta, regime stabile da definire."
     ]
    ],
    "q": "«Anche questa volta il mio affiancamento salta. Quando potrò lavorare in autonomia?»"
   },
   {
    "id": "15",
    "title": "Gestire il recupero di chi lavora su due reparti",
    "origin": "Marta tra montaggio e magazzino",
    "p": "Per ciascuna persona impiegata su due reparti indichiamo chi conferma il recupero e chi garantisce la copertura nell’altro reparto.",
    "quality": "Corretta. Previene due disposizioni incompatibili sulla stessa giornata.",
    "reply": "Montaggio può liberare Marta mercoledì, magazzino la prevede al carico. Chi ha l’ultima parola?",
    "opts": [
     [
      "Rinviamo le date finché non abbiamo l’elenco delle persone impiegate su entrambe le attività.",
      "Vi daremo l’elenco delle posizioni organizzative interessate alla riunione di domani.",
      "Aperto · Mappatura prima delle date."
     ],
     [
      "I due responsabili verificano la disponibilità insieme prima di comunicare la data. Il personale conferma un solo calendario alla persona.",
      "Accettiamo un referente unico e la registrazione della data concordata.",
      "Intesa · Doppia verifica interna, calendario unico comunicato dal personale."
     ],
     [
      "Proviamo sulle persone condivise del primo lotto, con controllo degli spostamenti dopo un mese.",
      "Possiamo farlo sul primo lotto. Gli altri gruppi seguiranno dopo la prova.",
      "Parziale · Pilota interreparto, estensione aperta."
     ]
    ],
    "q": "«Mercoledì sul calendario c’è recupero e il magazzino mi chiama. A chi devo fare riferimento?»"
   },
   {
    "id": "16",
    "title": "Trasformare il recupero in ferie",
    "origin": "Marta e saldo delle ore",
    "p": "Quando l’azienda individua una giornata di minor lavoro, registriamola indifferentemente come ferie o recupero in base al saldo disponibile.",
    "quality": "Sbagliata. Confonde due istituti e rende difficile verificare se le ore di flessibilità siano state compensate.",
    "reply": "Il gestionale ha due codici distinti. Se usiamo le ferie, cosa accade alle ore di flessibilità maturate?",
    "opts": [
     [
      "Manteniamo due causali, identifichiamo la giornata di recupero nel programma e consegniamo i saldi distinti.",
      "Possiamo gestire i codici separati e correggere le anomalie con l’ufficio paghe.",
      "Intesa · Causali e saldi distinti, referente paghe per rettifiche."
     ],
     [
      "Prima di chiudere, facciamo una simulazione del cedolino con una settimana lunga e una corta.",
      "La mostreremo con i saldi separati. La procedura definitiva torna al tavolo.",
      "Parziale · Esempio di cedolino concordato, regola definitiva aperta."
     ],
     [
      "Ritiriamo la fungibilità e chiediamo verifica riservata per le persone che segnalano scalature errate.",
      "Paghe aprirà le pratiche su richiesta degli interessati.",
      "Ritirata · Verifica individuale, nessuna equivalenza tra istituti."
     ]
    ],
    "q": "«Se sul cedolino mi scalano ferie, dove vedo quante ore devo ancora recuperare?»"
   },
   {
    "id": "17",
    "title": "Gestire i recuperi che rischiano di slittare",
    "origin": "RSU e calendario del minor lavoro",
    "p": "Prima che una finestra di recupero salti, chiediamo un confronto con la RSU per riprogrammarla e controllare saldi, scadenze e trattamento contrattuale.",
    "quality": "Corretta. Tiene insieme fattibilità industriale e verifica del seguito delle ore già prestate.",
    "reply": "Un nuovo ordine occupa la settimana proposta per il minor orario. Come facciamo a spostarla senza accumulare altri saldi incerti?",
    "opts": [
     [
      "Manteniamo la finestra per chi ha il saldo più alto e discutiamo le alternative per gli altri.",
      "Possiamo verificarlo sulle competenze. Oggi concordiamo solo il controllo dei saldi e delle coperture.",
      "Parziale · Controllo preliminare, riprogrammazione ancora aperta."
     ],
     [
      "Senza una nuova finestra credibile teniamo aperta la modifica e chiediamo una verifica contrattuale sui residui.",
      "Accettiamo di esaminare saldi e scadenze prima di cambiare il programma.",
      "Aperto · Nessuna modifica concordata, residui da verificare."
     ],
     [
      "Prima dello spostamento individuiamo una finestra praticabile per gli stessi addetti e verbalizziamo motivo e data.",
      "Possiamo proporla entro venerdì e condividerla prima di modificare il calendario.",
      "Intesa · Sostituzione della finestra con motivo, data e verifica congiunta."
     ]
    ],
    "q": "«Se salta il mio recupero, riceverò una nuova data o soltanto un saldo più alto?»"
   },
   {
    "id": "18",
    "title": "Usare la flessibilità a ogni modifica della commessa",
    "origin": "Assemblea del montaggio",
    "p": "Consideriamo ogni modifica del cliente sufficiente ad attivare un nuovo sabato in tutti i reparti per il resto dell’anno.",
    "quality": "Sbagliata. Confonde un’ipotesi produttiva con un programma definito e non distingue reparti, ore già fatte, coperture e recuperi.",
    "reply": "Ci consentirebbe di adattarci rapidamente. Se il cliente modifica solo un colore del pannello, serve comunque un sabato per tutti?",
    "opts": [
     [
      "Ritiriamo l’estensione annuale e chiediamo consegna del registro delle revisioni d’ordine.",
      "Ve lo renderemo disponibile per la prossima riunione con dati per reparto.",
      "Ritirata · Estensione ritirata, analisi delle revisioni richiesta."
     ],
     [
      "Valutiamo ogni modifica per lavorazione coinvolta. Si apre il confronto solo se la programmazione ordinaria non assorbe il carico.",
      "Accettiamo di presentarvi per ogni blocco il fabbisogno residuo, i reparti e le ipotesi di recupero.",
      "Intesa · Verifica per blocco, confronto prima di definire il programma."
     ],
     [
      "Limitiamo il mandato al primo lotto e fissiamo un incontro a consegna avvenuta, prima di ulteriori periodi.",
      "Possiamo circoscrivere la richiesta al lotto e indicare già la verifica finale.",
      "Parziale · Primo lotto delimitato, programma operativo da completare."
     ]
    ],
    "q": "«Se si modifica una sola commessa, come sapremo quali persone sono davvero coinvolte?»"
   }
  ]
 },
 "laterizi": {
  "persone": [
   [
    "Paolo",
    "Paolo, linea manufatti. Da otto settimane gli chiedono di fermarsi. Vuole capire come comportarsi oggi e perché si ripete."
   ],
   [
    "Davide",
    "Davide, imballaggio. Ha consegnato le preferenze per le ferie e vuole sapere quando conoscerà le date."
   ],
   [
    "Sara",
    "Sara, turnista. La proposta di entrare alle 20 e uscire alle 4 cambia l’organizzazione familiare. Chiede se si possa ancora intervenire."
   ]
  ],
  "gruppi": [
   [
    "Dai reparti",
    "Dopo lo spostamento dei ritiri serali, piazzale e imballaggio segnalano uscite tardive. I due reparti hanno annotato gli orari."
   ],
   [
    "Dai reparti",
    "Nell’assemblea estiva sui tre turni sono emerse esigenze diverse. Alcuni chiedono protezione dal caldo, altri segnalano problemi di cura e trasporto con i nuovi orari."
   ],
   [
    "Dai reparti",
    "Dopo due fermate di linea, produzione e manutenzione hanno chiesto ai delegati un passaggio di consegne che renda riconoscibili guasti, interventi e referenti."
   ]
  ],
  "incastri": [
   [
    "07 e 08   Indennità e orari",
    "Indennità e orari",
    "Direzione al primo giro: «Possiamo provare l’anticipo con il primo cliente. Se il mezzo tarda ancora, volete attivare anche la quota per l’uscita documentata?»",
    "Se la RSU ottiene entrambe le misure, la direzione replica «Registriamo orario di arrivo, uscita effettiva ed episodi indennizzabili nella stessa prova». Nel verbale restano distinti il perimetro della prova logistica e quello dell’indennità. Se una delle due voci resta aperta, la direzione conferma soltanto il punto condiviso."
   ],
   [
    "05 con 07 oppure 08   Chi resta al carico",
    "Chi resta al carico",
    "Direzione: «Il camion tarda durante la prova. Paghiamo il disagio, ma chi copre il carico e fino a quando?»",
    "La scelta 05 A mantiene nell’ipotesi la permanenza dell’imballaggio e genera la domanda di Paolo sull’uscita. Con 05 B si applica la copertura programmata nel solo ambito della prova. Con 05 C la copertura resta aperta. L’eventuale indennità riconosce il disagio per un’uscita effettiva e lascia distinta la decisione su chi rimane."
   ],
   [
    "01 con 10 oppure 16   Dati e organico",
    "Dati e organico",
    "Direzione: «Quali dati vi servono per capire se mancano persone? Possiamo usare un’unica rilevazione e ricavarne anche il totale mensile».",
    "Le schede chiuse condividono le registrazioni disponibili. Il prospetto storico di 10 B copre i totali, la prova futura di 01 B copre motivi e preavvisi sulla linea, la bacheca di 16 A espone il totale. Si conservano destinatari, scadenze e dettagli di ogni impegno. La direzione conferma gli incontri solo se previsti dalla mossa scelta."
   ],
   [
    "08 con 14   Camion e materiale pronto",
    "Camion e materiale pronto",
    "Direzione: «Come distingueremo il mezzo arrivato tardi dal materiale preparato in ritardo?»",
    "Con 14 B la replica congiunta prevede il confronto fra preparazione, arrivo e uscita. Con 14 A e 08 A o B il conteggio dei colli rimane un dato di imballaggio e si affianca alla verifica delle uscite già concordata per 08. I soggetti e le durate delle due prove restano identificabili."
   ],
   [
    "02 con 06 o 15   Ordine di precedenza",
    "Ordine di precedenza",
    "Direzione: «Se due persone chiedono la stessa settimana, prevale chi ha scritto prima o chi ha rinunciato l’anno scorso?»",
    "02 B e 06 A si integrano: rotazione e poi ordine di domanda a parità di condizioni. 15 A aggiunge una finestra di tre giorni per gli scambi prima del piano definitivo. Se 02 A e 06 A fissano due priorità assolute diverse, la RSU sceglie una delle due formule nel secondo giro. La direzione conferma la formula scelta e registra l’altra come aperta."
   ],
   [
    "11 con 06 o 15   Risposta al singolo",
    "Risposta al singolo",
    "Direzione: «Risponderemo a Davide venerdì. Quale impegno resta per il resto del reparto?»",
    "Il riscontro a Davide è sempre registrato nel seguito individuale. Qualunque accordo su criteri o scambi resta nel verbale collettivo. Se le date del piano e i dieci giorni di 11 B risultano incompatibili, il gioco fa scegliere il termine che le parti possono confermare secondo la regola della pagina seguente."
   ],
   [
    "03 con 09 o 18   Chi decide sul nuovo turno",
    "Chi decide sul nuovo turno",
    "Direzione: «Prima di fissare la partenza, chi dobbiamo sentire e quali verifiche devono essere concluse?»",
    "Con 03 A e 18 A la prova parte soltanto dopo sopralluogo, confronto sulle tre fasce e verifica delle coperture. Con 09 B si aggiunge la consultazione dei tre turni. 09 A, se abbinata a un impegno già scelto che richiede l’ascolto degli altri turni, apre la scelta fra le due procedure. Il seguito per Sara riporta la decisione effettiva o l’assenza di una data di avvio."
   ],
   [
    "13 con 03 o 09 o 18   Gestione degli scambi",
    "Gestione degli scambi",
    "Direzione: «Chi non trova un sostituto a chi si rivolge prima che esca il calendario?»",
    "Con 13 B l’ufficio turni verifica le alternative e riferisce alla RSU. Con 13 A il verbale espone i limiti dello scambio individuale. Se 03 A richiede coperture prima di iniziare, il loro mancato reperimento rinvia la prova. Finché manca un’intesa sul 20–4, l’eventuale procedura di scambio resta subordinata alla futura adozione di quell’orario."
   ],
   [
    "04 con 12 o 17   Tempo e modalità della consegna",
    "Tempo e modalità della consegna",
    "Direzione: «Il registro si legge durante il turno? Dove collochiamo il tempo per parlare con la manutenzione?»",
    "04 e 12 possono dare una clausola comune con registro, tempo e referente. 17 B prevede timbratura prima del cambio. Se 17 A si sovrappone a una consegna in orario di 04 B o 12 A o B, le regole sullo stesso intervallo sono incompatibili. La RSU sceglie una formula o lascia aperto il tempo di consegna. Una formula critica resta segnalata alla regia e all’assemblea."
   ]
  ],
  "proposals": [
   {
    "id": "01",
    "title": "Registrare le uscite oltre turno",
    "origin": "Paolo · carichi di lavoro",
    "p": "Per quattro settimane registriamo, per reparto e turno, quando viene chiesto di fermarsi, per quale motivo e con quanto preavviso. Fissiamo già l’incontro in cui decideremo come intervenire se il fenomeno si ripete.",
    "quality": "Corretta. Permette di distinguere un picco di ordini da una difficoltà stabile e fissa il momento della decisione.",
    "reply": "Possiamo darvi le ore dai cartellini. Il motivo della richiesta e il preavviso oggi non li annota nessuno. Chi li raccoglie senza rallentare il cambio turno?",
    "opts": [
     [
      "Accettiamo un primo prospetto delle sole ore, purché arrivi tra quattro settimane.",
      "Il personale vi consegnerà le ore per turno e reparto a quella scadenza.",
      "Parziale · Prospetto tra quattro settimane. Cause e preavvisi restano da ricostruire."
     ],
     [
      "Il capoturno segni motivo e ora della richiesta quando chiede a qualcuno di restare. Proviamo per quattro settimane su una linea e fissiamo la verifica.",
      "Su una linea possiamo farlo. Fissiamo ora l’incontro della quinta settimana con i dati dei cartellini e le annotazioni.",
      "Intesa · Prova sulla linea manufatti per quattro settimane. Capoturno e ufficio personale raccolgono i dati. RSU e direzione li esaminano nella quinta."
     ],
     [
      "Ci servono subito otto settimane di motivi e preavvisi documentati per tutti i reparti. Senza questa ricostruzione teniamo aperto il punto.",
      "Le registrazioni delle ore esistono. Per le motivazioni passate disponiamo solo di segnalazioni sparse. Oggi non sottoscriviamo questa ricostruzione.",
      "Aperto · La RSU confronta le segnalazioni dei colleghi con i turni e torna a chiedere i dati disponibili."
     ]
    ],
    "q": "«Quando mi chiedono di fermarmi stasera, a chi segnalo la richiesta e quando sapremo perché succede?»"
   },
   {
    "id": "02",
    "title": "Assegnare le ferie in ordine di domanda",
    "origin": "Davide · calendario delle ferie",
    "p": "Quando due persone dello stesso reparto chiedono ferie negli stessi giorni, diamo sempre la precedenza a chi presenta prima la domanda.",
    "quality": "Parzialmente corretta. Il criterio è verificabile. Chi conosce tardi i turni del partner o i periodi di chiusura dei servizi rischia di perdere ogni anno.",
    "reply": "Possiamo registrare giorno e ora di arrivo. Se una persona ottiene sempre la settimana di Ferragosto perché fa domanda per prima, la confermiamo anche l’anno prossimo?",
    "opts": [
     [
      "Sì. Chiediamo che tutti ricevano il medesimo avviso di apertura.",
      "D’accordo. L’ufficio personale aprirà le richieste per tutti alla stessa ora e terrà un registro.",
      "Intesa · A parità di settimana richiesta prevale l’ordine di arrivo. Resta il rischio di esclusioni ricorrenti."
     ],
     [
      "Raccogliamo le preferenze entro una finestra comune. Se coincidono, diamo precedenza a chi l’anno scorso ha dovuto rinunciare. Usiamo l’ordine di arrivo solo a parità di condizioni.",
      "Per il prossimo piano possiamo controllare lo storico degli ultimi dodici mesi. Scriviamo questa sequenza.",
      "Intesa · Finestra comune e rotazione sullo storico. L’ordine di arrivo scioglie solo le parità."
     ],
     [
      "Ritiriamo il criterio cronologico. Prima di proporne un altro vogliamo ascoltare chi è rimasto escluso negli ultimi due anni.",
      "Vi porteremo il quadro aggregato delle sovrapposizioni alla prossima riunione.",
      "Aperto · Il criterio è rinviato al confronto dopo l’ascolto dei reparti."
     ]
    ],
    "q": "«Se il mio compagno riceve il turno un mese dopo gli altri, come sarà esaminata la mia richiesta?»"
   },
   {
    "id": "03",
    "title": "Sperimentare il turno estivo dalle 20 alle 4",
    "origin": "Sara · caldo · precedente assemblea",
    "p": "Per il periodo di caldo sperimentiamo il turno 20–4 nei reparti interessati. Prima di partire raccogliamo le difficoltà dei tre turni, concordiamo alternative praticabili e fissiamo la data in cui verificare le condizioni di lavoro.",
    "quality": "Corretta. Collega esposizione al caldo, riposi, trasporti e responsabilità di cura. La sperimentazione ha condizioni da verificare.",
    "reply": "Vorremmo partire dal prossimo lunedì. Il reparto forni è il più esposto. Se qualcuno non può entrare alle 20, chi assicura la copertura?",
    "opts": [
     [
      "Cominciamo dal reparto forni solo dopo aver verificato disponibilità, coperture e riposi per tutti i turni interessati. Prova di due settimane e verifica con RLS.",
      "Accettiamo. Prima dell’avvio consegneremo alla RSU il calendario delle coperture. Senza copertura rinviamo la partenza.",
      "Intesa · Prova di due settimane ai forni dopo verifica dei turni. RSU, RLS e direzione si incontrano a fine prova."
     ],
     [
      "Per ora concordiamo solo la raccolta delle disponibilità su tutti i turni. Torneremo con alternative per chi incontra difficoltà.",
      "Vi diamo tre giorni per la consultazione e fissiamo un secondo incontro prima dell’avvio.",
      "Parziale · Consultazione concordata. L’avvio del turno 20–4 resta aperto."
     ],
     [
      "Chiediamo che l’anticipo sia escluso per tutta l’estate prima di valutare reparti e alternative.",
      "Per i forni vogliamo mantenere aperta l’ipotesi. Vi porteremo le rilevazioni per fascia oraria.",
      "Aperto · Nessuna intesa sul nuovo orario. Dati sull’esposizione da esaminare con RLS."
     ]
    ],
    "q": "«Lunedì a che ora entro? Chi mi comunica il turno se non riesco a trovare una soluzione per mia figlia?»"
   },
   {
    "id": "04",
    "title": "Trasmettere le anomalie per iscritto",
    "origin": "Produzione e manutenzione · passaggio di consegne",
    "p": "Per ridurre le interruzioni della linea, chi smonta lascia una nota scritta sulle anomalie e chi subentra la legge prima di ripartire.",
    "quality": "Parzialmente corretta. Conserva informazioni essenziali. Occorre stabilire quando avviene la lettura e a chi si chiede un chiarimento.",
    "reply": "Un registro al quadro di linea va bene. Quando la nota è poco chiara e chi l’ha scritta è già uscito, a chi telefoniamo?",
    "opts": [
     [
      "Facciamo partire il registro. Tra due settimane raccoglieremo le note che hanno lasciato dubbi.",
      "Accettiamo la prova. Il capoturno conserverà le note delle due settimane.",
      "Parziale · Registro in prova. Restano aperti il tempo di lettura e il referente per i chiarimenti."
     ],
     [
      "Inseriamo nel registro anomalia, intervento e referente. La lettura avviene nel turno e il responsabile contatta la manutenzione prima della ripartenza se serve.",
      "D’accordo sulla linea interessata. Verifichiamo con le due squadre dopo due settimane.",
      "Intesa · Registro con tre campi e lettura in orario. Capoturno e manutenzione verificano i casi irrisolti."
     ],
     [
      "Riteniamo insufficiente il solo registro. Aspettiamo un confronto con chi riavvia la linea prima di definire la procedura.",
      "Organizziamo il sopralluogo con i due turni. Oggi non chiudiamo la procedura.",
      "Aperto · Sopralluogo con produzione e manutenzione. Procedura da definire."
     ]
    ],
    "q": "«Se trovo scritto “guasto risolto” e la spia è ancora accesa, da chi ottengo il chiarimento?»"
   },
   {
    "id": "05",
    "title": "Assegnare il camion tardivo all’imballaggio",
    "origin": "Paolo · ritiri serali",
    "p": "Per evitare incertezze su chi debba fermarsi, assegniamo l’ultimo camion alla squadra di imballaggio del pomeriggio, che completerà il carico anche quando il mezzo arriva dopo la fine del turno.",
    "quality": "Sbagliata rispetto al bisogno. La stessa squadra continua a sopportare un ritardo imprevedibile. Facilità di accordo e qualità della tutela possono divergere.",
    "reply": "Per noi sarebbe comodo. Se il camion è atteso alle 21.45 e arriva alle 22.15, confermate che l’imballaggio resta fino a carico ultimato?",
    "opts": [
     [
      "Confermiamo questa formula per la discussione in assemblea.",
      "Siamo disponibili a inserirla nell’ipotesi. Ci interessa sapere se chi fa il pomeriggio vi dà mandato.",
      "Intesa · Ipotesi di permanenza dell’imballaggio per il camion tardivo. La RSU deve dar conto dell’impatto su fine turno e compatibilità con le regole applicabili."
     ],
     [
      "Riformuliamo. Se il carico sfora il turno, il responsabile verifica una copertura programmata. In sua assenza si riprenota il ritiro.",
      "Accettiamo una prova di due settimane su un cliente. Registreremo i ritiri riprenotati e le ore effettive.",
      "Parziale · Procedura in prova su un cliente. Restano aperti gli altri ritiri."
     ],
     [
      "Ritiriamo la disponibilità a restare. Chiediamo alla direzione di presentare un piano per i ritardi.",
      "Vi porteremo la proposta logistica. Oggi il punto resta aperto.",
      "Aperto · Nessun impegno della squadra a coprire i ritardi. Si attende il piano."
     ]
    ],
    "q": "«Se alle 22 il camion non c’è ancora, chi decide se posso uscire?»"
   },
   {
    "id": "06",
    "title": "Programmare il calendario ferie",
    "origin": "Davide · preferenze dei reparti",
    "p": "Concordiamo una data per raccogliere le preferenze sulle ferie, una data per comunicare il piano e criteri di rotazione quando le richieste si sovrappongono.",
    "quality": "Corretta. Offre a tutte le persone interessate scadenze riconoscibili e un criterio per le sovrapposizioni.",
    "reply": "Possiamo raccogliere le preferenze entro il 30 aprile. Per confermare le date vorremmo aspettare gli ordini di giugno. Quanto anticipo chiedete davvero?",
    "opts": [
     [
      "Preferenze entro il 30 aprile e piano entro il 15 maggio. Le sovrapposizioni si risolvono a rotazione e le eccezioni si discutono con la RSU.",
      "Se i reparti ci mandano le coperture entro il 10 maggio, possiamo chiudere il 15. Segnaleremo alla RSU le eccezioni prima di comunicare il piano.",
      "Intesa · Raccolta il 30 aprile, coperture il 10 maggio, piano il 15. Rotazione ed esame preventivo delle eccezioni."
     ],
     [
      "Intanto fissiamo la data di raccolta e un incontro il 10 maggio sul numero delle sovrapposizioni.",
      "Accettiamo entrambe le date. La conferma delle ferie resterà da definire.",
      "Parziale · Preferenze e incontro definiti. Mancano data del piano e criterio di assegnazione."
     ],
     [
      "Vogliamo prima conoscere le settimane di fermata e il fabbisogno minimo per reparto. Portiamo la decisione sul piano alla prossima riunione.",
      "Metteremo a disposizione questi dati entro il 10 maggio. Sul calendario oggi non c’è intesa.",
      "Aperto · Dati produttivi richiesti prima della decisione."
     ]
    ],
    "q": "«Entro quando potrò organizzare le ferie con la mia famiglia e come saprò perché una settimana mi è stata negata?»"
   },
   {
    "id": "07",
    "title": "Riconoscere il disagio delle uscite ritardate",
    "origin": "Paolo · piazzale e imballaggio",
    "p": "Chiediamo un’indennità per ogni uscita ritardata a causa di un camion, mantenendo l’attuale programmazione dei ritiri.",
    "quality": "Parzialmente corretta. Riconosce il disagio. Resta da affrontare la prevedibilità dell’uscita. L’indennità proposta si aggiunge al trattamento delle ore effettivamente lavorate.",
    "reply": "Possiamo riconoscere una quota fissa di 8 euro a uscita ritardata documentata per quattro settimane. La logistica manterrebbe gli appuntamenti attuali. Vi basta?",
    "opts": [
     [
      "Accettiamo la prova economica e verbalizziamo che resta aperta la questione degli orari.",
      "Il personale controllerà le uscite con piazzale e imballaggio. Dopo quattro settimane faremo il conto degli episodi.",
      "Parziale · Per quattro settimane 8 euro aggiuntivi per episodio documentato. Orari dei ritiri da ridiscutere."
     ],
     [
      "Accettiamo la quota solo se registriamo anche i ritardi per cliente e fissiamo un incontro con la logistica al termine della prova.",
      "Possiamo impegnare il responsabile logistica alla verifica. Eventuali modifiche agli appuntamenti si discuteranno sui dati raccolti.",
      "Intesa · Quota di 8 euro per quattro settimane, registro per cliente e verifica con logistica. Nessuna modifica dei ritiri già concordata su questo punto."
     ],
     [
      "Sospendiamo la richiesta economica. Prima vogliamo decidere come permettere al personale di uscire all’ora prevista.",
      "Terremo la proposta economica fuori dal verbale delle intese. Sul calendario ci serve il confronto con i trasportatori.",
      "Aperto · Riconoscimento rinviato. Occorre un mandato sulle modalità di uscita."
     ]
    ],
    "q": "«Se devo prendere l’ultimo autobus, quale parte dell’intesa mi permette di farlo?»"
   },
   {
    "id": "08",
    "title": "Anticipare i ritiri dei clienti in ritardo",
    "origin": "Decisione della logistica · due reparti coinvolti",
    "p": "Proviamo per un mese ad anticipare gli ultimi ritiri dei clienti che arrivano più spesso in ritardo. Confrontiamo i tempi di attesa e le uscite effettive di piazzale e imballaggio prima e dopo la prova.",
    "quality": "Corretta. Interviene sugli appuntamenti e misura gli effetti su entrambi i reparti.",
    "reply": "Un trasportatore accetta già il nuovo orario. Il secondo chiede un mese di preavviso. Partiamo con il primo cliente?",
    "opts": [
     [
      "Partiamo con il primo per un mese. Confrontiamo anche gli orari effettivi di uscita delle due squadre.",
      "Sì. La logistica registrerà gli arrivi e il personale porterà alla verifica le uscite dei due reparti.",
      "Parziale · Prova su un cliente per un mese, con confronto prima e dopo. Secondo cliente aperto."
     ],
     [
      "Partiamo con il primo e inviamo subito il preavviso al secondo. Alla verifica decidiamo l’estensione in base ai ritardi effettivi.",
      "Concordato. Invieremo oggi il preavviso. La decisione sul secondo cliente sarà presa insieme al termine del mese.",
      "Intesa · Prova graduale e preavviso al secondo cliente. Estensione subordinata alla verifica congiunta."
     ],
     [
      "Per il mandato ricevuto dobbiamo intervenire sui due clienti insieme. Chiediamo una nuova proposta di calendario.",
      "Oggi il secondo trasportatore non accetta l’anticipo. Vi riferiremo dopo il confronto con lui.",
      "Aperto · Nessun anticipo concordato. La logistica torna con la disponibilità dei due clienti."
     ]
    ],
    "q": "«Come sapremo se anticipare il camion ha fatto uscire prima anche chi lavora all’imballaggio?»"
   },
   {
    "id": "09",
    "title": "Consultare il solo turno notturno",
    "origin": "Sara · assemblea dei tre turni",
    "p": "Per decidere sul turno 20–4, raccogliamo il parere di chi oggi lavora di notte e applichiamo l’esito della consultazione all’intero stabilimento.",
    "quality": "Sbagliata rispetto al mandato. Chi cede o riceve il cambio negli altri turni subisce conseguenze che questa consultazione esclude.",
    "reply": "Ci sta bene sentire soltanto la notte. Possiamo usare quel parere per spostare anche i cambi del mattino e del pomeriggio?",
    "opts": [
     [
      "Sì. Raccogliamo le risposte del turno notturno e portiamo in assemblea questa procedura.",
      "Accettiamo questa procedura. Alle altre squadre chiederemo solo di prendere visione della proposta.",
      "Intesa · Ipotesi di consultazione circoscritta alla notte. Decisione sull’orario da sottoporre all’assemblea. Evidenziare chi è rimasto escluso."
     ],
     [
      "Sentiamo tutti e tre i turni con la stessa domanda. Raccogliamo separatamente le difficoltà di ciascuna fascia prima di decidere.",
      "Concediamo tre giorni alla consultazione. Ci rivediamo con il riepilogo delle tre fasce.",
      "Intesa · Consultazione dei tre turni e nuova valutazione prima della decisione sugli orari."
     ],
     [
      "Teniamo aperto il punto. Vogliamo prima conoscere gli orari completi dei cambi.",
      "Consegneremo alla RSU il prospetto di entrata e uscita dei tre turni.",
      "Aperto · La RSU chiede il prospetto e rinvia la scelta delle modalità di consultazione."
     ]
    ],
    "q": "«Io finisco il pomeriggio quando entra la notte. In quale momento potrò far presente il mio problema?»"
   },
   {
    "id": "10",
    "title": "Verificare organico e ordini",
    "origin": "Paolo · gestione dei picchi produttivi",
    "p": "Prima di concordare altre settimane con prolungamenti del turno, chiediamo all’azienda ordini previsti, ore aggiuntive e posti scoperti. Se emerge un fabbisogno stabile, apriamo il confronto su organico e sostituzioni.",
    "quality": "Corretta. Permette di confrontare la spiegazione della commessa urgente con l’ipotesi del sotto organico.",
    "reply": "Vi daremo gli ordini complessivi e le ore aggiuntive. Per discutere di assunzioni ci serve capire se l’aumento è stabile. Quali informazioni mettiamo a confronto?",
    "opts": [
     [
      "Per otto settimane confrontiamo ordini, ore e turni scoperti per reparto. Fissiamo adesso la data per esaminare coperture e sostituzioni.",
      "Possiamo ricostruire le ultime otto settimane e incontrarvi tra quindici giorni. Porteremo i dati per reparto senza nominativi.",
      "Intesa · Ufficio personale e produzione presentano serie comparabili. Tra quindici giorni si affronta il fabbisogno. Eventuali assunzioni restano da discutere."
     ],
     [
      "Accettiamo i due totali subito e chiediamo alla RSU di raccogliere le segnalazioni dei turni scoperti.",
      "Vi inviamo i totali entro venerdì. Per ora non fissiamo un confronto sull’organico.",
      "Parziale · Due totali entro venerdì. Confronto su organico e sostituzioni ancora da ottenere."
     ],
     [
      "Chiediamo un’assunzione immediata come condizione per chiudere il punto.",
      "La direzione ritiene temporaneo il picco e oggi non assume un impegno di assunzione.",
      "Aperto · Divergenza sulla natura del fabbisogno. La RSU riporta il punto al mandato."
     ]
    ],
    "q": "«Quando confronterete gli ordini con i posti scoperti? Cosa succede se i prolungamenti continuano anche a commessa finita?»"
   },
   {
    "id": "11",
    "title": "Dare priorità alla domanda di Davide",
    "origin": "Davide · richiesta personale e calendario comune",
    "p": "Chiediamo alla direzione di esaminare con priorità la domanda di ferie di Davide e consideriamo così risolta in piattaforma la questione del calendario.",
    "quality": "Sbagliata come risposta collettiva. Un esame tempestivo della domanda può aiutare Davide. Le altre persone attendono ancora tempi e criteri.",
    "reply": "Possiamo dare a Davide una risposta entro venerdì. Ci confermate che con questo l’argomento ferie è chiuso per tutti?",
    "opts": [
     [
      "Sì. Portiamo in assemblea l’esame prioritario della domanda come risultato sul punto ferie.",
      "Sentiremo Davide entro venerdì. Ci impegniamo a dargli risposta, senza garantire la settimana richiesta.",
      "Parziale · Riscontro al singolo entro venerdì. Per il reparto manca un criterio collettivo, anche se la squadra considera esaurita la richiesta."
     ],
     [
      "Seguiamo Davide individualmente. Chiediamo per tutti una risposta entro dieci giorni dalla chiusura della raccolta delle preferenze.",
      "Accettiamo il termine di risposta per tutte le richieste raccolte insieme. I criteri di sovrapposizione richiedono ancora confronto.",
      "Parziale · Termine comune di dieci giorni e risposta individuale a Davide entro venerdì. Criteri aperti."
     ],
     [
      "Togliamo la posizione personale dalla piattaforma. La RSU sentirà Davide per concordare il seguito.",
      "Prendiamo atto del ritiro. Restiamo disponibili a un incontro con lui e con il suo rappresentante.",
      "Ritirata · Seguito individuale da concordare con Davide. Nessuna regola generale introdotta da questa voce."
     ]
    ],
    "q": "«Io avrò una risposta venerdì. Che cosa possono aspettarsi i colleghi che hanno presentato la domanda con me?»"
   },
   {
    "id": "12",
    "title": "Dedicare tempo al passaggio di consegne",
    "origin": "Incontro tra produzione e manutenzione",
    "p": "Prevediamo un breve passaggio di consegne dentro l’orario di lavoro tra produzione e manutenzione. Per ogni anomalia indichiamo che cosa è stato fatto, che cosa resta da verificare e chi se ne occupa.",
    "quality": "Corretta. Garantisce un tempo riconoscibile e una persona a cui rivolgersi per i problemi ancora aperti.",
    "reply": "Possiamo organizzare dieci minuti in orario sulla linea che ha avuto le due fermate. Per coprire subito tutti i reparti ci manca una sostituzione ai cambi.",
    "opts": [
     [
      "Partiamo su quella linea per tre settimane. Nel registro mettiamo intervento, verifica da fare e referente. Poi valutiamo le altre linee.",
      "Concordato. I responsabili di produzione e manutenzione organizzeranno il cambio e parteciperanno alla verifica della terza settimana.",
      "Parziale · Dieci minuti in orario su una linea, registro e verifica dopo tre settimane. Estensione aperta."
     ],
     [
      "Per le anomalie aperte chiediamo un referente di manutenzione per ciascun turno. Proviamo le consegne in orario sui due reparti già interessati.",
      "Possiamo coprire i due reparti per un mese se il capoturno attiva il referente quando c’è un’anomalia. Verifichiamo insieme le chiamate.",
      "Intesa · Due reparti, consegne in orario e referente attivabile su anomalia. Verifica dopo un mese."
     ],
     [
      "Riteniamo indispensabile estendere subito i dieci minuti a tutto lo stabilimento. Lasciamo aperta la richiesta.",
      "Oggi non assicuriamo la copertura in tutte le linee. Presenteremo il fabbisogno al prossimo incontro.",
      "Aperto · Estensione e coperture da negoziare."
     ]
    ],
    "q": "«Al prossimo guasto avrò il tempo di parlare con chi ha fatto l’intervento prima di riavviare?»"
   },
   {
    "id": "13",
    "title": "Organizzare gli scambi dei turni estivi",
    "origin": "Sara · trasporti e responsabilità di cura",
    "p": "Per il nuovo turno estivo consentiamo scambi tra colleghi, lasciando a ciascuno il compito di trovare una persona disponibile.",
    "quality": "Parzialmente corretta. Offre una possibilità a chi trova un sostituto. Chi ha competenze rare o difficoltà ricorrenti rimane esposto.",
    "reply": "Gli scambi ci vanno bene purché mansione e copertura siano compatibili. Che cosa scriviamo per chi ha chiesto a tutti e non ha trovato nessuno?",
    "opts": [
     [
      "Per ora prevediamo solo scambi concordati fra colleghi, da confermare con il capoturno.",
      "Il capoturno darà risposta entro il turno successivo. Senza scambio confermato rimane la collocazione prevista dal calendario concordato.",
      "Parziale · Scambio su iniziativa individuale e riscontro del capoturno. Persone senza sostituto ancora scoperte."
     ],
     [
      "Predisponiamo disponibilità per mansione. Chi non trova uno scambio segnala la difficoltà al responsabile, che verifica le alternative prima di chiudere il calendario.",
      "L’ufficio turni può gestire l’elenco e riferire alla RSU sui casi irrisolti a ogni calendario settimanale.",
      "Intesa · Elenco volontario, verifica delle alternative e riscontro settimanale alla RSU sui casi irrisolti."
     ],
     [
      "Ritiriamo lo scambio individuale come risposta sufficiente. Vogliamo tornare ai reparti per costruire un sistema di sostituzioni.",
      "Prendiamo atto. Sulle sostituzioni manca un’intesa.",
      "Aperto · Nuovo ascolto delle persone che non trovano un cambio."
     ]
    ],
    "q": "«Se nessuno del mio reparto può scambiare il turno, a chi posso rivolgermi prima che esca il calendario?»"
   },
   {
    "id": "14",
    "title": "Anticipare la preparazione dei colli",
    "origin": "Decisione logistica · imballaggio",
    "p": "Per accelerare i ritiri serali, anticipiamo di mezz’ora la preparazione del materiale in imballaggio. Manteniamo gli attuali orari di arrivo dei camion e verifichiamo il risultato contando i colli pronti.",
    "quality": "Sbagliata rispetto al problema descritto. Il numero di colli pronti misura il lavoro del reparto. Un camion in ritardo può comunque posticipare l’uscita di tutti.",
    "reply": "Possiamo anticipare la preparazione spostando un’attività dentro il turno. Se tutti i colli sono pronti e il mezzo tarda, consideriamo raggiunto l’obiettivo?",
    "opts": [
     [
      "Sì. Per un mese contiamo i colli pronti mezz’ora prima del ritiro previsto.",
      "D’accordo. L’imballaggio terrà il conteggio giornaliero. Gli appuntamenti restano quelli attuali.",
      "Intesa · Prova interna di un mese sui colli pronti. Le uscite effettive restano prive di verifica."
     ],
     [
      "Misuriamo insieme prontezza dei colli, arrivo del camion e uscita del personale. Se il collo è pronto e il mezzo tarda, la logistica affronta il caso con il cliente.",
      "Possiamo farlo su due clienti per quattro settimane. Alla fine esamineremo con voi le tre serie di orari.",
      "Intesa · Verifica di quattro settimane su due clienti, con distinzione tra ritardo interno e del mezzo. Decisione sui ritiri dopo i dati."
     ],
     [
      "Sospendiamo l’anticipo di preparazione. Chiediamo prima i registri degli arrivi e delle attese.",
      "Vi porteremo gli orari degli ultimi ritiri. Il processo di imballaggio resta da discutere.",
      "Aperto · Richiesta di dati prima di modificare il lavoro del reparto."
     ]
    ],
    "q": "«Se tutti i colli sono pronti alle 21 e il camion arriva alle 22.15, quale dato vedrà la RSU?»"
   },
   {
    "id": "15",
    "title": "Gestire le sovrapposizioni delle ferie",
    "origin": "Davide · verifica delle assegnazioni",
    "p": "Quando arrivano richieste di ferie incompatibili, prima di chiudere il piano comunichiamo alle persone interessate il criterio applicato e apriamo un breve termine per proporre scambi.",
    "quality": "Corretta. Permette di conoscere il motivo di una scelta e di proporre una soluzione prima che il piano diventi definitivo.",
    "reply": "Possiamo comunicare le sovrapposizioni. Se lasciamo aperti gli scambi a lungo, però, chi aspetta il calendario non può organizzarsi. Quanto dura il termine?",
    "opts": [
     [
      "Tre giorni lavorativi dalla comunicazione. Il personale conferma gli scambi compatibili prima di pubblicare il piano.",
      "Accettiamo. La comunicazione indicherà criterio, scadenza e referente dell’ufficio personale.",
      "Intesa · Tre giorni per proporre scambi e conferma prima del piano definitivo."
     ],
     [
      "Proviamo per l’estate in un reparto e contiamo quante sovrapposizioni vengono risolte prima del piano.",
      "Possiamo partire dall’imballaggio con tre giorni per rispondere. A fine estate confrontiamo gli esiti con la RSU.",
      "Parziale · Prova estiva nell’imballaggio. Altri reparti e disciplina stabile da discutere."
     ],
     [
      "Vogliamo prima sapere quali coperture rendono incompatibili le richieste. Rinvio della procedura.",
      "Vi daremo i fabbisogni minimi per mansione. Oggi non definiamo il termine per gli scambi.",
      "Aperto · Fabbisogni richiesti. Procedura di scambio da concordare."
     ]
    ],
    "q": "«Se trovo una collega disponibile a scambiare le settimane, entro quando devo comunicarlo?»"
   },
   {
    "id": "16",
    "title": "Pubblicare il totale delle ore aggiuntive",
    "origin": "Paolo · trasparenza sui carichi",
    "p": "Raccogliamo ogni mese il totale delle ore aggiuntive di tutto lo stabilimento e lo comunichiamo in bacheca.",
    "quality": "Parzialmente corretta. Offre un dato comune ma può nascondere che il carico ricade sempre sullo stesso reparto.",
    "reply": "Il totale mensile è già disponibile. Possiamo affiggerlo il quinto giorno lavorativo del mese. Perché vi servirebbe un dettaglio ulteriore?",
    "opts": [
     [
      "Accettiamo il totale in bacheca come primo passo e riferiamo ai colleghi che non identifica il reparto più esposto.",
      "Il personale lo pubblicherà ogni mese a quella scadenza.",
      "Intesa · Pubblicazione mensile del totale. Distribuzione dei carichi ancora da accertare."
     ],
     [
      "Oltre al totale pubblico chiediamo che la RSU riceva una scheda aggregata per reparto e fascia, senza nominativi, per confrontare due mesi consecutivi.",
      "Vi forniremo il dettaglio per due mesi. Alla seconda consegna discutiamo le concentrazioni anomale.",
      "Intesa · Totale mensile e dettaglio aggregato alla RSU per due mesi. Incontro dopo la seconda consegna."
     ],
     [
      "Rinunciamo alla bacheca e chiediamo direttamente i motivi degli sforamenti per turno. Lasciamo aperta la modalità di consegna.",
      "Dobbiamo verificare quali motivi risultano già registrati. Oggi non concordiamo il flusso.",
      "Aperto · Informazioni per turno da definire."
     ]
    ],
    "q": "«Se il totale dello stabilimento scende ma il mio reparto continua a fermarsi, chi se ne accorge?»"
   },
   {
    "id": "17",
    "title": "Anticipare la consegna prima della timbratura",
    "origin": "Produzione e manutenzione · tempi del cambio",
    "p": "Per garantire la continuità della linea, chiediamo a chi subentra di arrivare dieci minuti prima della timbratura per farsi raccontare i problemi del turno precedente.",
    "quality": "Sbagliata. Sposta un compito necessario fuori dall’orario registrato. La disponibilità dell’azienda ad accoglierlo va discussa esplicitamente con i lavoratori.",
    "reply": "Per noi è semplice se i dieci minuti precedono la timbratura. Confermate che il cambio deve avvenire in quel modo?",
    "opts": [
     [
      "Confermiamo la proposta e la sottoponiamo ai turnisti.",
      "Siamo disponibili su questa formula. Mettiamo a verbale che i dieci minuti sono richiesti per consegne di servizio e precedono la timbratura.",
      "Convergenza critica · Formula da sottoporre a verifica contrattuale prima di ogni applicazione. L’assemblea esamina il tempo di lavoro escluso dalla registrazione."
     ],
     [
      "Correggiamo la richiesta. Prima si timbra, poi si effettua la consegna. Proviamo una sovrapposizione registrata sul cambio più critico.",
      "Possiamo riorganizzare quel cambio per due settimane. Alla verifica porteremo orari registrati e segnalazioni dei due turni.",
      "Parziale · Prova di due settimane su un cambio, con consegna in orario registrato. Estensione da concordare."
     ],
     [
      "Ritiriamo la proposta e chiediamo ai due turni di ricostruire i tempi delle consegne già effettuate.",
      "Prendiamo atto del ritiro. Il responsabile di linea parteciperà alla ricostruzione.",
      "Ritirata · Raccolta dei tempi effettivi. Nessuna nuova procedura sui cambi."
     ]
    ],
    "q": "«Questi dieci minuti sono un compito che l’azienda mi chiede? Dove li ritrovo nel mio orario registrato?»"
   },
   {
    "id": "18",
    "title": "Valutare il caldo prima di modificare gli orari",
    "origin": "Sara · tre turni · RSU e RLS",
    "p": "Sul caldo chiediamo all’azienda di confrontare, con RSU e RLS, le condizioni dei reparti nelle diverse fasce orarie. Prima della decisione valutiamo anche pause, organizzazione delle attività e alternative all’anticipo generalizzato.",
    "quality": "Corretta. Permette di fondare la decisione sulle condizioni effettive dei reparti e di esaminare gli effetti sui turni.",
    "reply": "Possiamo iniziare dai forni e mettere sul tavolo le rilevazioni disponibili. Siete disposti a valutare pause e spostamento di alcune attività già questa settimana?",
    "opts": [
     [
      "Sì. Facciamo il sopralluogo con RLS, confrontiamo le fasce dei tre turni e fissiamo venerdì un incontro sulle misure organizzative e sui tempi.",
      "Concordiamo sopralluogo e confronto di venerdì. Porteremo le rilevazioni e la proposta di organizzazione delle pause.",
      "Intesa · Sopralluogo ai forni e confronto su tre fasce prima della decisione sugli orari. Il responsabile di produzione consegna i dati."
     ],
     [
      "Avviamo il confronto ai forni. Chiediamo entro due settimane il calendario per esaminare anche gli altri reparti.",
      "Sui forni ci siamo. Entro due settimane vi consegniamo una proposta di calendario per gli altri reparti.",
      "Parziale · Verifica ai forni e impegno a presentare il calendario. Misure per gli altri reparti aperte."
     ],
     [
      "Chiediamo dati completi su tutti i reparti prima di dare un mandato negoziale sull’anticipo. Il turno 20–4 resta aperto.",
      "Prendiamo atto. Invieremo i dati già disponibili con l’indicazione delle fasce ancora da rilevare.",
      "Aperto · Documentazione da completare. Nessuna intesa sull’anticipo. La gestione dei rischi immediati prosegue secondo le procedure dello stabilimento."
     ]
    ],
    "q": "«Quali elementi avete usato per dire che spostare il mio turno riduce davvero l’esposizione al caldo?»"
   }
  ]
 }
};
