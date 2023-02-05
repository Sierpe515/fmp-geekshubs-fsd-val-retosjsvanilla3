let num1 = parseInt(prompt("Introduce un número del 1 al 10"));
let num2 = parseInt(prompt("Introduce un número del 1 al 10"));
let num3 = parseInt(prompt("Introduce un número del 1 al 10"));

let promedio = ((num1 + num2 + num3) / 3);
if (promedio < 5){
    console.log("El promedio es menor que 5.");
} else if (promedio === 5){
    console.log("El promedio es 5.");
} else if (promedio > 5){
    console.log("El promedio es mayor que 5.");
} else {
    console.log("Los parámetros introducidos no son válidos.");
}