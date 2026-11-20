# Guía del portafolio

## Tareas Realizadas

- [x] **1.** Cambiar la paleta de colores (claro/oscuro) a una gama blanco y negro minimalista contemporánea.
- [x] **2.** Agregar traductor a inglés.
- [x] **3.** Eliminar el botón "Descargar CV".
- [x] **4.** Integración de imágenes:
  - Se agregó la Imagen 2 (retrato) al Hero con máscara CSS y `mix-blend-mode` para que se funda con el fondo.
  - Se actualizó la sección "Servicios" transcribiendo **uno por uno** los 8 puntos de la Imagen 1.
  - Se agregaron iconos de tecnologías (React, Node, Python, OpenAI) en la sección de habilidades.
- [x] **5.** Actualización de contacto:
  - Número de WhatsApp actualizado a `https://wa.me/+5352483821`.
  - Se ocultaron temporalmente los enlaces de Email, GitHub y LinkedIn.
- [x] **6.** Ajustes visuales finales:
  - La imagen de Portafolio v1 ahora usa `images/logo.jpg`.
- [x] **7.** Ajustes solicitados en Pendientes:
  - Se aumentó el tamaño de la imagen de perfil (`profile.jpg`) de `450px` a `550px` (y a `400px` en móviles).
  - Se amplió el gradiente de la máscara (`radial-gradient(ellipse at center, black 45%, transparent 80%)`) para darle más aire al rostro.
- [x] **8.** Ajuste de visibilidad del banner en Contacto:
  - Se redujo el desenfoque a `4px` (solo un poco) y se aumentó la opacidad a `0.6` en claro y `0.75` en oscuro.
  - Se añadió `text-shadow` a los textos de la sección para mantener una legibilidad perfecta sobre el fondo.

## Pendientes
- (Ninguno por ahora, ¡todo listo!)

---

## Actualización: Fondo de circuito motherboard con puntos neón

### Qué se añadió
- Fondo fijo (`position: fixed`) detrás del contenido principal con un SVG que dibuja **12 pistas estilo motherboard**: líneas rectas con esquinas a 90°, distribuidas por toda la pantalla (horizontales, verticales y zigzag).
- Cada pista tiene **un punto azul neón** que la recorre de punta a punta de forma indefinida.
- Direcciones alternadas: las pistas impares van en un sentido (izq→der / arriba→abajo) y las pares en sentido contrario (der→izq / abajo→arriba), usando `keyPoints="1;0"`.
- Velocidad media: duraciones entre **5s y 8s** según la pista.
- Cada pista tiene pequeños **nodos/pads** en sus extremos para reforzar el look PCB.

### Implementación técnica
- **SVG inline en `index.html`**: 12 `<path>` con `id` único + 12 `<circle class="neon-dot">` animados con `<animateMotion>` + `<mpath>` (estándar SVG, sin JS ni librerías).
- **Filtro SVG `neonGlow` / `neonGlowSoft`**: `feGaussianBlur` + `feMerge` para el halo del neón. Además `drop-shadow` en CSS como refuerzo.
- **Variables CSS nuevas** en `:root` y `[data-theme="dark"]`:
  - `--circuit-line`: color de las pistas.
  - `--circuit-node`: color de los pads.
  - `--neon` / `--neon-soft`: tonos del azul neón.
  - `--circuit-opacity`: visibilidad global del fondo (0.55 claro / 0.85 oscuro).
- **Capas z-index**: `.circuit-bg` z-index 0, `main` y `.footer` con `position: relative; z-index: 1`, `.nav` sigue en z-index 50.
- **Accesibilidad**: `aria-hidden="true"` en el SVG; `prefers-reduced-motion` detiene los puntos y reduce la opacidad.

### Archivos modificados
- `index.html` → SVG del circuito justo después de `<body>`.
- `statics/styles.css` → variables en `:root` y `[data-theme="dark"]`, `position: relative` en `main` y `.footer`, bloque nuevo `.circuit-bg` al final.

---

## Actualización: Nuevo proyecto "Tienda E-commerce"

### Qué se añadió
- Nueva entrada en el array `PROJECTS` de `statics/projects.js` con:
  - **Título**: "Tienda E-commerce" (EN: "E-commerce Store")
  - **Descripción**: Tienda online con estética urbana moderna (catálogo, carrito y checkout), construida con HTML, CSS y JS vanilla.
  - **Tech**: `["HTML", "CSS", "JS"]`
  - **Demo**: https://fabianrobertomontesrodriguez6-netizen.github.io/Tienda-Ecommerce/
  - **Código**: https://github.com/fabianrobertomontesrodriguez6-netizen/Tienda-Ecommerce
  - **Imagen**: `images/ecommerce.jpg` (thumbnail generada, 1344x768)
- La card se renderiza automáticamente gracias al `renderProjects()` existente en `script.js`, sin necesidad de tocar el HTML.

### Archivos modificados
- `statics/projects.js` → agregada entrada del nuevo proyecto al final del array `PROJECTS`.
- `images/ecommerce.jpg` → nueva thumbnail generada (estilo urbano moderno, dark mode con acentos amarillos/blancos).
- `guia.md` → esta nota.