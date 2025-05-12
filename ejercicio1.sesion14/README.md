# Proyecto: Mi Primera Página Web (Ejercicio 1)

Este proyecto es una introducción básica a la creación de páginas web utilizando HTML, CSS y JavaScript. Está diseñado para que personas con poca o ninguna experiencia en programación puedan entender los conceptos fundamentales de cada una de estas tecnologías.

## Descripción General

La página web consta de:
*   Un encabezado con un título de bienvenida.
*   Una sección principal con un párrafo introductorio y un botón.
*   Un pie de página con información de copyright.

La interactividad principal radica en que al hacer clic en el botón, el texto del párrafo introductorio cambia.

## Estructura de Archivos

El proyecto se organiza de la siguiente manera:

```
ejercicio1/
├── css/
│   └── style.css
├── js/
│   └── script.js
└── index.html
```

*   `index.html`: Contiene la estructura y el contenido de la página web.
*   `css/style.css`: Define los estilos visuales de la página (colores, fuentes, disposición).
*   `js/script.js`: Añade interactividad a la página mediante JavaScript.

## Detalles de los Archivos

A continuación, se explica en detalle el contenido y funcionamiento de cada archivo.

### 1. `index.html` (Lenguaje de Marcado de Hipertexto)

HTML es el lenguaje estándar para crear la estructura de las páginas web. El archivo `index.html` define qué elementos se muestran y en qué orden.

**Conceptos Clave de HTML en este archivo:**

*   **Comentarios en HTML**: `<!-- Esto es un comentario -->`. Son notas para los programadores y no se muestran en la web.
*   **`<!DOCTYPE html>`**: Declara que el documento es HTML5, la versión moderna de HTML.
*   **`<html>`**: Es la etiqueta raíz que envuelve todo el contenido de la página.
    *   `lang="es"`: Atributo que indica que el idioma principal de la página es español.
*   **`<head>`**: Contiene meta-información sobre el HTML, no visible directamente en la página.
    *   **`<meta charset="UTF-8">`**: Especifica la codificación de caracteres (UTF-8 es un estándar que soporta la mayoría de los caracteres mundiales). Es importante que sea la primera etiqueta meta dentro del `<head>`.
    *   **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Configura cómo se visualiza la página en diferentes dispositivos (móviles, tabletas).
        *   `width=device-width`: Ajusta el ancho de la página al del dispositivo.
        *   `initial-scale=1.0`: Establece el nivel de zoom inicial.
    *   **`<title>Mi Primera Página Web</title>`**: Define el título que aparece en la pestaña del navegador.
    *   **`<link rel="stylesheet" href="css/style.css">`**: Enlaza la hoja de estilos CSS externa (`style.css`) a la página HTML.
*   **`<body>`**: Contiene todo el contenido visible de la página.
    *   **`<header>`**: Representa la sección de cabecera de la página.
        *   **`<h1>Bienvenido a Mi Primera Página Web</h1>`**: Define un encabezado de nivel 1 (el más importante), usualmente el título principal.
    *   **`<main>`**: Encierra el contenido principal de la página.
        *   **`<section id="intro">`**: Define una sección temática.
            *   `id="intro"`: Es un identificador único para esta sección, útil para CSS y JavaScript.
            *   **`<p>Esta es mi primera página web...</p>`**: Define un párrafo de texto.
            *   **`<button id="changeTextButton">Haz clic...</button>`**: Crea un botón interactivo.
                *   `id="changeTextButton"`: Identificador único para el botón.
    *   **`<footer>`**: Representa el pie de página.
        *   **`<p>&copy; 2024 Mi Nombre</p>`**: Un párrafo con el símbolo de copyright (`&copy;`).
    *   **`<script src="js/script.js"></script>`**: Enlaza el archivo JavaScript externo (`script.js`). Se suele colocar al final del `<body>` para que el contenido HTML y CSS cargue primero, mejorando la percepción de velocidad de carga.

### 2. `css/style.css` (Hojas de Estilo en Cascada)

CSS se utiliza para definir la apariencia y el diseño de los elementos HTML. Controla colores, fuentes, márgenes, posicionamiento, etc.

**Conceptos Clave de CSS en este archivo:**

*   **Comentarios en CSS**: `/* Esto es un comentario */` o `/* ... comentario multilínea ... */`.
*   **Reglas CSS**: Consisten en un "selector" y un "bloque de declaración".
    *   **Selector**: Apunta a qué elemento(s) HTML se aplicarán los estilos (e.g., `body`, `header`, `button`).
    *   **Bloque de Declaración**: Contiene una o más `propiedad: valor;` (e.g., `color: white;`).

