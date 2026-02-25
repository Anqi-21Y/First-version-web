# Landing Page MeowWoof

## Introducción / About
Esta landing page fue creada para la Práctica 4 – Diseño Adaptativo y Frameworks CSS.  
El objetivo es dar visibilidad a gatos y perros sin hogar y fomentar la adopción y el voluntariado.

La página contiene:
- Hero Section: muestra el mensaje principal de bienvenida y la filosofía de MeowWoof
- About Us: información sobre la misión y objetivos de MeowWoof
- Adoption Stories: historias de transformación antes y después de la adopción
- Call to Action: botones para visitar la página de adopción o ser voluntario

---
## Tecnologías / Technologies
- HTML5
- CSS（flexbox）
- Diseño responsive (adaptativo a diferentes dispositivos)

---
## Versiones de la página / Page Versions
El repositorio contiene tres implementaciones independientes, cada una en su propia rama:

| Rama | Tecnología | Descripción |
|------|------------|------------|
| `version-flex` | Flexbox | Layout con CSS Flexbox puro |
| `version-grid` | Grid | Layout con CSS Grid |
| `version-bootstrap` | Bootstrap | Layout con Bootstrap (versión final que se muestra) |

---
## Vista previa / Preview
La versión que se muestra finalmente es la **versión flex**.

[Haz clic aquí para ver GitHub Pages]（https://anqi-21y.github.io/First-version-web/)

> Nota: el Header y Footer se incluyen mediante iframe.

---
## Características / Features
- Layout adaptativo, funciona en móvil, tablet y escritorio
- Las tarjetas (cards) usan flexbox Cards y se ajustan automáticamente
- Botones y colores personalizados según el estilo de la página
- Header y Footer originales preservados

---


...Cambiar a la rama de la versión deseada:

git checkout version-bootstrap
git checkout version-flex
git checkout version-grid

## Media Queries
## Estrategia: Desktop First

El diseño original fue creado para pantallas de ordenador, por lo que se aplicó la estrategia Desktop First.
Desde los estilos base de escritorio, se añadieron Media Queries para adaptar la página a tabletas y móviles.

<meta name="viewport" content="width=device-width, initial-scale=1.0">


Breakpoints utilizados:

Móviles: hasta 480px → @media (max-width: 480px)

Tabletas: 481px – 768px → @media (max-width: 768px)

Escritorio: 769px en adelante → estilos base

## Menú hamburguesa

En pantallas pequeñas se implementó un menú tipo hamburguesa que permite mostrar y ocultar la navegación.
Basado en el ejemplo de W3Schools.

## Estrategias adaptativas aplicadas

Reorganización del layout: elementos en columna en móvil y en fila en escritorio.

Tipografía fluida: textos que se adaptan al ancho de la pantalla.

Ocultación de elementos secundarios: se ocultan partes no esenciales en pantallas pequeñas.

## Práctica 11 – Integración de jQuery Objetivo

En esta práctica se ha integrado jQuery y jQuery UI en la landing page de MeowWoof con el objetivo de añadir interactividad real sin modificar la estructura base del proyecto.

Todo el código JavaScript ha sido implementado en un fichero separado:

/js/jquery.js

No se ha utilizado JavaScript inline en el HTML.

##Misión 1 – Selección de Elementos

Se han aplicado cambios visuales automáticos al cargar la página utilizando distintos tipos de selectores jQuery:

Selector por etiqueta: $("h2")

Selector por clase: $(".pet_card")

Selector por ID: $("#headerFrame")

Selector avanzado: $(".pet_card:even")

Estos cambios permiten diferenciar visualmente ciertos elementos y demostrar el dominio de la selección del DOM.

## Misión 2 – Adición y Supresión del DOM

Se ha implementado una funcionalidad dinámica en la sección Adoption Stories.

Funcionalidades:

El usuario puede añadir nuevas historias haciendo clic en el botón "Add Story".

Las nuevas historias se insertan dinámicamente con .append().

Se utiliza .fadeIn() para integrar la animación de aparición.

Cada historia incluye un botón "Delete Story".

Se utiliza .remove() para eliminar historias del DOM.

Evento delegado (Bonus)

La eliminación se gestiona mediante evento delegado:

$(".stories_container").on("click", ".deleteStory", function(){ ... });

Esto garantiza que los botones creados dinámicamente funcionen correctamente.

## Misión 3 – Gestión de Eventos

Se han implementado tres tipos distintos de eventos:

Evento de ratón

dblclick sobre la imagen de cada mascota.

Muestra un mensaje indicando el nombre del animal.

Evento de teclado

keypress detectando la tecla "F".

Muestra un mensaje informativo en pantalla.

Evento multimedia

play sobre el vídeo.

Modifica dinámicamente el texto de la sección.

Todos los eventos generan feedback visible en la interfaz.

## Misión 4 – Animaciones y Transiciones

Se han integrado animaciones coherentes con el diseño de la web:

.fadeIn() al añadir nuevas historias.

.fadeTo() al interactuar con los botones de adopción.

.slideToggle() al hacer clic en la sección "About Us".

.animate() en el Hero para modificar:

font-size

letter-spacing

Las animaciones están integradas estéticamente y no interfieren con la usabilidad.

## Misión 5 – Integración de jQuery UI

Se ha incluido correctamente jQuery UI mediante CDN (script + CSS).

Se han implementado dos funcionalidades:

Tooltip

Se activa automáticamente en elementos con atributo title.

Dialog

Al hacer clic en el título de la sección de adopción, se abre un cuadro de diálogo modal informativo.

Esto mejora la experiencia de usuario sin alterar la estructura del diseño original.

Justificación Técnica

Se mantiene separación clara entre estructura (HTML), estilos (CSS) y comportamiento (jQuery).

No se utiliza JavaScript inline.

Se emplean selectores variados para demostrar dominio del DOM.

Las animaciones y eventos tienen sentido dentro del contexto de adopción y voluntariado.

## Resultado

La página ahora no solo es adaptativa y visualmente coherente, sino también interactiva y dinámica, mejorando la experiencia del usuario y cumpliendo los requisitos de la Unidad 4.
