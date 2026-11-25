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
  - Se redujo el desenfoque a `4px` y se aumentó la opacidad a `0.6` en claro y `0.75` en oscuro.
  - Se añadió `text-shadow` a los textos de la sección para mantener legibilidad.
- [x] **9.** Botón "Demo" condicional en las tarjetas de proyecto.
- [x] **10.** **Reorganización de carpetas:** JSON movidos a `database/`, JS/CSS en `statics/`, HTML en la raíz.
- [x] **11.** **Recomendaciones LinkedIn + Contactos dinámicos** (ver actualización al final).

## Pendientes
- (Ninguno por ahora, ¡todo listo!)

---

## Actualización: PHP, Laravel y Symfony en el stack

### Qué se añadió
- PHP, Laravel y Symfony se incorporaron a la lista visual `stack` de la sección
  de habilidades.
- Se corrigió el nombre «Sinfony» por «Symfony» en el grupo de frameworks.
- Los iconos continúan administrándose desde `database/skills.json`.

### Archivos modificados
- `database/skills.json` → nuevos iconos y corrección de nomenclatura.

## Actualización: Habilidades dinámicas desde JSON

### Qué se añadió
- Nuevo archivo `database/skills.json` con:
  - Grupos de habilidades con títulos en español e inglés.
  - Lista de tecnologías por grupo.
  - Iconos destacados del stack tecnológico.
- Nuevo cargador `statics/skills.js`, siguiendo el mismo patrón que proyectos,
  recomendaciones y contactos.
- Contenedores dinámicos `#skillsList` y `#techStack` en `index.html`.
- Mensajes de contenido vacío y error al cargar.

### Cómo actualizar
Editar únicamente `database/skills.json`:
- Agrega o elimina objetos dentro de `groups`.
- Cambia `title_es`, `title_en` e `items`.
- Agrega o elimina iconos dentro de `stack`.
- Usa clases válidas de Font Awesome en `icon`.

No hace falta editar el HTML ni las funciones de JavaScript para cambiar
habilidades, nombres o iconos.

### Archivos modificados
- `database/skills.json` → datos editables.
- `statics/skills.js` → carga y renderizado.
- `statics/script.js` → traducciones de estado vacío/error.
- `index.html` → contenedor dinámico del stack.
- `README.md` → formato y procedimiento de actualización.

## Actualización: Fondo de circuito motherboard con puntos neón

### Qué se añadió
- Fondo fijo (`position: fixed`) detrás del contenido principal con un SVG que dibuja **12 pistas estilo motherboard**.
- Cada pista tiene **un punto azul neón** que la recorre de punta a punta de forma indefinida.
- Direcciones alternadas y duraciones entre **5s y 8s** según la pista.
- Cada pista tiene pequeños **nodos/pads** en sus extremos.

### Implementación técnica
- **SVG inline en `index.html`**: 12 `<path>` + 12 `<circle class="neon-dot">` con `<animateMotion>` + `<mpath>`.
- **Filtro SVG `neonGlow` / `neonGlowSoft`**: `feGaussianBlur` + `feMerge`.
- **Variables CSS nuevas**: `--circuit-line`, `--circuit-node`, `--neon`, `--neon-soft`, `--circuit-opacity`.
- **Accesibilidad**: `aria-hidden="true"` + `prefers-reduced-motion`.

### Archivos modificados
- `index.html` → SVG del circuito.
- `statics/styles.css` → variables + bloque `.circuit-bg`.

---

## Actualización: Nuevo proyecto "Tienda E-commerce"

### Qué se añadió
- Nueva entrada en `database/projects.json` con: título, descripción, tech, demo, repo e imagen.

### Archivos modificados
- `database/projects.json` → nuevo objeto al final del array.
- `images/ecommerce.jpg` → nueva thumbnail.

---

## Actualización: Botón "Demo" condicional según projects.json

### Qué se añadió
- En `renderProjects()` de `statics/projects.js` se envolvió el `<a>` del botón "Demo" en una condicional:
  - Solo se renderiza si el proyecto tiene `demo` y no es cadena vacía.
  - Misma validación aplicada al botón "Código" (`repo`).

### Archivos modificados
- `statics/projects.js` → condicional en el render de los botones.

---

## Actualización: Reorganización a `database/` + Recomendaciones LinkedIn + Contactos dinámicos

### 1. Reorganización de carpetas

Todos los archivos de **datos** (`.json`) se movieron a `database/`. Los archivos de **lógica** (`.js`, `.css`) se quedan en `statics/`.
