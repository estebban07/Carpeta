# Proyecto: Mi Primera Página Web Mejorada (Ejercicio 1 Finalizado)

Este proyecto es una versión mejorada de "Mi Primera Página Web". Si bien mantiene la funcionalidad básica de cambiar un texto con un botón, introduce elementos más avanzados como una barra de navegación con submenús y estilos CSS más elaborados, incluyendo un diseño responsivo básico.

Está diseñado para que personas que ya comprendieron los conceptos del primer ejercicio puedan seguir explorando HTML, CSS y JavaScript, y entiendan cómo se combinan para crear interfaces más completas.

## Descripción General

La página web ahora incluye:

*   Un **encabezado** (`<header>`) que contiene:
    *   Un título principal (`<h1>`).
    *   Una **barra de navegación** (`<nav>`) con:
        *   Una lista principal de enlaces (`<ul>`).
        *   Un elemento de la lista con un **submenú desplegable** que aparece al pasar el ratón por encima.
*   Una **sección de "Inicio"** (`<section id="inicio">`) con contenido de ejemplo.
*   Una **sección principal** (`<main>`) con:
    *   La sección original (`<section id="intro">`) que contiene un párrafo y el botón interactivo.
*   Un **pie de página** (`<footer>`) con información de copyright, fijado en la parte inferior de la pantalla.

La interactividad principal sigue siendo el cambio de texto al hacer clic en el botón, pero se añaden la interactividad de la navegación y los submenús.

## Estructura de Archivos

El proyecto mantiene una estructura similar:

```
ejercicio1-finalizado/
├── css/
│   └── style.css
├── js/
│   └── script.js
└── index.html
```

*   `index.html`: Define la estructura y el contenido de la página web, ahora con la barra de navegación.
*   `css/style.css`: Define los estilos visuales, incluyendo los de la nueva barra de navegación, submenús y algunos ajustes responsivos.
*   `js/script.js`: Mantiene el código JavaScript para la interactividad del botón (sin cambios respecto al ejercicio anterior en funcionalidad, pero es bueno revisarlo en el contexto de la página completa).

## Detalles de los Archivos

A continuación, se explica con sumo detalle cada archivo.

### 1. `index.html` (Lenguaje de Marcado de Hipertexto)

Este archivo sigue siendo el esqueleto de nuestra página web. Veamos las novedades y repasemos lo existente.

```html
<!DOCTYPE html> <!-- Le dice al navegador: "Este documento es HTML5" -->
<html lang="es"> <!-- Inicio del documento HTML. lang="es" indica que la página está en español -->

<head> <!-- Sección de metadatos: información sobre la página, no visible directamente -->
    <meta charset="UTF-8"> <!-- Define la codificación de caracteres. UTF-8 es muy completo. -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Configura cómo se ve la página en diferentes pantallas (móviles, etc.) -->
    <!-- width=device-width: el ancho de la página se ajusta al del dispositivo. -->
    <!-- initial-scale=1.0: el zoom inicial es 1 (sin zoom). -->
    <title>Mi Primera Página Web</title> <!-- Título que aparece en la pestaña del navegador -->
    <link rel="stylesheet" href="css/style.css"> <!-- Enlaza la hoja de estilos CSS externa -->
</head>

<body> <!-- Todo el contenido visible de la página va aquí -->

    <header> <!-- Sección del encabezado de la página -->
        <h1>Bienvenido a Mi Primera Página Web</h1> <!-- Título principal de la página -->

        <!-- NUEVO: Barra de Navegación -->
        <nav> <!-- La etiqueta <nav> se usa para definir un bloque de enlaces de navegación -->
            <ul> <!-- <ul> crea una lista desordenada (con viñetas, aunque CSS las quitará) -->
                <li><a href="#inicio">Inicio</a></li> <!-- <li> es un elemento de la lista. <a> es un hipervínculo. href="#inicio" enlaza a una sección con id="inicio" en esta misma página. -->
                <li>
                    <a href="#about">Acerca de</a> <!-- Enlace principal "Acerca de" -->
                    <!-- NUEVO: Submenú -->
                    <ul> <!-- Otra lista desordenada, anidada dentro del <li> anterior. Esto formará el submenú. -->
                        <li><a href="#team">Nuestro Equipo</a></li>
                        <li><a href="#history">Historia</a></li>
                    </ul>
                </li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <!-- NUEVO: Sección de Inicio -->
    <section id="inicio"> <!-- Una sección con el id "inicio", a donde apunta el enlace del menú -->
        <h2>Inicio</h2> <!-- Un subtítulo para esta sección -->
        <p>Contenido de la página de inicio.</p> <!-- Párrafo de ejemplo -->
    </section>

    <main> <!-- Contenido principal de la página -->
        <section id="intro"> <!-- La sección que ya conocíamos -->
            <p>Esta es mi primera página web utilizando HTML, CSS y JavaScript.</p>
            <button id="changeTextButton">Haz clic para cambiar el texto</button> <!-- El botón interactivo -->
        </section>
    </main>

    <footer> <!-- Pie de página -->
        <p>&copy; 2024 Mi Nombre</p> <!-- Párrafo con símbolo de copyright. &copy; es una "entidad HTML". -->
    </footer>

    <script src="js/script.js"></script> <!-- Enlaza el archivo JavaScript. Al final para mejor rendimiento. -->
</body>

</html>
```

