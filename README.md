
# Portafolio Personal - Fabian Roberto Montes Rodriguez

Bienvenido a mi portafolio profesional como **Desarrollador Full Stack & Especialista en IA**. Este sitio web fue diseñado para mostrar mis servicios, proyectos destacados, recomendaciones de LinkedIn, habilidades técnicas y facilitar el contacto con potenciales clientes o empleadores.

🌐 **Demo en vivo:** [https://fabianrobertomontesrodriguez6-netizen.github.io/Portafolio](https://fabianrobertomontesrodriguez6-netizen.github.io/Portafolio)

---

## ✨ Características Principales

- **Diseño Minimalista y Moderno:** Paleta de colores en blanco y negro (con acentos neón) para un look contemporáneo y profesional.
- **Modo Claro / Oscuro:** Sistema de temas que guarda la preferencia del usuario en el `localStorage` del navegador.
- **Internacionalización (i18n):** Traductor nativo a Inglés y Español, también con persistencia en el navegador.
- **Fondo de Circuito Animado:** Animación SVG nativa que simula una placa madre (motherboard) con pulsos neón viajando por las pistas.
- **Diseño 100% Responsive:** Adaptable a dispositivos móviles, tablets y monitores de escritorio.
- **Efectos Visuales CSS:** Uso avanzado de `mask-image`, `mix-blend-mode` y `backdrop-filter` (efecto Iris en la foto de perfil y difuminado en el banner de contacto).
- **Renderizado Dinámico desde JSON:** Los proyectos, las habilidades, las recomendaciones y los datos de contacto se cargan desde `database/*.json` mediante `fetch`. **Para actualizar el contenido no necesitas tocar el HTML.**
- **Recomendaciones LinkedIn:** Sección dedicada que embebe publicaciones públicas de LinkedIn mediante iframes oficiales, con enlace de respaldo para cada post.
- **Contactos Dinámicos:** Tarjetas de WhatsApp, Email, GitHub y LinkedIn generadas a partir de `database/contacts.json`. Añadir o quitar un canal es solo editar el JSON.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica y accesible.
- **CSS3:** Uso de Variables (Custom Properties), Flexbox, CSS Grid, animaciones complejas y filtros.
- **JavaScript (Vanilla ES6+):** Lógica del tema oscuro, sistema de traducción, `fetch` de JSON, inyección de plantillas HTML e Intersection Observer.
- **SVG Animado:** Para el fondo de circuito (`<animateMotion>`).
- **FontAwesome:** Iconografía del sitio (incluye iconos de marca para contactos).
- **Google Fonts:** Tipografía *Space Grotesk*.

---

## 📂 Estructura del Proyecto

```text
Portafolio/
│
├── index.html            # Documento principal
├── README.md             # Documentación del proyecto
├── guia.md               # Bitácora de cambios y tareas realizadas
│
├── images/               # Recursos gráficos
│   ├── profile.jpg       # Foto de perfil (Hero)
│   ├── logo.jpg          # Logo del proyecto (Tarjeta de proyecto)
│   ├── banner.jpg        # Banner tecnológico (Fondo de contacto)
│   ├── ecommerce.jpg     # Thumbnail del proyecto E-commerce
│   ├── dashboard_clima.png
│   ├── concecionario.png
│   └── UCM.png
│
├── database/             # SOLO DATOS (JSON) — editable sin tocar HTML
│   ├── projects.json     # Proyectos del portafolio
│   ├── skills.json       # Grupos e iconos de habilidades
│   ├── testimonials.json # Recomendaciones de LinkedIn
│   └── contacts.json     # Métodos de contacto (WhatsApp, Email, GitHub, LinkedIn…)
│
└── statics/              # Lógica y estilos
    ├── projects.js       # Renderiza proyectos desde database/projects.json
    ├── skills.js         # Renderiza habilidades desde database/skills.json
    ├── testimonials.js   # Renderiza recomendaciones desde database/testimonials.json
    ├── contacts.js       # Renderiza contactos desde database/contacts.json
    ├── script.js         # Lógica principal (temas, idioma, scroll)
    └── styles.css        # Estilos y diseño global
```

## Actualizar las habilidades

Edita solamente [`database/skills.json`](database/skills.json). El sitio actualiza
automáticamente los grupos y los iconos al recargar la página.

### Formato del archivo

```json
{
  "groups": [
    {
      "title_es": "Lenguajes",
      "title_en": "Languages",
      "items": ["JavaScript", "Python", "SQL"]
    }
  ],
  "stack": [
    {
      "icon": "fa-brands fa-python",
      "label": "Python"
    }
  ]
}
```

- `groups`: categorías que aparecen como columnas de habilidades.
- `title_es` y `title_en`: título de cada categoría según el idioma seleccionado.
- `items`: nombres visibles dentro de la categoría.
- `stack`: iconos destacados debajo de las categorías.
- `icon`: clase de icono compatible con Font Awesome.
- `label`: texto alternativo y etiqueta del icono.

Ejemplo para añadir una categoría nueva:

```json
{
  "title_es": "Bases de datos",
  "title_en": "Databases",
  "items": ["SQLite", "MySQL", "PostgreSQL"]
}
```

Agrega el objeto dentro del arreglo `groups` de `database/skills.json`.
No es necesario modificar `index.html`, `script.js` ni `skills.js`.

## Ejecución local

Los archivos JSON se cargan mediante `fetch`, por lo que conviene servir el
proyecto con un servidor local en lugar de abrir `index.html` directamente:

```bash
python3 -m http.server 8080
```

Después abre `http://localhost:8080`.