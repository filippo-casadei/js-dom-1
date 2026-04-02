// STEP DEI MIEI RAGIONAMENTI MENTALI TRADOTTI IN ITALIANO:
// mi servono sicuramente 2 elementi dal DOM:
// - lampadina, alla quale ho dato apposta l'id perchè va sostituita con un'altra immagine
// - interruttore, perchè è quello che deve scatenare l'evento click

// Creo due variabili, alle quali do per comodità lo stesso nome che ha il selettore,
// che vanno a prendere dal DOM i selettori lampadina e interruttore, per poterle
// ri utilizzare.

//document.querySelector(`#lampadina`);
const lampadina = document.querySelector(`#lampadina`);

// document.querySelector(`#interruttore`);
const interruttore = document.querySelector(`#interruttore`);