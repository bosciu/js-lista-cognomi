/* 1. chiedi all'utente il cognome
2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova*/


var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Giallo", "BluPuffo"];
var cognome = prompt("Inserisci il tuo cognome");
console.log(cognomi);
cognomi.push(cognome);
console.log(cognomi);
cognomi.sort();
console.log(cognomi);

for (var i = 0; i < cognomi.length; i++) {
    if (cognome == cognomi[i]) {
        console.log("il tuo cognome è " + cognomi[i] + ", si trova in posizione " + (i + 1) + " della lista");
    }
}