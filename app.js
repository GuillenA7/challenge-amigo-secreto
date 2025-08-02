// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // .trim() elimina espacios extra

    // 2. Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // 3. Actualizar el array de amigos
    amigos.push(nombre);

    actualizarListaDeAmigos();      // ← Aquí actualiza la vista

    // 4. Limpiar el campo de entrada
    input.value = "";

    // (Opcional) Mostrar en consola
    console.log(amigos);
}

function actualizarListaDeAmigos() {
    // 1. Obtener el elemento UL donde se mostrará la lista
    const lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista para evitar duplicados
    lista.innerHTML = "";

    // 3. Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        // 4. Crear un nuevo elemento <li> por cada amigo
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // 1. Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay nombres en la lista. Por favor, agrega al menos uno.");
        return;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre correspondiente
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado en el HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}