// Imprese, documenti aziendali, dati e clausole sono inventati per la simulazione.
window.SCENARI = {
  laterizi: {
    etichetta: "Laterizi e manufatti cementizi",
    impresa: "Fornace delle Tre Anse",
    luogo: "Formatura, essiccatoi, forni e piazzale spedizioni",
    profilo: "Azienda immaginaria. La fornace produce blocchi per muratura. I forni lavorano a ciclo continuo, il piazzale segue gli orari di ritiro dei camion. Le squadre si scambiano spesso i turni per coprire i picchi.",
    dati: [
      "Su 84 addetti, 32 lavorano ai forni. Fonte simulata: organico di stabilimento.",
      "Nelle ultime 12 settimane ci sono stati 21 cambi di turno chiesti dall’azienda, di cui 13 comunicati il giorno prima. Fonte simulata: registro dei turni.",
      "Il 7% dei blocchi prodotti nell’ultimo trimestre è stato scartato dopo la cottura, contro il 5% del trimestre precedente. Fonte simulata: rapporto qualità."
    ],
    precedente: "Nell’accordo aziendale immaginario in scadenza, la direzione consegna alla RSU ogni mese il prospetto aggregato dei cambi di turno. Il testo non indica quando comunicarli ai singoli addetti.",
    vincolo: "La direzione vuole programmare i turni con maggiore anticipo e conservare la possibilità di coprire i guasti improvvisi senza spegnere un forno.",
    imprevisto: "Durante il confronto arriva la data di manutenzione di un essiccatoio. Per due settimane una parte della produzione dovrà passare sulla seconda linea.",
    verifica: "Ogni mese RSU e responsabile di produzione confrontano turni programmati e svolti, distinguendo emergenze, richieste dei lavoratori e variazioni decise dall’azienda.",
    concessione: "La direzione offre di pubblicare una programmazione su due settimane e propone di raccogliere disponibilità volontarie, revocabili, per coprire le emergenze."
  },
  cemento: {
    etichetta: "Cemento, calce, gesso e malte",
    impresa: "Cementeria del Guado",
    luogo: "Sala controllo, macinazione, manutenzione e insacco",
    profilo: "Azienda immaginaria. Lo stabilimento deve rinnovare il sistema di supervisione degli impianti. Il personale di turno chiede accesso alla formazione e criteri trasparenti per il premio di risultato.",
    dati: [
      "Lo stabilimento occupa 126 persone, 38 delle quali operano a turni in sala controllo e macinazione. Fonte simulata: prospetto organici.",
      "Dei 18 addetti formati sul nuovo sistema, solo 3 appartengono alla squadra notturna. Fonte simulata: registro formazione.",
      "Nell’ultimo semestre ci sono state 74 ore di fermata non programmata, 26 causate da un’interruzione della fornitura elettrica esterna. Fonte simulata: diario impianto."
    ],
    precedente: "Nell’accordo aziendale immaginario in scadenza, il premio usa come indicatore le ore di disponibilità dell’impianto. Il prospetto annuale riporta il totale delle fermate senza distinguerne le cause.",
    vincolo: "La direzione vuole mantenere un indicatore di continuità produttiva e garantire la presenza di un operatore esperto in sala controllo durante ogni corso.",
    imprevisto: "Il fornitore anticipa il collaudo del nuovo sistema. Nel primo mese mette a disposizione l’istruttore soltanto in quattro giornate.",
    verifica: "A ogni trimestre direzione e RSU classificano le fermate per causa e confrontano la partecipazione ai corsi per squadra, verificando i recuperi di chi era in servizio.",
    concessione: "La direzione propone quattro repliche del corso con sostituzioni programmate e un esame congiunto delle fermate esterne prima del calcolo del premio."
  },
  lapidei: {
    etichetta: "Materiali lapidei ed escavazione",
    impresa: "Pietre del Poggio",
    luogo: "Cava, segheria, finitura e deposito lastre",
    profilo: "Azienda immaginaria. Cava e laboratorio lavorano su commesse diverse. Il reparto finitura riceve spesso richieste urgenti e contesta un premio legato soltanto al volume lavorato.",
    dati: [
      "I 68 addetti sono divisi tra cava e deposito (28) e laboratorio (40). Fonte simulata: scheda organici.",
      "Negli ultimi tre mesi il 34% delle ore di finitura ha riguardato pezzi speciali, contro il 20% nello stesso periodo dell’anno precedente. Fonte simulata: consuntivo commesse.",
      "Delle ultime 15 urgenze in laboratorio, 9 sono state comunicate dopo la pubblicazione del piano settimanale. Fonte simulata: registro programmazione."
    ],
    precedente: "L’accordo aziendale immaginario in scadenza misura il premio di laboratorio in metri quadrati di lastre finite. Le lavorazioni speciali concorrono al conteggio come quelle standard.",
    vincolo: "La direzione accetta di discutere il crescente peso dei pezzi speciali, ma chiede un indicatore ricavabile dalle schede di commessa senza una nuova rilevazione individuale.",
    imprevisto: "Una partita di pietra presenta venature diverse dal campione. Il cliente conferma l’ordine e richiede una finitura più lenta su parte delle lastre.",
    verifica: "Su un trimestre campione, RSU e ufficio commesse simulano il risultato dei due criteri distinguendo pezzi standard e speciali. Poi discutono gli scostamenti con i reparti.",
    concessione: "La direzione propone di sperimentare un coefficiente per le lavorazioni speciali e di fornire alla RSU i dati mensili distinti per tipo di commessa."
  },
  legno: {
    etichetta: "Legno e arredamento",
    impresa: "Officine Arredo del Rio",
    luogo: "Taglio, bordatura, montaggio e imballaggio",
    profilo: "Azienda immaginaria. La fabbrica produce mobili su misura e introduce una nuova bordatrice. Il passaggio di competenze fra squadre e la prevedibilità degli orari sono al centro del confronto.",
    dati: [
      "La fabbrica ha 102 addetti, di cui 16 assegnati fra taglio e bordatura. Fonte simulata: pianta organica.",
      "Soltanto 4 dei 16 addetti hanno completato l’affiancamento sul nuovo impianto, tutti nel turno del mattino. Fonte simulata: registro affiancamenti.",
      "Nelle ultime otto settimane sono stati richiesti 11 cambi di orario al reparto montaggio, 7 per ordini modificati dopo l’avvio della produzione. Fonte simulata: consuntivo del reparto."
    ],
    precedente: "Nell’accordo aziendale immaginario in scadenza, la direzione presenta ogni semestre un piano di formazione. Il prospetto indica i posti disponibili senza distinguere la partecipazione per turno.",
    vincolo: "La direzione vuole rendere autonome entrambe le squadre sulla nuova macchina senza fermare la bordatura durante le consegne di fine mese.",
    imprevisto: "Un cliente anticipa il ritiro di una commessa. Il responsabile propone di rinviare l’affiancamento del pomeriggio, già rimandato una volta.",
    verifica: "RSU e responsabile di reparto verificano ogni mese, per turno, affiancamenti programmati, completati e rinviati, con le relative date di recupero.",
    concessione: "La direzione offre un secondo tutor e un calendario di affiancamento su entrambi i turni, chiedendo di collocare le prove fuori dalle giornate di spedizione."
  }
};
