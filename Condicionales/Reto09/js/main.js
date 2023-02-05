let marca = prompt("Introduce la marca de coche").toLowerCase();

switch (marca){
    case "ford":
        let modelo = prompt("Introduce el modelo").toLowerCase();
        switch (modelo){
            case "fiesta":
                console.log("El descuento es de un 5%");
                break;
            
            case "focus":
                console.log("El descuento es de un 10%");
                break;

            default:
                console.log("Ese modelo no lo tenemos a la venta.")
        }
    
    // default:
    //     console.log("Esa marca no la tenemos a la venta.")
}