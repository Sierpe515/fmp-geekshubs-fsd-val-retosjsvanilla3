let tipoVehiculo = prompt("Introduce el tipo de vehículo").toLowerCase();
let kmRecorridos = parseInt(prompt("Introduce los kilómetros recorridos"));

switch (tipoVehiculo){
    case "coche":
        let precioKm = 0.10
        resultado = kmRecorridos * precioKm;
        console.log (`El total a pagar es de ${resultado}`);
    break;

    case "moto":
        let precioKm2 = 0.20
        resultado2 = kmRecorridos * precioKm2;
        console.log (`El total a pagar es de ${resultado2}`);
    break;

    case "autobus":
        let precioKm3 = 0.50
        resultado3 = kmRecorridos * precioKm3;
        console.log (`El total a pagar es de ${resultado3}`);
    break;
}