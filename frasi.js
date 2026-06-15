const frasi = [

{
titolo: "Il consiglio della Coach",
frase: "Non tutto ciò che sopporti è amore.",
testo: "A volte restiamo in situazioni che ci fanno soffrire perché abbiamo paura di ciò che potrebbe accadere lasciandole andare. Ma sopportare non è amare. L'amore dovrebbe nutrire, non consumare.",
domanda: "In quale situazione della tua vita stai continuando a tollerare qualcosa che ti fa stare male?"
},

{
titolo: "Il consiglio della Coach",
frase: "Non devi convincere nessuno del tuo valore.",
testo: "Quando una persona ha bisogno di essere continuamente convinta, il problema spesso non sei tu. Chi sa vederti non ha bisogno di continue dimostrazioni.",
domanda: "A chi stai cercando di dimostrare qualcosa che dovrebbe essere evidente?"
},

{
titolo: "Il consiglio della Coach",
frase: "Essere scelta non è più importante che scegliere te stessa.",
testo: "Molte donne passano anni a cercare conferme dagli altri dimenticando di chiedersi cosa desiderano davvero. La tua approvazione conta quanto quella degli altri.",
domanda: "In quale area della tua vita stai mettendo i bisogni degli altri prima dei tuoi?"
},

{
titolo: "Il consiglio della Coach",
frase: "La chiarezza è una forma di rispetto.",
testo: "Le persone che tengono davvero a una relazione cercano chiarezza. L'ambiguità costante crea insicurezza e confusione.",
domanda: "C'è una situazione nella quale avresti bisogno di fare una domanda diretta?"
},

{
titolo: "Il consiglio della Coach",
frase: "Non confondere la speranza con la realtà.",
testo: "La speranza è importante, ma non deve impedirti di vedere ciò che accade davvero. Guarda i comportamenti prima delle promesse.",
domanda: "Cosa stai aspettando che cambi da troppo tempo?"
},

{
titolo: "Il consiglio della Coach",
frase: "Ogni confine che metti è un atto di amore verso te stessa.",
testo: "Dire no non significa essere egoiste. Significa proteggere il tuo equilibrio e il tuo benessere.",
domanda: "Quale limite dovresti iniziare a far rispettare?"
},

{
titolo: "Il consiglio della Coach",
frase: "La solitudine non è sempre il problema.",
testo: "A volte la vera sofferenza non è essere sole, ma sentirsi sole accanto a qualcuno.",
domanda: "Quando ti sei sentita veramente ascoltata l'ultima volta?"
},

{
titolo: "Il consiglio della Coach",
frase: "Non sei responsabile della felicità degli altri.",
testo: "Puoi sostenere, aiutare e amare, ma non puoi vivere al posto di qualcuno. Ognuno è responsabile del proprio percorso.",
domanda: "Di quale peso emotivo altrui stai cercando di occuparti?"
},

{
titolo: "Il consiglio della Coach",
frase: "Le tue emozioni meritano ascolto.",
testo: "Le emozioni non sono nemiche da combattere. Sono segnali che raccontano qualcosa di importante su ciò che stai vivendo.",
domanda: "Quale emozione stai cercando di ignorare ultimamente?"
},

{
titolo: "Il consiglio della Coach",
frase: "A volte la risposta la conosci già.",
testo: "Molto spesso non ci manca la risposta. Ci manca il coraggio di accettarla e agire di conseguenza.",
domanda: "Quale verità stai evitando di guardare in questo momento?"
}

];

const giorno = Math.floor(Date.now() / 86400000);

const contenuto = frasi[giorno % frasi.length];
