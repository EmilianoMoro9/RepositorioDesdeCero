function name(pedro){

};
// escritura del tipo camel case

// es5 actualizacion 5 de JavaScript 

function guardarDatos () {
    let dni = 1234;
    let nombre = "Juan";
    console.log(`Tus datos son ${nombre}, dni: ${dni} y han sido guardados correctamente ...`);
};
function miSuma(a, b) {
    let resultado = a + b;
    console.log('El resultado es: '+ resultado);
}
miSuma(4,5);


function login(email, password, facial) {
    let respuesta = ' '

    if(email == 'pepe@gmail.com' && password == '123456' && facial == true)
    {
        console.log('Tiene acceso a la app');;
    }else{
        console.log('No tiene acceso a la app');
    }
}

//let respuestoide = login('pepe@gmail.com','123456',true);
//console.log(respuestoide);
//let respuestoide2 = login('pepe@gmail.com','1234567',true);
//console.log(respuestoide2);


// FUNCIONES CALLBACK 
function validacion(token, callback) {
    email = 'pepe@gmail.com';
    password = '123456';
    facial = true;
    console.log(`El token ${token} es valido para el ingreso`);
    callback(email, password, facial);
    guardarDatos();
}


validacion('23djjaioe', login);


// ES6 ---> ARROW FUNCTION
// Funcion anonima guardada dentro de una variable
const calculoSaldo = function(saldo, compra){
    return saldo - compra;
}

console.log(calculoSaldo(999,500));

// para evitar poner todo el contexto de la funcion se invento lo siguiente enn ES6
// DOM: Manejo de documentacion y elementos de HTML con js
// 1-- Obtener el elemento: asignar a una variable un document.getById("Id")
// 2-- Puedo modificar todos los atributos de css en js con id.style.---

const flecha = (saldo, compra) => { 
    return saldo - compra }

    console.log(flecha(100, 10));



let saludo = document.getElementById('saludo')
console.log(saludo);
saludo.style.backgroundColor= 'red'

let h1 = document.getElementById('titulo')
h1.style.color= 'green'

function saludar(nombre) {
    alert(`Hola ${nombre}, bienvenido a la app`)
    
    h1.innerText =  `Hola ${nombre}, bienvenido`
    h1.style.fontStyle= 'arial'
}
