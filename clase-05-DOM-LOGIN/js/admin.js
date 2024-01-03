
let nombre = document.getElementById('usuario');
console.log(nombre);

nombre.style.textAlign = 'center';
nombre.style.color = 'red';
nombre.innerHTML = usuario;    


let borrar = document.getElementById('borrarStorage');



let borrarStorage = () =>{
    localStorage.removeItem('Admin');
    location.reload();
}

let borrarStorage2 = () => {
    localStorage.clear();
}

console.log('==========================================');
console.log('==========================================');
let contenedorTarjetas = document.getElementById('contenedorTarjetas')
const URL = 'http://fakestoreapi.com/products'

let carrito = [];

fetch(URL)
    .then(response => response.json())
    .then(data=> {
        
        //guardo la data de la api en una variable
        const misProductos = data
        
        //recorremos la variable con un ciclo for

        misProductos.forEach(producto => {
            
            //creamos la card para cada elemento

            let card = document.createElement('div');
            card.classList.add("card");
            card.style.width = "18rem";

            let imagen = document.createElement('img');
            imagen.classList.add("card-img-top");
            imagen.src = producto.image
            imagen.alt = `producto: ${producto.nombre}`

            
            card.appendChild(imagen);
            contenedorTarjetas.appendChild(card);

            // creamos las partes textuales de la card
            let nombreProducto = document.createElement('h5')
            nombreProducto.classList.add("card-title");
            nombreProducto.innerText = producto.title;

            // descripcion del producto
            let descripcion = document.createElement('p');
            descripcion.classList.add('card-description');
            descripcion.innerText = producto.description


            // precio del producto
            let precio = document.createElement('p');
            precio.classList.add('card-price');
            precio.innerText = producto.price;

            let cardBody = document.createElement('div');
            cardBody.classList.add("card-body");
            cardBody.appendChild(nombreProducto);
            cardBody.appendChild(descripcion);
            cardBody.appendChild(precio);
            
            let botonComprar = document.createElement('button');
            botonComprar.classList.add('btn btn-success');
            botonComprar.addEventListener('click', (e) =>{
                e.preventDefault();
                
                carrito.push(producto);
                
                localStorage.setItem('carrito', JSON.stringify(carrito))
                cardBody.appendChild(botonComprar);
                
            card.appendChild(cardBody);
            });
        });
    });