**Novedades Clave en `index.html`:**

*   **Barra de Navegación (`<nav>`):**
    *   Se introduce la etiqueta `<nav>`, semánticamente correcta para agrupar enlaces de navegación.
    *   Dentro, usamos listas desordenadas (`<ul>`) y elementos de lista (`<li>`) para estructurar los enlaces (`<a>`).
    *   Los `href="#id_seccion"` son enlaces internos que llevan a otras partes de la misma página que tengan el `id` correspondiente.
*   **Submenú:**
    *   Se crea anidando otra `<ul>` dentro de un `<li>` de la lista principal. El CSS se encargará de mostrarlo y ocultarlo.
*   **Sección `#inicio`:**
    *   Se añade una nueva sección para demostrar cómo los enlaces de navegación pueden dirigir a diferentes partes del contenido.

### 2. `css/style.css` (Hojas de Estilo en Cascada)

Este archivo ha crecido para dar estilo a la nueva barra de navegación y sus submenús, además de introducir un concepto básico de diseño responsivo con `@media` queries.

```css
/* Estilos generales para el cuerpo de la página */
body {
    font-family: Arial, sans-serif; /* Tipo de letra principal: Arial. Si no está, usa una genérica sin serifa. */
    margin: 0; /* Quita el margen exterior por defecto del navegador. */
    padding: 0; /* Quita el relleno interior por defecto. */
    background-color: #f0f0f0; /* Color de fondo gris claro. */
}

/* Estilos para el encabezado */
header {
    background-color: #4CAF50; /* Fondo verde. */
    color: white; /* Texto blanco. */
    padding: 1em; /* Relleno interior (1em es relativo al tamaño de letra actual). */
    text-align: center; /* Texto centrado. */
}

/* Estilos para la sección principal de contenido */
main {
    padding: 2em; /* Más relleno para separar el contenido. */
}

/* Estilos para los botones */
button {
    padding: 0.5em 1em; /* Relleno: 0.5em arriba/abajo, 1em izquierda/derecha. */
    background-color: #008CBA; /* Fondo azul. */
    color: white; /* Texto blanco. */
    border: none; /* Sin borde. */
    cursor: pointer; /* El cursor se vuelve una mano al pasar por encima (indica que es clickeable). */
}

/* Estilo para el botón cuando el ratón está encima */
button:hover { /* ':hover' es una pseudo-clase para el estado "encima con el ratón" */
    background-color: #005f6b; /* Azul más oscuro para feedback visual. */
}

/* Estilos para el pie de página */
footer {
    background-color: #333; /* Fondo gris oscuro. */
    color: white; /* Texto blanco. */
    text-align: center; /* Texto centrado. */
    padding: 1em 0; /* Relleno: 1em arriba/abajo, 0 izquierda/derecha. */
    position: fixed; /* Posición fija: se queda en su sitio aunque hagas scroll. */
    width: 100%; /* Ocupa todo el ancho disponible. */
    bottom: 0; /* Se pega a la parte inferior de la ventana del navegador. */
}

/* --- NUEVOS ESTILOS PARA LA NAVEGACIÓN --- */

/* Estilos para la barra de navegación en sí */
nav {
    position: sticky; /* Posición pegajosa: se comporta normal hasta que haces scroll y llega al borde superior, entonces se fija. */
    top: 0; /* Se pega al borde superior cuando se vuelve 'sticky'. */
    background-color: #333; /* Mismo color de fondo que el footer para consistencia. */
    z-index: 1000; /* Asegura que la barra de navegación esté por encima de otros elementos si se superponen. */
}

/* Estilos para la lista principal de la navegación (<ul> dentro de <nav>) */
nav ul {
    list-style-type: none; /* Quita las viñetas de la lista. */
    padding: 0; /* Quita el relleno por defecto de la lista. */
    margin: 0; /* Quita el margen por defecto de la lista (añadido para asegurar reseteo). */
    display: flex; /* ¡IMPORTANTE! Convierte la lista en un contenedor Flexbox. Por defecto, los items se pondrán en fila. */
    /* background-color: #333; Ya está en 'nav', se puede quitar si 'nav' lo cubre bien */
    justify-content: center; /* NUEVO AÑADIDO: Centra los elementos del menú horizontalmente */
}

/* Estilos para cada elemento de la lista (<li>) dentro de la navegación principal */
nav ul li {
    /* margin-right: 20px; Lo quitamos para un centrado perfecto con justify-content, el padding en 'a' dará separación */
    position: relative; /* Necesario para posicionar correctamente el submenú absoluto respecto a este 'li'. */
}

/* Estilos para los enlaces (<a>) dentro de los elementos de la lista de navegación */
nav ul li a {
    text-decoration: none; /* Quita el subrayado de los enlaces. */
    color: white; /* Color del texto del enlace. */
    padding: 15px 20px; /* Relleno para hacer el área clickeable más grande y dar espaciado. (Ajustado) */
    display: block; /* Hace que el enlace ocupe todo el espacio de su 'li' y permite aplicar padding verticalmente. */
}

/* Estilo para los enlaces de navegación cuando el ratón está encima */
nav ul li a:hover {
    background-color: #555; /* Color de fondo más claro al pasar el ratón. */
}

/* Estilos para los submenús (<ul> anidados) */
nav ul ul {
    display: none; /* El submenú está oculto por defecto. */
    position: absolute; /* Se posiciona de forma absoluta respecto a su ancestro 'li' (que tiene position: relative). */
    background-color: #444; /* Un color ligeramente diferente para el submenú (Ajustado) */
    padding: 0; /* Quitar padding que pueda heredar. */
    min-width: 160px; /* Ancho mínimo para que los items no se vean muy apretados. */
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); /* Sombra sutil para dar profundidad. */
}

/* Mostrar el submenú cuando se pasa el ratón sobre el 'li' padre */
nav ul li:hover > ul { /* El selector '>' significa "hijo directo". Se aplica a la 'ul' (submenú) que es hija directa del 'li' sobre el que está el ratón. */
    display: block; /* Cambia el display a 'block' para mostrar el submenú. */
}

/* Estilos para los 'li' del submenú */
nav ul ul li {
    margin-right: 0; /* No necesita margen derecho aquí. */
    width: 100%; /* Para que cada item del submenú ocupe todo el ancho del submenú. */
}

/* Estilos para los enlaces 'a' del submenú */
nav ul ul li a {
    padding: 12px 16px; /* Ajustar padding para los items del submenú. */
    /* No es necesario repetir color: white; o text-decoration: none; si se heredan bien. */
}

/* --- NUEVO: DISEÑO RESPONSIVO BÁSICO con @media queries --- */

/* Por defecto (móviles primero): la navegación será vertical (columna) */
/* Los estilos de nav ul ya tienen display:flex, así que solo cambiamos la dirección y centrado */
nav ul {
    flex-direction: column; /* Apila los elementos del menú verticalmente. */
    align-items: center; /* Centra los elementos verticalmente (si tuvieran alturas diferentes) o si el nav tuviera más altura. */
}

nav ul li {
    margin-bottom: 0; /* No es necesario el margen inferior si los items se apilan y tienen padding. */
    width: 100%; /* Que cada elemento ocupe el ancho completo para mejor toque en móviles */
    text-align: center; /* Centrar el texto dentro de cada 'li' */
}

nav ul ul {
    position: static; /* En móvil, el submenú se muestra debajo, no flotante */
    box-shadow: none; /* Sin sombra en el submenú móvil apilado */
    background-color: #3a3a3a; /* Un poco más claro para diferenciar */
}

/* Cuando el ancho de la pantalla sea 600px o más (tabletas, escritorios pequeños)... */
@media (min-width: 600px) {
    nav ul {
        flex-direction: row; /* ...la navegación vuelve a ser horizontal (fila). */
        justify-content: center; /* Centrar los items horizontalmente */
    }

    nav ul li {
        margin-bottom: 0; /* Quitar el margen inferior que podría haberse quedado. */
        width: auto; /* El ancho vuelve a ser automático según el contenido */
        text-align: left; /* El texto vuelve a alinearse a la izquierda (o como estuviera antes) */
    }

    nav ul ul {
        position: absolute; /* El submenú vuelve a ser flotante */
        background-color: #444;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
}
```

