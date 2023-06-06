console.log('Master of Puppets');
// Comentar: Control + K + C
// Descomentar: Control + K + U
/* Comentario
Varias
Lineas
*/
// Tipos de datos
// Numericos
var pi = 3.1416;
var numero1 = -10;
console.log(numero1);
numero1 = 12;
console.log(numero1);
console.log(pi);
// Texto
var fecha = 'Martes, 06 Junio 2023';
console.log(fecha);
var fechaCorta = '6/6/23';
console.log(fechaCorta);
// Boolean
var verdadero = true;
var falsa = false;
var n1 = 5;
var n2 = 5;
console.log(n1 > n2);
// Arrays
var frutas = ['manzana', 'platano', 'pera', 'sandia', 'melon', 'kiwi'];
console.log(frutas);
console.log(frutas[3]);
// Lenght devuelve la cantidad de elementos de un array
console.log(frutas.length);




// Ejercicio Organigrama
var n1 = 10;
var n2 = 5;
var suma = n1 + n2;
var resta = n1 - n2;
var multi = n1 * n2;
var divi = n1 / n2;
var resto = n1 % n2;
console.log(suma, resta, multi, divi, resto);

// Ejercicio Millas
var millas = 2;
var metros = millas * 1852;
console.log(metros);
console.log('El resultado son : ' + metros + ' metros.');

// Concatenar fecha
var dia = 6;
var mes = 'Junio';
var año = 2023;
console.log('Hoy es: ' + dia + ' de ' + mes + ' del ' + año);

// Templates String ES6
console.log(`Hoy es: ${dia} de ${mes} del ${año}`);

// Ejercicio 4 Porcentaje
var precioOriginal = 100;
var precioPagado = 50;
var descuento = precioOriginal - precioPagado;
console.log(descuento);
var descuentoPorcentaje = descuento * 100 / precioOriginal;
console.log(`El Porcentaje de descuento ha sido ${descuentoPorcentaje}%`);

// Tiempo en Segundos
var segundos = 7200;
var minutos = segundos / 60;
var horas = minutos / 60;
console.log(`Horas: ${horas} Minutos: ${minutos} Segundos: ${segundos}`);