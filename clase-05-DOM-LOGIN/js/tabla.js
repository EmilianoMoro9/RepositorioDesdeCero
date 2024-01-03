
// traigo del local storage el arreglo de productos
let misProductos= localStorage.getItem('Productos');

// como es un tipo string si imprimimos el lenght nos da todos los caracteres
console.log(misProductos);

// por ello transformo el archivo JSON para que js lo entienda como un arreglo de OBJETOS, ahora el lenght es la cant de obj.
misProductos  = JSON.parse(misProductos)
console.log(misProductos.length);

// traigo el boton para agregarle eventos con el id
let mostrarDatos = document.getElementById('mostrarProductos');


// al hacer clilet tabla = document.getElementById('miTabla');

let tabla = document.getElementById('tablaPiola');

mostrarDatos.addEventListener('click', (e) => {

    e.preventDefault();

    
    for (let i = 0; i < misProductos.length; i++) {
        
        // creamos la fila
        let fila = document.createElement('tr');

        // creamos las celdas
        let celdaNombre = document.createElement('td');
        let celdaCodigo = document.createElement('td');
        let celdaPrecio = document.createElement('td');
        let celdaDescri = document.createElement('td');

        celdaNombre.textContent = misProductos[i].nombre;
        celdaCodigo.textContent = misProductos[i].codigo;
        celdaPrecio.textContent = misProductos[i].precio;
        celdaDescri.textContent = misProductos[i].descripcion;

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaCodigo);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaDescri);

        tabla.appendChild(fila);

        console.log(fila);
        
    }
})
