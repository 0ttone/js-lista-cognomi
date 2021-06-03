1. /*chiedi all’utente il cognome
2. inseriscilo in un array dove sono presenti già altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova*/






var surUser= prompt("inserisci cognome");
var surList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log(surList);

document.getElementById("surList").innerText = surList ;
surList.push(surUser);


document.getElementById("surList").innerText = surList ;
surList.sort()
console.log(surList);



