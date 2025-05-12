# Proyecto Mi Portafolio Web

## 🌟 Descripción General

Este proyecto es una plantilla básica para un sitio web de tipo "Portafolio" o página personal. Está construido utilizando HTML para la estructura del contenido y CSS para los estilos y la presentación visual. El objetivo es mostrar diferentes secciones comunes en una página web, como una introducción (hero), información sobre nosotros, servicios, galería de proyectos, testimonios y un formulario de contacto.

Es un excelente punto de partida para aprender sobre desarrollo web front-end, ya que muestra cómo organizar el contenido y darle estilo de una manera clara y modular.

## 📂 Estructura de Archivos

El proyecto está organizado de la siguiente manera:

```
laboratorio/
├── css/
│   └── styles.css
├── img/
│   ├── logo.png
│   ├── imagen_1.jpg
│   ├── imagen_2.jpg
│   ├── imagen_3.jpg
│   └── imagen_4.jpg
├── index.html
├── js/
│   └── main.js
└── README.md
```

*   **`index.html`**: Este es el archivo principal que contiene toda la estructura y el contenido de la página web.
*   **`css/styles.css`**: Aquí se definen todos los estilos visuales de la página (colores, fuentes, márgenes, diseño, etc.).
*   **`img/`**: Esta carpeta almacena todas las imágenes utilizadas en el sitio web.
    *   `logo.png`: El logo que aparece en la barra de navegación.
    *   `imagen_1.jpg`: Imagen utilizada en la sección "Sobre nosotros" y en la sección "Hero".
    *   `imagen_2.jpg`, `imagen_3.jpg`, `imagen_4.jpg`: Imágenes para la galería del portafolio.
*   **`js/main.js`**: Archivo JavaScript que controla la apertura/cierre del menú en móviles, valida el formulario de contacto y muestra mensajes de confirmación.
*   **`README.md`**: Este archivo que estás leyendo, con la explicación del proyecto.

## HTML (`index.html`)

El archivo `index.html` es el esqueleto de nuestra página web. Se divide en varias secciones semánticas para organizar el contenido:

1.  **`<!DOCTYPE html>`**: Declara que el documento es de tipo HTML5.
2.  **`<html lang="es">`**: Es la etiqueta raíz, `lang="es"` indica que el idioma principal de la página es español.
3.  **`<head>`**: Contiene metadatos sobre el HTML (no visibles directamente en la página) y enlaces a recursos externos.
    *   **`<meta charset="UTF-8">`**: Especifica la codificación de caracteres UTF-8, para una correcta visualización de tildes y caracteres especiales.
    *   **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Configura la página para que se adapte a diferentes tamaños de pantalla (diseño responsivo).
    *   **`<title>Mi Portafolio</title>`**: El título que aparece en la pestaña del navegador.
    *   **`<link rel="stylesheet" href="css/styles.css">`**: Enlaza la hoja de estilos CSS externa.
4.  **`<body>`**: Contiene todo el contenido visible de la página web.

    *   **`<header>` y `<nav class="navbar">` (Barra de Navegación)**:
        *   Muestra el logo y los enlaces de navegación (Inicio, Sobre nosotros, Servicios, Portafolio, Contacto).
        *   Los enlaces (`<a>`) usan `href="#nombre_seccion"` para navegar a las diferentes secciones dentro de la misma página.
        *   Incluye un botón "hamburguesa" (`<button class="toggle-menu">`) que es visible en dispositivos móviles para mostrar/ocultar el menú.

    *   **`<section id="home" class="hero">` (Sección Hero/Inicio)**:
        *   Es la primera sección visible, generalmente con un mensaje de bienvenida o un titular llamativo.
        *   `id="home"` permite que el enlace "Inicio" de la barra de navegación lleve a esta sección.

    *   **`<section id="about" class="about">` (Sección Sobre Nosotros)**:
        *   Presenta información sobre la persona o empresa. Contiene una imagen y un texto descriptivo.

    *   **`<section id="services" class="services">` (Sección Servicios)**:
        *   Muestra los servicios ofrecidos, usualmente en formato de tarjetas (`<div class="card">`).

    *   **`<section id="portfolio" class="portfolio">` (Sección Portafolio)**:
        *   Una galería de imágenes para mostrar proyectos realizados.

    *   **`<section class="testimonial">` (Sección Testimonio/Frase)**:
        *   Un espacio para una cita o testimonio inspirador.

    *   **`<section id="contact" class="contact">` (Sección Contacto)**:
        *   Un formulario (`<form>`) para que los visitantes puedan enviar mensajes. Incluye campos para nombre, email y mensaje.

    *   **`<footer>` (Pie de Página)**:
        *   Contiene información general al final de la página, como derechos de autor o enlaces adicionales.

    *   **`<script src="js/main.js"></script>`**: Enlaza el archivo JavaScript principal que añade interactividad a la página.

