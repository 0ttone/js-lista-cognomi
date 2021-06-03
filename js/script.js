1. /*chiedi all’utente il cognome
2. inseriscilo in un array dove sono presenti già altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova*/





//richiedi cognome
var surUser= prompt("inserisci cognome");
//cambia in maiuscola la prima lettera (FALLITO) TUTTO IN COMMENTO 
//PROVA CON INSERIMENTO SOLO CON MAIUSCOLO

//surUser = surUser.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

//definisco var che è la classe lista che è un array e che stamperò alla fine in html 
//tra ul (CHIARIRE)
var outputmyList = document.getElementsByClassName("myList")[0];

//verifica lista presente 
var surList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log(surList);

document.getElementById("surList").innerText = surList ;

//inserisci nuovo cognome nella lista
surList.push(surUser);

//ordina la lista con il nuovo cognome e stampa
surListOrdered = surList.sort();
document.getElementById("surListOrdered").innerText = surListOrdered ;
console.log(surListOrdered);


//posizione umana -tentativo +1
var position = surListOrdered.indexOf(surUser) + 1;
document.getElementById("position").innerHTML = "la tua posizione è" + position;














