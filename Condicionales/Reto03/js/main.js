let numero = parseInt(prompt("Introduce un número"));

if (numero > 0){
    console.log(`${numero} es positivo.`)
} else if (numero < 0){
    console.log(`${numero} es negativo.`)
} else if (numero === 0){
    console.log(`${numero} es igual a 0.`)
} else {
    console.log("El valor introducido no es correcto.")
}