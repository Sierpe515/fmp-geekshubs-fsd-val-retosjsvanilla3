let num1 = parseInt(prompt("Introduce un número"));
let num2 = parseInt(prompt("Introduce otro número"));

if (num1 > num2){
    console.log(`${num1} es mayor que ${num2}.`);
} else if (num2 > num1){
    console.log(`${num2} es mayor que ${num1}.`);
} else if (num1 === num2){
    console.log(`${num1} es igual que ${num2}.`);
} else {
    console.log("Los valores introducidos no son correctos.");
}