**Novedades y Conceptos Clave en `style.css`:**

*   **Estilos de Navegación:**
    *   `nav`: Se le da una `position: sticky` para que se quede fija en la parte superior después de hacer un poco de scroll. `z-index` la mantiene por encima.
    *   `nav ul`: Se usa `display: flex` para alinear los elementos del menú. `list-style-type: none;` y `padding: 0;` limpian los estilos por defecto de las listas.
    *   `nav ul li a`: `display: block;` y `padding` hacen que los enlaces sean más fáciles de clickear y se vean mejor.
    *   `position: relative;` en `nav ul li` es crucial para que `position: absolute;` en el submenú (`nav ul ul`) funcione correctamente, posicionando el submenú relativo a su `li` padre.
*   **Estilos de Submenú:**
    *   `nav ul ul`: Inicialmente `display: none;` para ocultarlo.
    *   `nav ul li:hover > ul`: Esta es la magia. Cuando el ratón pasa (`:hover`) sobre un `li` de la lista principal, el submenú (`ul`) que es su hijo directo (`>`) se muestra cambiando a `display: block;`.
*   **Diseño Responsivo (`@media` query):**
    *   Se adopta un enfoque "Mobile First" (primero móviles). Los estilos base definen cómo se ve la navegación en pantallas pequeñas (vertical, apilada).
    *   `@media (min-width: 600px)`: Es una "media query". Define estilos que SÓLO se aplican si el ancho de la ventana del navegador es de 600 píxeles o más.
        *   Dentro de esta regla, se cambian los estilos de `nav ul` para que la navegación sea horizontal (`flex-direction: row;`) en pantallas más grandes.
        *   Los submenús también recuperan su comportamiento flotante (`position: absolute;`).

