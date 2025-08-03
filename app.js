// Lista para almacenar los nombres de los amigos
let amigos = [];

// Agrega un nuevo amigo desde el campo de texto
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios al inicio/final

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array y actualizar la lista visible
    amigos.push(nombre);
    actualizarListaDeAmigos();

    // Limpiar el campo de entrada
    input.value = "";

    // Mostrar en consola (opcional para depuración)
    console.log(amigos);
}

// Muestra en pantalla la lista actual de amigos
function actualizarListaDeAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar contenido anterior

    // Recorrer el array y agregar cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Realiza el sorteo de un amigo al azar y muestra el resultado
function sortearAmigo() {
    // Validar que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert("No hay nombres en la lista. Por favor, agrega al menos uno.");
        return;
    }

    // Seleccionar un índice aleatorio dentro del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento <ul id="resultado">
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}