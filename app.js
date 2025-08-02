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

    // 4. Limpiar el campo de entrada
    input.value = "";

    // (Opcional) Mostrar en consola
    console.log(amigos);
}