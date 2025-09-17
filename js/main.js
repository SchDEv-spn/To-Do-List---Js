const input = document.getElementById("todo-form");
const addBtn = document.getElementById("add-btn");
const toDoLis = document.getElementById("item-to-do");
const completeList = document.getElementById("cont-completed-list");


// creamos la funcion que nos permite crear una nueva tarea apartir del formulario/
// toda etiqueta que vamos a crear es apartir de la maqueta html pre-existente/

function createToDoItem(textoItem) {
    // creamos el nodo o elemento padre o contenedor
    const item = document.createElement('div');
    item.classList.add('item-to-do')
    // creamos el nodo hijo input y le gregamos el type checkbox
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';

    // creamos el siguiente nodo hijo parrafo en este caso/
    // a este parafo le asigno el valor del argumento de la funcion , es decir lo que escribe el usuario en el campo del formulario

    const p = document.createElement('p');
    p.textContent = textoItem
    // creamos el ultimo nodo hijo para el boton de eliminar
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Eliminar';
    // ensamblamos dentro del nodo padre , sus nodos hijos, es deecier la estructura de la tarea

    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);
    // utilizamos el return coon el fin de dar respuesta del elemneto creado, esta se usara mas adelante 
    return item;
}