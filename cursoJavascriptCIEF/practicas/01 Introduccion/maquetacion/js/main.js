'use strict'

function mayorEdad() {
    let edad = prompt('Que edad tienes?')
    if(edad>=18) {
        console.log('Eres mayor de edad, puedes pasar')
    }else {
        console.log('Eres menor, a casa...!')
    }
}
mayorEdad();