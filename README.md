# RSU in azione

Gioco a squadre per un corso RSU: tre simulazioni collegate, con un computer per squadra e una regia del formatore.

## Giocare online

Apri [RSU in azione](https://alessandrovicini.github.io/rsu-in-azione/), poi **Sessione online**.

1. Il formatore sceglie **Crea sessione**, conserva la propria chiave di accesso e comunica solo il codice alle squadre.
2. Ogni squadra inserisce codice, nome di fantasia e settore: laterizi, cemento, lapidei o legno. Conserva la propria chiave per riprendere il lavoro.
3. Il formatore osserva risposte e bozze, apre le fasi, mette in pausa, invia imprevisti e annota osservazioni visibili alla squadra.

Le risposte si sincronizzano automaticamente. Se la connessione si interrompe, la bozza resta sul computer e viene ritentato il salvataggio. In caso di modifiche concorrenti, esportare la copia locale prima di caricare quella online. Usare una sola scheda per squadra. Le sessioni sono accessibili per 30 giorni: esportare i fascicoli prima della scadenza. La scadenza limita l'accesso, non equivale a una cancellazione automatica dei dati.

## Percorso didattico

- **Colloqui**: ascoltare tre colleghi, consultare CCNL e guida cartacea, motivare risposta e seguito.
- **Trattativa**: costruire il mandato, negoziare due priorità, gestire dati e contropartite, verbalizzare accordo o stallo.
- **Assemblea**: presentare il risultato, rispondere agli stessi colleghi e raccogliere la decisione; possibile riapertura del confronto.

Aziende, eventi e interlocutori sono simulati. Il formatore valuta la qualità delle argomentazioni: le reazioni dell'azienda seguono regole didattiche, non una valutazione automatica dei diritti. La guida può essere usata su carta; le scansioni potranno essere integrate in seguito. Il CCNL legno fornito riguarda il 2019–2022: verificare i rinnovi prima dell'applicazione a casi attuali.

## Architettura e pubblicazione

**GitHub Pages ospita l'interfaccia statica.** Le sessioni condivise richiedono un servizio API e un database; non possono funzionare con il solo Pages.

La configurazione corrente usa `https://rsu-in-azione-laboratorio.filca.chatgpt.site/api/rsu` con database D1. I contratti sono serviti dallo stesso sito nella cartella `/gioco/fonti/`. Il frontend su Pages è configurato per questo servizio in `online.js` e `gioco.js`.

- File HTML, CSS, JS e SVG alla radice: interfaccia.
- `lib/session-api.mjs`: API, autorizzazione, controllo fasi e revisioni.
- `db/schema.ts` e `drizzle/`: schema e migrazioni SQL.
- `worker.mjs` e `wrangler.example.json`: adattatore per un eventuale servizio Cloudflare Workers indipendente. Copiare la configurazione, creare il database D1 e sostituire l'ID; applicare le migrazioni prima del deploy. Se cambia host, aggiornare l'URL API nel frontend, i link ai contratti e la lista delle origini CORS nel server.
- `tests/session-api.test.mjs`: verifiche del servizio. Eseguire `npm test` con Node 22.13+.

Per Pages selezionare Settings → Pages → Deploy from a branch → main → /(root). `.nojekyll` mantiene il sito statico.

## Accessi

Le chiavi sono casuali, conservate nel browser e scaricabili come file JSON; il server ne memorizza solo l'hash. Il codice sessione permette l'ingresso, ma non dà accesso alla regia o ai fascicoli di altre squadre. Non pubblicare chiavi, esportazioni di sessione o dati personali nel repository. Limite: 40 squadre per sessione e 60 messaggi per squadra.

La versione autonoma resta utilizzabile senza condivisione tra computer.