## 🎨 CSS (`css/styles.css`)

Este archivo es el responsable de cómo se ve la página. Utiliza selectores para aplicar estilos a los elementos HTML.

1.  **Reseteo General y Estilos Base**:
    *   `* { box-sizing: border-box; margin: 0; padding: 0; }`: Un reseteo común para que todos los elementos tengan un comportamiento de caja predecible y se eliminen márgenes y rellenos por defecto que aplican los navegadores.
    *   `body { ... }`: Define estilos globales para la página, como la fuente (`font-family`), el interlineado (`line-height`) y el color de texto principal (`color`).

2.  **Barra de Navegación (`.navbar`, `.logo img`, `.menu`, etc.)**:
    *   Se utilizan propiedades de Flexbox (`display: flex`, `align-items: center`, `justify-content: space-between`) para alinear el logo y los elementos del menú.
    *   `position: fixed`, `top: 0`, `left: 0` y `right: 0` hacen que la barra de navegación se quede siempre fija en la parte superior de la ventana, ocupando todo el ancho.
    *   Se definen estilos para los enlaces, incluyendo un efecto `hover` (cambio de color al pasar el cursor).

3.  **Sección Hero (`.hero`, `.hero-content`)**:
    *   Utiliza una imagen de fondo con un gradiente superpuesto para mejorar la legibilidad del texto.
    *   Flexbox se usa para centrar el contenido (`<h1>` y `<p>`) vertical y horizontalmente.

4.  **Estilos Generales para Secciones (`section`, `.container`)**:
    *   `section { padding: ... }`: Añade un espaciado interno a todas las secciones.
    *   `.container { max-width: ...; margin: 0 auto; }`: Centra el contenido principal de cada sección y le da un ancho máximo para que no se extienda demasiado en pantallas grandes.

5.  **Estilos Específicos por Sección (`.about`, `.services .card`, `.portfolio .gallery`, etc.)**:
    *   Cada sección tiene sus propios estilos para organizar sus elementos (imágenes, texto, tarjetas, galería).
    *   Se usa Flexbox para distribuir las tarjetas de servicios y las imágenes del portafolio.

6.  **Formulario de Contacto (`.contact form`, `.contact input`, etc.)**:
    *   Estilos para los campos de entrada (`<input>`, `<textarea>`) y el botón de envío (`<button>`).

7.  **Pie de Página (`footer`)**:
    *   Estilos básicos para el pie de página.

8.  **Diseño Responsivo (`@media (max-width: 768px) { ... }`)**:
    *   Esta es una **Media Query**. Permite aplicar estilos diferentes cuando el ancho de la pantalla es de 768 píxeles o menos (típicamente tablets y móviles).
    *   Aquí se oculta el menú normal y se muestra el botón "hamburguesa" (`.toggle-menu`).
    *   El menú (`.menu`) cambia su dirección a columna (`flex-direction: column`) para que se vea bien en pantallas pequeñas.
    *   Se ajusta el diseño de la sección "Sobre Nosotros" y las imágenes del portafolio para que ocupen todo el ancho en dispositivos más pequeños.

## 🛠️ JavaScript (`js/main.js`)

Estos archivos añaden interactividad a la página. Si eres principiante puedes usar **uno** o **ambos** como referencia:

* **`js/main.js`** (≈60&nbsp;líneas):
  * Espera que el documento cargue (`DOMContentLoaded`).
  * Muestra/oculta el menú en pantallas pequeñas usando `classList.toggle('active')`.
  * Añade **validación básica** del formulario (campos vacíos y formato de email).
  * Limpia el formulario tras el envío y muestra un mensaje de éxito.

Asegúrate de que en tu `index.html` la línea `<script src="js/main.js"></script>` apunte correctamente al archivo.

## 👶 Contenido apto para menores de edad

Todo el material incluido (imágenes, texto y comentarios) está pensado para **todos los públicos**. No hay contenido sensible ni referencias inapropiadas. Aun así:

1. Las imágenes son genéricas y libres de derechos; puedes reemplazarlas por otras adecuadas a tu contexto educativo.
2. El texto "Lorem Ipsum" es de relleno: anima a tus estudiantes a redactar mensajes propios y positivos.
3. Evita publicar datos personales reales (como correos o teléfonos) si el sitio va a estar accesible en internet.

---

## 🖼️ Imágenes (Carpeta `img/`)

La carpeta `img/` contiene todos los recursos gráficos:

