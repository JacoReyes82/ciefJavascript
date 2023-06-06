/* var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
console.log(meses[5]);


var mesNumero = prompt('Indica el mes actual en numero');
console.log(meses[mesNumero - 1]);
alert(meses[mesNumero - 1]); */

// Ejercicio 1
// Pedir nombre, apellido1, apellido2, edad, dirección y dni y mostrar una frase formateada con toda la información.
// var nombre = prompt('Indica tu Nombre');
// var primerApellido = prompt('Indica tu Primer Apellido');
// var segundoApellido = prompt('Indica tu Segundo Apellido');
// var edad = prompt('Indica tu edad');
// var direccion = prompt('Indica tu Direccion');
// var dni = prompt('Indica tu DNI');
// console.log(`Bienvenido ${nombre} ${primerApellido} ${segundoApellido} tu edad es: ${edad}, Vives en ${direccion} y tu documento es: ${dni}`);
// alert(`Bienvenido ${nombre} ${primerApellido} ${segundoApellido} tu edad es: ${edad}, Vives en ${direccion} y tu documento es: ${dni}`);

// Rehacer el ejercicio 1 pero definiendo de base la información en un array.
var datos = new Array();
datos[0] = prompt('Ingresa tu Nombre');
datos[1] = prompt('Ingresa tu primerApellido');
datos[2] = prompt('Ingresa tu SegundoApellido');
datos[3] = prompt('Ingresa tu Edad');
datos[4] = prompt('Ingresa tu Direccion');
datos[5] = prompt('Ingresa tu DNI');
console.log(datos);


// Ejercicio con push