let numTotal = parseInt(prompt("Introduce hasta que número quieres contar"));
let numContador = parseInt(prompt("Introduce de cuánto en cuánto quieres contar"));

for (let i = 0; numTotal >= i; i+=numContador){
    console.log(i)
}