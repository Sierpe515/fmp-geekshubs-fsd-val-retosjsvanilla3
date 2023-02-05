let numero = parseInt(prompt("introduce un número"));

// for (let i = numero; i >= 0; i--){
//     console.log(i);
// }

let numero2 = parseInt(prompt("Introduce otro número"));

if (numero > numero2){
    for (let i = numero; i >= numero2; i--){
        console.log(i)
    };
} else {
    for (let i = numero2; i >= numero; i--){
        console.log(i)
    };
}