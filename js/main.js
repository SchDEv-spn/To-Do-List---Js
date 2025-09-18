// 🔹 Constantes globales
// Son referencias declaradas con const en el ámbito global (fuera de funciones o bloques).
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const toDoLis = document.getElementById("cont-to-do-list");
const completeList = document.getElementById("cont-completed-list");


// 🔹 Función para crear una nueva tarea a partir del texto ingresado en el formulario
// Se construye dinámicamente la estructura HTML de la tarea.
function createToDoItem(textoItem) {
    // Contenedor principal de la tarea
    const item = document.createElement('div');
    item.classList.add('item-to-do');

    // Checkbox para marcar como completada
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Párrafo con el texto de la tarea
    const p = document.createElement('p');
    p.textContent = textoItem;

    // Botón para eliminar la tarea
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';

    // Ensamblamos todos los elementos dentro del contenedor de la tarea
    item.appendChild(checkbox);
    item.appendChild(p);
    item.appendChild(deleteBtn);

    // Retornamos el elemento completo para usarlo más adelante
    return item;
}


// 🔹 Evento para añadir una nueva tarea cuando se hace clic en el botón
addBtn.addEventListener('click', () => {
    const textoItem = input.value.trim();

    if (textoItem === "") {
        alert("No se puede crear una tarea vacía");
    } else {
        const newItem = createToDoItem(textoItem);
        toDoLis.appendChild(newItem);
        input.value = "";

        // Se asignan los eventos propios a la nueva tarea
        eventsToItem(newItem);
    }
});


// 🔹 Función para añadir la lógica principal de cada tarea:
//    - Marcar como completada o pendiente
//    - Eliminar la tarea
function eventsToItem(item) {
    // Seleccionamos el checkbox y el botón dentro de la tarea
    const checkbox = item.querySelector("input");
    const deleteBtn = item.querySelector("button");

    // Evento: mover tarea entre "Pendientes" y "Completadas"
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            completeList.appendChild(item);
        } else {
            toDoLis.appendChild(item);
        }
    });

    // Evento: eliminar tarea
    deleteBtn.addEventListener('click', () => {
        item.remove();
    });
}
const btnStyle = document.getElementById('change-styles')
btnStyle.addEventListener('click', () => {
    const linkCss = document.getElementById('enlace-estilos')


    if (linkCss.getAttribute('href') == 'css/style.css') {
        linkCss.setAttribute('href', 'css/style-noche.css')

        btnStyle.textContent = 'Modo Dia'
    } else {
        linkCss.setAttribute('href', 'css/style.css')
        btnStyle.textContent = 'Modo Dia'
    }
})