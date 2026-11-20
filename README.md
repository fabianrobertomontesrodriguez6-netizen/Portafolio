# Portafolio Personal - Fabian Roberto Montes Rodriguez

Bienvenido a mi portafolio profesional como **Desarrollador Full Stack & Especialista en IA**. Este sitio web fue diseñado para mostrar mis servicios, proyectos destacados, habilidades técnicas y facilitar el contacto con potenciales clientes o empleadores.

🌐 **Demo en vivo:** [https://fabianrobertomontesrodriguez6-netizen.github.io/Portafolio](https://fabianrobertomontesrodriguez6-netizen.github.io/Portafolio)

---

## ✨ Características Principales

- **Diseño Minimalista y Moderno:** Paleta de colores en blanco y negro (con acentos neón) para un look contemporáneo y profesional.
- **Modo Claro / Oscuro:** Sistema de temas que guarda la preferencia del usuario en el `localStorage` del navegador.
- **Internacionalización (i18n):** Traductor nativo a Inglés y Español, también con persistencia en el navegador.
- **Fondo de Circuito Animado:** Animación SVG nativa que simula una placa madre (motherboard) con pulsos neón viajando por las pistas.
- **Diseño 100% Responsive:** Adaptable a dispositivos móviles, tablets y monitores de escritorio.
- **Efectos Visuales CSS:** Uso avanzado de `mask-image`, `mix-blend-mode` y `backdrop-filter` (efecto Iris en la foto de perfil y difuminado en el banner de contacto).
- **Renderizado Dinámico:** Los proyectos y habilidades se cargan y actualizan mediante JavaScript desde un archivo de datos independiente.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica y accesible.
- **CSS3:** Uso de Variables (Custom Properties), Flexbox, CSS Grid, animaciones complejas, y filtros.
- **JavaScript (Vanilla ES6+):** Lógica del tema oscuro, sistema de traducción, inyección de plantillas HTML e Intersection Observer (para animaciones al hacer scroll).
- **SVG Animado:** Para el fondo de circuito (`<animateMotion>`).
- **FontAwesome:** Iconografía del sitio.
- **Google Fonts:** Tipografía *Space Grotesk*.

---

## 📂 Estructura del Proyecto

```text
Portafolio/
│
├── index.html            # Documento principal
├── README.md             # Documentación del proyecto
│
├── images/               # Recursos gráficos
│   ├── profile.jpg       # Foto de perfil (Hero)
│   ├── logo.jpg          # Logo del proyecto (Tarjeta de proyecto)
│   └── banner.jpg        # Banner tecnológico (Fondo de contacto)
│
└── statics/              # Archivos estáticos
    ├── projects.js       # Datos de proyectos y habilidades (fácil de editar)
    ├── script.js         # Lógica principal (Temas, idioma, scroll)
    └── styles.css        # Estilos y diseño global