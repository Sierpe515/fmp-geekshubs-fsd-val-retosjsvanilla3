let cadenaTexto = prompt("Introduce una cadena de texto con o sin mayusculas");

let comprobanteMinusculas = (cadenaTexto === cadenaTexto.toLowerCase()) ? "El texto está en minúsculas." : "El texto contiene mayúsculas";

console.log (comprobanteMinusculas);