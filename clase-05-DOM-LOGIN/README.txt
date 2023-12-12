
// USO DE TIPOS DE VARIABLES EN JAVASCRIPT 
-----------------------------------------------------------------------------------------
When to Use var, let, or const?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.
--------------------------------------------------------------------------------------------

// DOM
--------------------------------------------------------------------------------------------
para evitar poner todo el contexto de la funcion se invento lo siguiente enn ES6
DOM: Manejo de documentacion y elementos de HTML con js
1-- Obtener el elemento: asignar a una variable un document.getById("Id")
2-- Puedo modificar todos los atributos de css en js con id.style.---
3-- Para que todo esto funcione el archivo HTML debe estar linkeado al js con script src 
4-- Luego en HTML a las etiquetas le agrego eventos (onclick por ej) y ese evento puede ser
    responsbilidad de una funcion de js ejemplo: 
    {
        <button onclick="saludar('Pepe')" id="saludo" type="button"> Saludar </button>
    }
5--