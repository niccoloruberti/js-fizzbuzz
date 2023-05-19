"use strict";

//dichiaro le variabili
let messaggio;
//assegno il div contenitore a una variabile
const contenitore = document.querySelector("div.contenitore");

// creo il ciclo per i numeri da 1 a 100
for (let n =  1; n <= 100; n++) {
    //creo una variabile con un nuovo elemento da inserire all'interno del div contenitore dove andrò a scrivere i vari risultati
    const span = document.createElement('span');
    //inserisco lo span nel div contenitore
    contenitore.append(span);
    if (n % 3 === 0) {
        if (n % 5 === 0) {
            // multiplo di 3 e di 5
            messaggio = `Fizz\nBuzz`;
            span.classList.add('bg_fizzbuzz')
        }
       else {
            // multiplo solo di 3
            messaggio = `Fizz`;
            span.classList.add('bg_fizz')
        }
    }
    else if (n % 5 === 0) {
        if (n % 3 === 0) {
            //multiplo di 3 e di 5
            messaggio = `Fizz\nBuzz`;
            span.classList.add('bg_fizzbuzz')
        }
        else {
            // multiplo solo di 5
            messaggio = `Buzz`;
            span.classList.add('bg_buzz')
        }
    }
    else {
        // non è multiplo né di 3 né di 5
        messaggio = n;
        span.classList.add('bg_numero')
    }
    console.log(messaggio);
    //aggiungo il risultato da mostrare nello span
    span.append(`${messaggio}`);
}