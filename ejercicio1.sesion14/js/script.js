/**
 * Script para añadir interactividad a la página `index.html`.
 * Cambia el texto de la sección de introducción al hacer clic en un botón.
 */
document.addEventListener('DOMContentLoaded', function () {
    // Obtener el botón por su ID
    const button = document.getElementById('changeTextButton');

    // Añadir un evento de clic al botón
    button.addEventListener('click', function () {
        // Obtener la sección de introducción por su ID
        const introSection = document.getElementById('intro');
        // Cambiar el contenido HTML de la sección
        introSection.innerHTML = '<p>El texto ha cambiado después de hacer clic en el botón!</p>';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('changeTextButton');
    button.addEventListener('click', function () {
        const introSection = document.getElementById('intro');
        introSection.innerHTML = '<p>El texto ha cambiado después de hacer clic en el botón!</p>';
    });
});
