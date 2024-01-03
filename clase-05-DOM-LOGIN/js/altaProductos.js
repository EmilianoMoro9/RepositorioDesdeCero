
console.log('Alta productos recibido ');

// obtenemos el tag al que daremos el evento

let enviarDatos = document.getElementById('enviarDatos');
let misProductos = []

// le asigno una escucha de l evento que quiero que realice
enviarDatos.addEventListener('click',(e) => {
    e.preventDefault();
    
    let nombreProducto = document.getElementById('nombreProducto').value;
    let precioProducto = document.getElementById('precioProducto').value;
    let codigoProducto = document.getElementById('codigoProducto').value;
    let descripcionProducto = document.getElementById('descripcionProducto').value;

    if (nombreProducto == '' || precioProducto == '' || codigoProducto == '' || descripcionProducto == '') {
        alert('Debes completar todos los campos')
        
    }
    else{
        cargarDatos(nombreProducto,precioProducto,codigoProducto,descripcionProducto)
    }
    // limpiamos los inputs de datos

    borrarDatosForm();

})

const cargarDatos = (nombre, precio, codigo, descripcion) => {

    let producto = {
        nombre: nombre,
        precio: precio,
        codigo: codigo,
        descripcion: descripcion,

    };
    console.log(producto);

    misProductos.push(producto);

    // setear los datos en el local storage de la pagina web

    localStorage.setItem('Productos', JSON.stringify(misProductos));

    // el JSON.stringufy convierte los datos a texto que pueda comprender el navegador
    // el parse hace lo contrario, transforma a objeto 

    console.log(misProductos);
    console.log(`El total de productos es ${misProductos.length}`);

    
}

const borrarDatosForm =  () => {
    let miFormulario = document.getElementById('miFormulario');

    //limpiamos los inputs de datos
    miFormulario.reset();
}