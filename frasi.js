const frasi = [
{
titolo: "Riflessione del giorno",
frase: "Non tutto ciò che sopporti è amore.",
testo: "A volte restiamo in situazioni che ci fanno soffrire perché pensiamo che amare significhi resistere. Ma l'amore non dovrebbe consumarti."
},
{
titolo: "Riflessione del giorno",
frase: "Non puoi costruire una coppia da sola.",
testo: "Una relazione richiede due persone disposte a impegnarsi. Se tutto il peso è sulle tue spalle, è il momento di fermarti e osservare."
},
{
titolo: "Riflessione del giorno",
frase: "Quando smetti di inseguire, inizi a vedere la realtà.",
testo: "L'inseguimento continuo spesso nasconde la paura di perdere qualcuno. Ma è proprio fermandoti che capisci cosa l'altra persona è davvero disposta a fare."
}
];

const giorno = Math.floor(Date.now() / 86400000);
const contenuto = frasi[giorno % frasi.length];