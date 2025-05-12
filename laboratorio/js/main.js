// Espera que todo el contenido HTML esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

  // ----- MENÚ RESPONSIVO -----

  // Selecciona el botón del menú (☰) y el contenedor del menú de navegación
  const toggleBtn = document.getElementById('toggleMenu');
  const menu = document.getElementById('menu');

  // Cuando se hace clic en el botón, se alterna la clase "active" para mostrar u ocultar el menú
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Opcional: Cierra el menú al hacer clic en cualquiera de los enlaces (en pantallas pequeñas)
  const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    });
  });

  // ----- VALIDACIÓN BÁSICA DEL FORMULARIO -----

  // Selecciona el formulario de contacto
  const form = document.querySelector('form');

  // Cuando se intenta enviar el formulario...
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Captura el valor de cada campo
    const nombre = form.nombre.value;
    const email = form.email.value;
    const mensaje = form.mensaje.value;

    // Verifica que los tres campos tengan contenido (no estén vacíos)
    if (nombre === '' || email === '' || mensaje === '') {
      alert('Por favor completa todos los campos.');
      return; // Sale de la función para que no siga
    }

    // Verifica que el correo tenga al menos un "@" y un "."
    // Esta es una forma muy básica de verificar que parece un correo
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      alert('Por favor escribe un correo electrónico válido.');
      return;
    }

    // Si todo está bien, muestra un mensaje de éxito
    alert('¡Formulario enviado correctamente!');

    // Limpia todos los campos del formulario
    form.reset();
  });

});
