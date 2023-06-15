function comprobarNumeros1() {
    let a = 0;
    if (a >= 0) {
        console.log('El numero es Positivo 1');
    } else {
        console.log('El numero es Negativo 1');
    }
}
comprobarNumeros1();

function comprobarNumeros2(numero) {

    if (numero >= 0) {
        console.log('El numero es Positivo 1');
    } else {
        console.log('El numero es Negativo 1');
    }
}
comprobarNumeros2(5);

function comprobarNumeros3(numero) {

    if (numero >= 0) {
        return('El numero es Positivo 1');
    } else {
        return('El numero es Negativo 1');
    }
}
var result = comprobarNumeros3(-3);
console.log(result);

