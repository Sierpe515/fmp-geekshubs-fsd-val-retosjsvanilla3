let mes = parseInt(prompt("Introduce el número de un mes"))

switch (mes){
    case 1:
        console.log("Enero tiene 31 días");
        break;

    case 2:
        console.log("Febrero tiene 29 o 29 días, según el año")
        break;

    case 3:
        console.log("Marzo tiene 31 días")
        break;
    
    case 4:
        console.log("Abril tiene 30 días")
        break;
    
    case 5:
        console.log("Mayo tiene 31 días")
        break;

    case 6:
        console.log("Junio tiene 30 días")
        break;

    case 7:
        console.log("Julio tiene 31 días")
        break;

    case 8:
        console.log("Agosto tiene 31 días")
        break;

    case 9:
        console.log("Septiembre tiene 30 días")
        break;
    
    case 10:
        console.log("Octubre tiene 31 días")
        break;
    
    case 11:
        console.log("Noviembre tiene 31 días")
        break;

    case 12:
        console.log("Diciembre tiene 31 días")
        break;

    default:
        console.log("El valor introducido no se corresponde con el número de un mes");

        
}