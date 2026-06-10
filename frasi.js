const frasi = [
{
titolo: "Opinione impopolare",
frase: "Non tutto ciò che sopporti è amore.",
testo: "Restare non è sempre una prova d'amore. A volte è solo paura di perdere qualcosa che non esiste più."
},
{
titolo: "Opinione impopolare",
frase: "Non puoi costruire una coppia da sola.",
testo: "Una relazione richiede due persone che scelgono di esserci. Se fai tutto tu, non stai costruendo una coppia."
},
{
titolo: "Riflessione del giorno",
frase: "Chi ti ama non ti lascia sempre nel dubbio.",
testo: "L'incertezza continua logora. Una relazione sana non elimina ogni dubbio, ma offre presenza e chiarezza."
},
{
titolo: "Riflessione del giorno",
frase: "L'amore non dovrebbe costringerti a rinunciare a te stessa.",
testo: "Ogni volta che ti annulli per essere scelta, perdi una parte di te."
},
{
titolo: "Opinione impopolare",
frase: "La tua sensibilità non è il problema.",
testo: "Essere sensibili non significa essere sbagliate. Significa percepire ciò che altre persone ignorano."
},
{
titolo: "Riflessione del giorno",
frase: "Non sei difficile da amare.",
testo: "Hai bisogni, desideri e limiti. Questo non ti rende difficile da amare, ti rende umana."
},
{
titolo: "Opinione impopolare",
frase: "Non tutte le relazioni devono essere salvate.",
testo: "A volte la scelta più sana non è riparare, ma lasciare andare."
},
{
titolo: "Riflessione del giorno",
frase: "La pace vale più della conferma.",
testo: "Non cercare continuamente prove del tuo valore. Cerca luoghi in cui non devi dimostrarlo."
},
{
titolo: "Opinione impopolare",
frase: "L'amore non cancella la mancanza di rispetto.",
testo: "Puoi amare profondamente qualcuno e riconoscere che il suo comportamento non è accettabile."
},
{
titolo: "Riflessione del giorno",
frase: "Non devi convincere nessuno a sceglierti.",
testo: "Chi vede il tuo valore non ha bisogno di essere persuaso."
},

{
titolo: "Riflessione del giorno",
frase: "Ogni confine che metti è una forma di amore verso te stessa.",
testo: "Dire no non allontana le persone giuste. Le aiuta a capire chi sei."
},
{
titolo: "Opinione impopolare",
frase: "La solitudine non è sempre il nemico.",
testo: "A volte la solitudine è il luogo in cui ritrovi la tua voce."
},
{
titolo: "Riflessione del giorno",
frase: "Essere comprese è un bisogno, non un capriccio.",
testo: "Sentirsi ascoltate e viste è una necessità emotiva fondamentale."
},
{
titolo: "Opinione impopolare",
frase: "Non tutto dipende dalla comunicazione.",
testo: "Puoi spiegarti perfettamente. Ma se l'altro non vuole ascoltare, il problema non è la comunicazione."
},
{
titolo: "Riflessione del giorno",
frase: "La tua felicità non deve dipendere da una risposta.",
testo: "Il tuo valore non aumenta o diminuisce in base a un messaggio ricevuto."
},
{
titolo: "Opinione impopolare",
frase: "L'abitudine può sembrare amore.",
testo: "Non restare solo perché è ciò che conosci."
},
{
titolo: "Riflessione del giorno",
frase: "Meriti reciprocità.",
testo: "L'amore non è una gara a chi si impegna di più."
},
{
titolo: "Opinione impopolare",
frase: "Aspettare non sempre è una prova di amore.",
testo: "A volte è solo una forma elegante di rinunciare a te stessa."
},
{
titolo: "Riflessione del giorno",
frase: "Le tue emozioni meritano spazio.",
testo: "Ignorare ciò che senti non lo farà sparire."
},
{
titolo: "Opinione impopolare",
frase: "Non sei responsabile della crescita degli altri.",
testo: "Puoi sostenere una persona, ma non puoi fare il suo percorso al posto suo."
},

{
titolo: "Riflessione del giorno",
frase: "Lasciare andare richiede forza.",
testo: "A volte il coraggio non è restare. È andarsene."
},
{
titolo: "Opinione impopolare",
frase: "La chiarezza è un atto d'amore.",
testo: "Chi evita sempre le conversazioni difficili spesso crea ferite più profonde."
},
{
titolo: "Riflessione del giorno",
frase: "Non devi essere perfetta per essere amata.",
testo: "L'amore sano non richiede performance."
},
{
titolo: "Opinione impopolare",
frase: "La paura non è una bussola affidabile.",
testo: "Le decisioni migliori raramente nascono dal panico."
},
{
titolo: "Riflessione del giorno",
frase: "La tua voce conta.",
testo: "Non ridurre ciò che senti per rendere gli altri più comodi."
},
{
titolo: "Opinione impopolare",
frase: "L'attenzione non è la stessa cosa dell'amore.",
testo: "Essere cercate non significa essere realmente amate."
},
{
titolo: "Riflessione del giorno",
frase: "Scegli anche te stessa.",
testo: "Non fare della relazione l'unico luogo in cui esisti."
},
{
titolo: "Opinione impopolare",
frase: "Non tutte le promesse meritano un'altra possibilità.",
testo: "Conta ciò che una persona fa, non solo ciò che dice."
},
{
titolo: "Riflessione del giorno",
frase: "La fiducia si costruisce nel tempo.",
testo: "Le parole possono iniziare un percorso. I comportamenti lo confermano."
},
{
titolo: "Opinione impopolare",
frase: "A volte la risposta è già dentro di te.",
testo: "Spesso non ti manca la risposta. Ti manca il coraggio di ascoltarla."
}
];

const giorno = Math.floor(Date.now() / 86400000);
const contenuto = frasi[giorno % frasi.length];
