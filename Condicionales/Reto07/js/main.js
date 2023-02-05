function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
};

let random20 = random(1, 20)

// if (random(1, 20) % 2 === 0){
//     console.log(`${random} es un número par`);
// } else {
//     console.log(`${random} es un número impar`);
// };

let resultado = (random20 % 2 === 0) ? console.log(`${random20} es un número par`) : console.log(`${random20} es un número impar`);

// let aleatorio = Math.floor(Math.random() * 20) +1;

// let resultado = (aleatorio % 2 === 0) ? `${aleatorio} es par` : `${aleatorio} es impar`;

// console.log(resultado);