*   **`logo.png`**: Se usa en la barra de navegación (`<img src="img/logo.png" ...>`).
*   **`imagen_1.jpg`**: Se usa en la sección "Sobre Nosotros" (`<img src="img/imagen_1.jpg" ...>`) y como fondo en la sección "Hero" a través de CSS (`background: url('../img/imagen_1.jpg') ...`). Nota el `../` en la ruta CSS, que significa "subir un nivel de directorio" desde `css/` a `laboratorio/` y luego entrar a `img/`.
*   **Otras imágenes (`imagen_2.jpg`, etc.)**: Se usan en la galería del portafolio.

Es importante que las rutas a las imágenes sean correctas tanto en el HTML como en el CSS para que se muestren adecuadamente.

## 🚀 Cómo Empezar / Visualizar el Proyecto

Para ver esta página web en acción, sigue estos sencillos pasos:

1.  Asegúrate de tener todos los archivos y carpetas (`index.html`, la carpeta `css` con `styles.css` dentro, y la carpeta `img` con las imágenes) en la misma ubicación en tu computadora.
2.  Abre tu explorador de archivos y navega hasta la carpeta `laboratorio`.
3.  Haz doble clic en el archivo `index.html`.
4.  Esto debería abrir la página en tu navegador web predeterminado (como Chrome, Firefox, Edge, etc.), ¡y podrás ver el portafolio!

## 💡 Posibles Próximos Pasos

*   **Personalizar el contenido**: Reemplaza el texto "Lorem Ipsum" y las imágenes de marcador de posición con tu propia información y proyectos.
*   **Añadir interactividad con JavaScript**: Implementar la funcionalidad del menú hamburguesa para que muestre/oculte el menú en móviles.
*   **Mejorar el diseño**: Experimenta con diferentes colores, fuentes y diseños en el archivo `css/styles.css`.
*   **Validar el formulario**: Añadir validación al formulario de contacto (aunque el atributo `required` en HTML ya proporciona una validación básica).
*   **Desplegar online**: Una vez que estés contento con tu portafolio, ¡puedes subirlo a un servicio de hosting para compartirlo con el mundo!

¡Esperamos que esta explicación te sea útil para entender y modificar el proyecto!

## 🔍 Detalle línea por línea (Código comentado)

A continuación verás una **versión resumida y comentada** de los tres archivos fundamentales. Se muestran los fragmentos más importantes con comentarios al lado de cada línea para que comprendas qué hace cada instrucción.

> Sugerencia: puedes abrir el archivo original en tu editor y seguir estas notas con la numeración real de líneas.

### 1. `index.html`

```html
<!DOCTYPE html> <!-- 1️⃣ Indica que el documento utiliza la especificación HTML5 -->
<html lang="es"> <!-- 2️⃣ La etiqueta raíz y el atributo de idioma (español) -->
<head> <!-- 3️⃣ Zona de metadatos y enlaces a recursos externos -->
  <meta charset="UTF-8"> <!-- 4️⃣ Codificación para admitir tildes y caracteres especiales -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- 5️⃣ Hace que la página sea responsive -->
  <title>Mi Primera Página Web</title> <!-- 6️⃣ Texto que se muestra en la pestaña del navegador -->
  <link rel="stylesheet" href="css/styles.css"> <!-- 7️⃣ Conecta la hoja de estilos -->
</head>
<body> <!-- 8️⃣ Todo lo visible está contenido aquí -->

  <!-- 🔹  BARRA DE NAVEGACIÓN  -->
  <header> <!-- 9️⃣ Cabecera general -->
    <nav class="navbar"> <!-- 10️⃣ Contenedor de enlaces -->
      <div class="logo"> <!-- 11️⃣ Área para el logotipo -->
        <img src="img/logo.png" alt="Logo" class="nav-icon"> <!-- 12️⃣ Imagen del logo -->
      </div>
      <button class="toggle-menu" id="toggleMenu">☰</button> <!-- 13️⃣ Botón menú móvil -->
      <ul class="menu" id="menu"> <!-- 14️⃣ Lista de enlaces -->
        <li><a href="#home">Inicio</a></li> <!-- 15️⃣ Enlace interno -->
        <li><a href="#about">Sobre nosotros</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <!-- 🔹  SECCIÓN HERO  -->
  <section id="home" class="hero"> <!-- 16️⃣ Primera sección llamativa -->
    <div class="hero-content"> <!-- 17️⃣ Contenedor centrado -->
      <h1>¡Bienvenidos a Mi Web!</h1> <!-- 18️⃣ Título principal -->
      <p>Aprendiendo a programar</p> <!-- 19️⃣ Subtítulo -->
    </div>
  </section>

  <!-- (Se repiten estructuras similares para About, Services, Portfolio, Testimonial y Contact) -->

  <footer> <!-- 20️⃣ Pie de página -->
    <p>Lorem ipsum dolor sit amet...</p>
  </footer>

  <script src="js/main.js"></script> <!-- 21️⃣ Conecta el JavaScript -->
</body>
</html>
```

