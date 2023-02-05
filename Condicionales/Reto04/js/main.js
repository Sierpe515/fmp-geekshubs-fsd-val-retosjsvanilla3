let string = (prompt("Introduce una palabra"));

let contador = (string.length <= 5) ? "La palabra tiene menos de 5 carácteres" : "La palabra tiene cinco carácteres o más";

console.log(contador)