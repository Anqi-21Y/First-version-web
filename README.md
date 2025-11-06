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

##Media Queries
##Estrategia: Desktop First

El diseño original fue creado para pantallas de ordenador, por lo que se aplicó la estrategia Desktop First.
Desde los estilos base de escritorio, se añadieron Media Queries para adaptar la página a tabletas y móviles.

<meta name="viewport" content="width=device-width, initial-scale=1.0">


Breakpoints utilizados:

Móviles: hasta 480px → @media (max-width: 480px)

Tabletas: 481px – 768px → @media (max-width: 768px)

Escritorio: 769px en adelante → estilos base

##Menú hamburguesa

En pantallas pequeñas se implementó un menú tipo hamburguesa que permite mostrar y ocultar la navegación.
Basado en el ejemplo de W3Schools.

##Estrategias adaptativas aplicadas

Reorganización del layout: elementos en columna en móvil y en fila en escritorio.

Tipografía fluida: textos que se adaptan al ancho de la pantalla.

Ocultación de elementos secundarios: se ocultan partes no esenciales en pantallas pequeñas.