### 3. `js/script.js` (JavaScript)

El archivo JavaScript no ha cambiado en su funcionalidad principal para este ejercicio finalizado. Sigue siendo responsable de la interactividad del botón que cambia el texto.

```javascript
// Este script se ejecuta cuando todo el contenido HTML de la página (el DOM) ha sido completamente cargado y analizado por el navegador.
document.addEventListener('DOMContentLoaded', function () {
    // 1. Encontrar el botón en el HTML usando su 'id'.
    // 'const' declara una variable que no se podrá reasignar.
    const button = document.getElementById('changeTextButton');

    // 2. Añadir un "escuchador de eventos" al botón.
    // Esto significa que el código dentro de la función se ejecutará CADA VEZ que se haga 'clic' en el botón.
    button.addEventListener('click', function () {
        // 3. Cuando se hace clic, encontrar la sección 'intro' usando su 'id'.
        const introSection = document.getElementById('intro');
        // 4. Cambiar el contenido HTML DENTRO de la sección 'intro'.
        // 'innerHTML' permite leer o escribir el HTML que está contenido en un elemento.
        introSection.innerHTML = '<p>El texto ha cambiado después de hacer clic en el botón!</p>';
    });
});
```

**Recordatorio del Funcionamiento del Script:**

1.  **`document.addEventListener('DOMContentLoaded', ...)`**: Es el punto de partida. Asegura que el script no intente manipular elementos HTML que quizás aún no se hayan cargado. Piensa en ello como "espera a que la casa esté construida antes de intentar pintar las paredes".
2.  **`document.getElementById('id_del_elemento')`**: Es la forma más común de seleccionar un elemento HTML específico desde JavaScript. Los `id` deben ser únicos en toda la página.
3.  **`button.addEventListener('click', function() { ... })`**: Establece una vigilancia sobre el botón. Cuando ocurre el evento `click`, la función provista se ejecuta.
4.  **`introSection.innerHTML = '...'`**: Modifica directamente el HTML contenido dentro del elemento `introSection`.

## ¿Cómo ver la página web?

Los pasos son los mismos que antes:

1.  Guarda los tres archivos (`index.html`, `css/style.css`, `js/script.js`) en la estructura de carpetas indicada (`ejercicio1-finalizado/` con `css/` y `js/` dentro).
2.  Abre el archivo `index.html` en tu navegador web preferido (Chrome, Firefox, Edge, etc.). La forma más sencilla es hacer doble clic sobre el archivo `index.html` en tu explorador de archivos.

Ahora deberías ver la página con la barra de navegación funcional, incluyendo el submenú desplegable, y el botón que cambia el texto. Intenta cambiar el tamaño de la ventana de tu navegador para ver cómo la barra de navegación se ajusta (de horizontal a vertical y viceversa) gracias al diseño responsivo básico.

¡Espero que esta guía detallada te sea de mucha utilidad para entender cada parte del proyecto! Es un gran paso adelante desde el primer ejercicio. 