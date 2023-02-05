let nota1 = parseInt(prompt("Introduce un número del 1 al 10"));
let nota2 = parseInt(prompt("Introduce un número del 1 al 10"));
let nota3 = parseInt(prompt("Introduce un número del 1 al 10"));

let media = ((nota1 + nota2 + nota3) / 3);
if (media < 5){
    console.log(`Tu media es de ${media}. Estas suspendido`);
} else if (media >= 5){
    console.log(`Tu media es de ${media}. ¡Estas aprobado!`);
} else {
    console.log("Los parámetros introducidos no son válidos.");
}