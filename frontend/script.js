// Definimos la URL base de nuestra API.
// Asegúrate de que coincida con el puerto donde corre tu backend.
const API_URL = '/api';

// Obtenemos referencias a los elementos del HTML con los que vamos a interactuar.
const itemsList = document.getElementById('items-list');
const newItemForm = document.getElementById('new-item-form');
const itemNameInput = document.getElementById('item-name');

/**
 * Función para obtener todos los items de la API y mostrarlos en la lista.
 */
async function fetchItems() {
    try {
        // Hacemos una petición GET a nuestro endpoint /items. 'await' pausa la ejecución
        // hasta que la promesa de fetch se resuelva (es decir, hasta que obtengamos respuesta).
        const response = await fetch(`${API_URL}/items`);
        // Convertimos la respuesta a formato JSON.
        const items = await response.json();

        // Limpiamos la lista actual en el HTML para no duplicar items.
        itemsList.innerHTML = '';

        // Recorremos cada item recibido y creamos un elemento <li> para él.
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `ID: ${item.id} - Nombre: ${item.name}`;
            itemsList.appendChild(li); // Añadimos el <li> a nuestra <ul>.
        });
    } catch (error) {
        console.error('Error al obtener los items:', error);
    }
}

/**
 * Función para manejar el envío del formulario y añadir un nuevo item.
 */
async function addItem(event) {
    // Prevenimos el comportamiento por defecto del formulario (que es recargar la página).
    event.preventDefault();

    const itemName = itemNameInput.value;
    // Si el campo de texto está vacío, no hacemos nada.
    if (!itemName) return;

    try {
        // Hacemos una petición POST para crear un nuevo item.
        const response = await fetch(`${API_URL}/items`, {
            method: 'POST', // Especificamos el método HTTP
            headers: {
                'Content-Type': 'application/json' // Le decimos a la API que enviamos JSON
            },
            // Convertimos nuestro objeto de JavaScript a una cadena de texto JSON.
            body: JSON.stringify({ name: itemName })
        });

        if (response.ok) {
            // Si la petición fue exitosa, limpiamos el campo de texto.
            itemNameInput.value = '';
            // Y volvemos a cargar la lista para que se muestre el nuevo item.
            fetchItems();
        } else {
            console.error('Error al añadir el item');
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
}

// Añadimos un "escuchador de eventos" al formulario.
// La función 'addItem' se ejecutará cada vez que se envíe el formulario.
newItemForm.addEventListener('submit', addItem);

// Finalmente, llamamos a fetchItems() una vez cuando la página se carga por primera vez
// para mostrar la lista inicial de items.
fetchItems();