#### Código completo

```html
<!-- index.html -->
<!-- Declaración del tipo de documento, indica que es un HTML5 -->
<!DOCTYPE html>
<!-- Etiqueta raíz del documento HTML, lang="es" indica que el idioma principal es español -->
<html lang="es">

<!-- Cabecera del documento, contiene metadatos y enlaces a recursos -->

<head>
    <!-- Especifica la codificación de caracteres como UTF-8, compatible con la mayoría de los caracteres especiales -->
    <meta charset="UTF-8" />
    <!-- Configura la vista para dispositivos móviles, asegurando que el ancho sea el del dispositivo y la escala inicial sea 1.0 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Título que aparecerá en la pestaña del navegador -->
    <title>Mi Primera Página Web</title>
    <!-- Enlace a la hoja de estilos CSS externa -->
    <link rel="stylesheet" href="css/styles.css" />
</head>

<!-- Cuerpo del documento, contiene el contenido visible de la página -->

<body>

    <!-- SECCIÓN DE LA BARRA DE NAVEGACIÓN -->
    <!-- El elemento header es una etiqueta semántica de HTML5 que representa la cabecera de una página web o sección... (resto del archivo completo aquí) -->

```

### 2. `css/styles.css`

```css
/* 1️⃣ Reseteo universal */
* {
  box-sizing: border-box; /* Incluye padding y borde en el cálculo del ancho */
  margin: 0;  /* Elimina márgenes predeterminados */
  padding: 0; /* Elimina rellenos predeterminados */
}

/* 2️⃣ Estilos base del documento */
body {
  font-family: Arial, sans-serif; /* Fuente principal */
  line-height: 1.6;             /* Altura de línea para legibilidad */
  color: #333;                  /* Color de texto */
}

/* 3️⃣ Barra de navegación */
.navbar {
  background: #1a1a1a;   /* Fondo oscuro */
  color: #fff;           /* Texto blanco */
  display: flex;         /* Flexbox: coloca logo y menú en línea */
  justify-content: space-between;
  align-items: center;
  position: fixed; top: 0; left: 0; right: 0; /* Se mantiene arriba */
  padding: 15px 40px;
  z-index: 1000;         /* Encima de todo */
}

/* 4️⃣ Menú responsive */
.toggle-menu { display: none; }

/* (Siguen reglas para hero, about, services, portfolio, etc.) */

/* 5️⃣ Media query para móviles */
@media (max-width: 768px) {
  .toggle-menu { display: block; } /* Muestra el botón hamburguesa */
  .menu { flex-direction: column; } /* Menú vertical */
}
```

#### Código completo

```css
/* styles.css */
/* ----- RESETEO GENERAL Y ESTILOS BASE ----- */
/* Reseteo universal para eliminar márgenes y paddings por defecto, y usar border-box para el modelo de caja */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Estilos base para el cuerpo del documento */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* ... (resto del archivo completo) ... */
```

### 3. `js/main.js`

```js
// Espera que todo el contenido HTML esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
  // ----- MENÚ RESPONSIVO -----
  const toggleBtn = document.getElementById('toggleMenu');
  const menu = document.getElementById('menu');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Cierra el menú al pulsar un enlace (móviles)
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('active')) menu.classList.remove('active');
    });
  });

  // ----- VALIDACIÓN BÁSICA DEL FORMULARIO -----
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const { nombre, email, mensaje } = form;
    if (!nombre.value || !email.value || !mensaje.value) {
      alert('Por favor completa todos los campos.');
      return;
    }
    if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
      alert('Por favor escribe un correo electrónico válido.');
      return;
    }
    alert('¡Formulario enviado correctamente!');
    form.reset();
  });
});
```

#### Código completo (`js/main.js`)

```js
// Espera que todo el contenido HTML esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
  // ----- MENÚ RESPONSIVO -----
  const toggleBtn = document.getElementById('toggleMenu');
  const menu = document.getElementById('menu');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Cierra el menú al pulsar un enlace (móviles)
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('active')) menu.classList.remove('active');
    });
  });

  // ----- VALIDACIÓN BÁSICA DEL FORMULARIO -----
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const { nombre, email, mensaje } = form;
    if (!nombre.value || !email.value || !mensaje.value) {
      alert('Por favor completa todos los campos.');
      return;
    }
    if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
      alert('Por favor escribe un correo electrónico válido.');
      return;
    }
    alert('¡Formulario enviado correctamente!');
    form.reset();
  });
});
```

> Si prefieres usar `js/main.js`, revisa la sección anterior para su explicación detallada.

--- 