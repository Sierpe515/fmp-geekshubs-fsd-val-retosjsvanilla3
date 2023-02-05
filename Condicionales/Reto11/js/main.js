let diametro = parseFloat(prompt("Introduce cuánto mide el diámetro tu rueda en metros"));
let grosor = parseFloat(prompt("Introduce cúanto mide el grosor de tu rueda en metros"));

switch (true){
    case (diametro > 1.4):
        console.log("La rueda es para un vehículo grande");
        grosorRecomendado = (grosor > 0.4) 
            ? console.log("El grosor para esta rueda es el recomendado")
            : console.log("El grosor para esta rueda es inferior al recomendado");
        break;

    case (diametro < 1.4 && diametro > 0.8):
        console.log("La rueda es para un vehículo mediano");
        grosorRecomendado = (grosor > 0.25) 
            ? console.log("El grosor para esta rueda es el recomendado")
            : console.log("El grosor para esta rueda es inferior al recomendado");
        break;

    case (diametro < 0.8):
        console.log("La rueda es para un vehículo pequeño");
        break;

    default:
        console.log("El valor introducido no es válido");
}