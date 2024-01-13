/**
4) I numeri di Fibonacci sono una serie numerica generata con la seguente regola:
F[0] = 1
F[1] = 1
F[n] = F[n-1] + F[n-2] (n > 1)
La serie si presenta quindi così: [1,1,2,3,5,8,13,21,ecc].
Scrivere un programma che riceve n e genera una lista di Fibonacci. Ricordarsi di non utilizzare cicli for, ma usare
setImmediate.
*/


const fibonacci = (n, array = [1,1]) =>{
    if(n <= 2){
        setImmediate(()=>console.log("["+array+"]"));
    }else {
        array.push( array[ array.length - 2 ] + array[ array.length - 1 ] );
        fibonacci( n - 1 , array );
    }
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Inserisci un numero: \n", numero => {
    numero = parseInt(numero);
    console.log("\nRisultato: ");
    fibonacci(numero);
    readline.close();
});