**Estilos Aplicados:**

*   **`body`**:
    *   `font-family: Arial, sans-serif;`: Define la familia de fuentes (Arial como primera opción, una fuente genérica sans-serif como alternativa).
    *   `margin: 0; padding: 0;`: Elimina márgenes y rellenos predeterminados del navegador.
    *   `background-color: #f0f0f0;`: Establece un color de fondo gris claro.
*   **`header`**:
    *   `background-color: #4CAF50;`: Fondo verde.
    *   `color: white;`: Texto blanco.
    *   `padding: 1em;`: Relleno interno (1em es relativo al tamaño de fuente actual).
    *   `text-align: center;`: Texto centrado.
*   **`main`**:
    *   `padding: 2em;`: Relleno interno para separar el contenido principal.
*   **`button`**:
    *   `padding: 0.5em 1em;`: Relleno (0.5em arriba/abajo, 1em izquierda/derecha).
    *   `background-color: #008CBA;`: Fondo azul.
    *   `color: white;`: Texto blanco.
    *   `border: none;`: Sin borde.
    *   `cursor: pointer;`: El cursor cambia a una mano al pasar sobre el botón.
*   **`button:hover`**: (Pseudo-clase que aplica estilos cuando el ratón está sobre el botón)
    *   `background-color: #005f6b;`: Fondo azul más oscuro para dar retroalimentación visual.
*   **`footer`**:
    *   `background-color: #333;`: Fondo gris oscuro.
    *   `color: white;`: Texto blanco.
    *   `text-align: center;`: Texto centrado.
    *   `padding: 1em 0;`: Relleno (1em arriba/abajo, 0 izquierda/derecha).
    *   `position: fixed;`: Fija el pie de página en la parte inferior de la ventana.
    *   `width: 100%;`: Ocupa todo el ancho.
    *   `bottom: 0;`: Lo alinea en la parte inferior.

### 3. `js/script.js` (JavaScript)

JavaScript es un lenguaje de programación que permite añadir interactividad y dinamismo a las páginas web.

**Funcionamiento del Script:**

El script `js/script.js` realiza lo siguiente:

1.  **Espera a que el DOM esté listo**:
    *   Utiliza `document.addEventListener('DOMContentLoaded', function () { ... });`.
    *   Esto asegura que el código JavaScript se ejecute solo después de que toda la estructura HTML haya sido cargada y procesada por el navegador. Esto es crucial para evitar errores al intentar acceder a elementos que aún no existen.

2.  **Selecciona el botón**:
    *   `const button = document.getElementById('changeTextButton');`
    *   Busca en el documento HTML el elemento con el `id` (identificador único) `'changeTextButton'` (que es nuestro botón).
    *   Guarda una referencia a este elemento en la variable `button`. `const` significa que esta variable no se puede reasignar.

3.  **Añade un "escuchador de eventos" al botón**:
    *   `button.addEventListener('click', function () { ... });`
    *   Este código le dice al navegador: "Cuando alguien haga clic en el elemento `button`, ejecuta la siguiente función".

4.  **Define la acción al hacer clic**:
    *   La función que se ejecuta al hacer clic hace dos cosas:
        1.  **Selecciona la sección de introducción**:
            *   `const introSection = document.getElementById('intro');`
            *   Busca el elemento HTML con el `id` `'intro'` (la sección que contiene el párrafo).
        2.  **Cambia el contenido de la sección**:
            *   `introSection.innerHTML = '<p>El texto ha cambiado después de hacer clic en el botón!</p>';`
            *   La propiedad `innerHTML` permite obtener o establecer el contenido HTML dentro de un elemento. Aquí, se reemplaza el contenido actual de `introSection` con un nuevo párrafo `<p>`.

## ¿Cómo ver la página web?

1.  Asegúrate de tener los tres archivos (`index.html`, `css/style.css`, `js/script.js`) en la misma estructura de carpetas descrita anteriormente.
2.  Abre el archivo `index.html` en cualquier navegador web (como Chrome, Firefox, Edge, Safari).
    *   Puedes hacer esto usualmente haciendo doble clic en el archivo `index.html` o arrastrándolo a una ventana abierta del navegador.

¡Y eso es todo! Deberías ver tu primera página web y poder interactuar con el botón. 