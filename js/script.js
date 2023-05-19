"use strict";

//dichiaro le variabili
let messaggio;

// creo il ciclo per i numeri da 1 a 100
for (let n =  1; n <= 100; n++) {
    if (n % 3 === 0) {
        if (n % 5 === 0) {
            // multiplo di 3 e di 5
            messaggio = `FizzBuzz`;
        }
       else {
            // multiplo solo di 3
            messaggio = `Fizz`;
        }
    }
    else if (n % 5 === 0) {
        if (n % 3 === 0) {
            //multiplo di 3 e di 5
            messaggio = `FizzBuzz`;
        }
        else {
            // multiplo solo di 5
            messaggio = `Buzz`;
        }
    }
    else {
        // non è multiplo né di 3 né di 5
        messaggio = n;
    }
    console.log(messaggio)
}