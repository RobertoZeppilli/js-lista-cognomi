// Consegna:
// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// 1.creo un array contenente cognomi non ordinati in ordine alfabetico
var listaCognomi = [
    "Rossi",
    "Castelli",
    "Tozzi",
    "Carlini",
    "Sarri",
    "Magi",
    "Paolini",
    "Bianchi"
];

// 2.chiedo all'utente di inserire il suo cognome
var cognomeUtente = prompt("Inserisci il tuo cognome!");

// 3.tramite .push() inserisco il cognome dell'utente nell'array
listaCognomi.push(cognomeUtente);

// 4.con .sort() ottengo l'array in ordine alfabetico
listaCognomi.sort();

// 5. variabile per inserire i cognomi nell'HTML
var listaOrdinata = document.getElementById("lista-cognomi");

// 6. ciclo for per scrivere la posizione in forma umana della lista con il cognome inserito dall'utente, partendo da 1
for (var i = 0; i < listaCognomi.length; i++) {

    console.log((i + 1) + " " + listaCognomi[i]);

    listaOrdinata.innerHTML += "<li>" + listaCognomi[i] + "</li>";

}

var posizioneJs = listaCognomi.indexOf(cognomeUtente);
console.log("La posizione JS del cognome è: " + posizioneJs);

var posizioneUmana = listaCognomi.indexOf(cognomeUtente);
console.log("La posizione umana del cognome è: " + (posizioneUmana + 1));