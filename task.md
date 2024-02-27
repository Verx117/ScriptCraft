1-centrare loading, aggiungere spiegazione, rendere più piccolo.

2-organizzare la API per l openAI e il propt:
  2.0-generare la apikey a openAI (setup per usare la API) (vai pagina open AI e cerca come fare).

  2.1-creare un form funzionante.

  2.2-con la API fai la chiamata di openAI , passare propt di testo e leggere la risposta.
  
  2.3-modificare il propt in modo tale che mi dia un formato utilizzabile.

  2.4-reinderizzare la risposta formattata.

3-



1 task (1 ora max): centrare meglio il loading state (animazione pozione), farla più piccola e sotto metterci un testo per spiegare che sta caricando (magari qualcosa di simpatico sempre a tema magia)

2.0 task (1 ora max): generare api key di open ai, copiarla nelle variabili di ambiente (creare file .env se non lo si ha), mettere una costante nel file constants.ts const openAIApiKey = ...leggere dalle env...

2.1 task (1 ora e 30 min max): utilizzare la libreria react hook form gestire il form (ovvero input + bottone per generare) 

2.2 task (1 ora e 30 min max): chiamare endpoint open ai in cui passi il prompt (il testo che ha inserito l'utente) e aspetti una risposta e fai console.log di questa risposta

2.3 task (2 ore e 30 min max): passare un prompt più sofisticato all'endpoint del tipo "questo è l'app che un utente vuole creare: {prompt dell'utente dall input}, suddividi in task con una descrizione del task e una stima, tutto questo in un formato json" e verificare che il formato che ritorna sia utilizzabile 

2.4 task (2 ore max):  stampare risposta che è sempre nello stesso formato con degli accordion (ovvero righe in cui a sinistra c'è il titolo, a destra la stima in formato ore e un una freccia (chevron) per poter fare toggle per mostrare descrizione o no)