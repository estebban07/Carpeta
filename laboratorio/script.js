document.addEventListener('DOMContentLoaded', function () {
    // Funcionalidad para el menú responsive
    const toggleMenuButton = document.getElementById('toggleMenu');
    const menu = document.getElementById('menu');

    if (toggleMenuButton && menu) {
        toggleMenuButton.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }

    // Funcionalidad para el formulario de contacto
    const contactForm = document.querySelector('#contact form');
    const formMessageContainer = document.getElementById('form-message'); // Asumiremos que este ID existe en el HTML

    if (contactForm && formMessageContainer) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevenir el envío tradicional del formulario

            // Mostrar mensaje de éxito
            formMessageContainer.textContent = '¡Formulario enviado correctamente!';
            formMessageContainer.className = 'form-message success'; // Clase para estilizar el éxito
            formMessageContainer.style.display = 'block'; // Asegurar que sea visible

            // Opcional: Limpiar el formulario
            contactForm.reset();

            // Opcional: Ocultar el mensaje después de unos segundos
            setTimeout(function () {
                formMessageContainer.style.display = 'none';
                formMessageContainer.textContent = ''; // Limpiar el texto
                formMessageContainer.className = 'form-message'; // Resetear clases
            }, 5000); // 5000 milisegundos = 5 segundos
        });
    } else {
        if (!contactForm) {
            console.error('Formulario de contacto no encontrado.');
        }
        if (!formMessageContainer) {
            // Este error se manejará mejor cuando agreguemos el div al HTML
            // console.error('Contenedor de mensaje de formulario (form-message) no encontrado.');
        }
    }
}); 