// Ejercicio 1 -> Crear una función que calcule la suma, la resta, la división, la multiplicación y el resto de dos números.

function calcularResultado(numero1, numero2, operacion) {
    let resultado = 0;
    switch (operacion) {
        case 'sumar':
            resultado = numero1 + numero2;
            break;
        case 'restar':
            resultado = numero1 - numero2;
            break;
        case 'multiplicar':
            resultado = numero1 * numero2;
            break;
        case 'dividir':
            resultado = numero1 / numero2;
            break;
        default:
            console.log('Indica una operacion correcta!!!');
            break;
    }
    return resultado;
}

console.log(calcularResultado(6, 2, 'dividir'));


// Ejercicio 2 -> Separa el código anterior creando una función para cada cálculo. También crear una función que se encargue de pedir los números.

let numero1 = parseInt(prompt('Dame el primer numero:'));
let numero2 = parseInt(prompt('Dame el segundo numero:'));
let resultado = 0;
let operacion = prompt('Indica la operacion que deseas realizar');

switch (operacion) {
    case 'sumar':
        Suma();
        break;
    case 'restar':
        Resta();
        break;
    case 'multiplicar':
        Multiplicacion();
        break;
    case 'dividir':
        Division();
        break;
    default:
        console.log('Indica una operacion correcta!!!');
        break;
}


function Suma() {
    var resultado = numero1 + numero2;
    console.log(resultado);
}

function Resta() {
    var resultado = numero1 - numero2;
    console.log(resultado);
}

function Division() {
    var resultado = numero1 / numero2;
    console.log(resultado);
}

function Multiplicacion() {
    var resultado = numero1 * numero2;
    console.log(resultado);
}



// Ejercicio 3 -> Crear una función que averigüe si un número es primo o no. Devolver true o false. Mostrar el resultado.


function numeroPrimo() {
    let numero = parseInt(prompt('Indica tu numero:'));

    if (numero <= 1) {
        return 'Indica un numero mayor a 1';
    }
    
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return 'No es un numero primo';
        } else {
            return 'Es numero Primo'
        }
    }
}
console.log(numeroPrimo(0));