// Proyectos. Para agregar uno nuevo, copiá un bloque.
// Campos opcionales en inglés: title_en, description_en.
const PROJECTS = [
  {
    title: "Portafolio v1",
    title_en: "Portfolio v1",
    description: "Mi primer portafolio, 100% estático y desplegado en GitHub Pages.",
    description_en: "My first portfolio, 100% static and deployed on GitHub Pages.",
    tech: ["HTML", "CSS", "JS"],
    demo: "https://fabianrobertomontesrodriguez6-netizen.github.io/Portafolio",
    repo: "https://github.com/fabianrobertomontesrodriguez6-netizen/Portafolio",
    image: "images/logo.jpg" // <-- Ruta actualizada
  },
  {
    title: "Tienda E-commerce",
    title_en: "E-commerce Store",
    description: "Tienda online con estética urbana moderna: catálogo de productos, carrito y checkout. Construida 100% con HTML, CSS y JavaScript vanilla.",
    description_en: "Online store with modern urban aesthetic: product catalog, shopping cart and checkout. Built 100% with HTML, CSS and vanilla JavaScript.",
    tech: ["HTML", "CSS", "JS"],
    demo: "https://fabianrobertomontesrodriguez6-netizen.github.io/Tienda-Ecommerce/",
    repo: "https://github.com/fabianrobertomontesrodriguez6-netizen/Tienda-Ecommerce",
    image: "images/ecommerce.jpg"
  }
];

// Habilidades. Cada grupo referencia una clave del diccionario de traducciones.
const SKILLS = [
  {
    key: "skills.languages",
    items: ["JavaScript", "TypeScript", "Python", "C++", "HTML5", "CSS3", "SQL"]
  },
  {
    key: "skills.frameworks",
    items: ["React", "Node.js", "Express", "Tailwind CSS"]
  },
  {
    key: "skills.tools",
    items: ["Git", "GitHub", "Vite", "Figma", "Docker"]
  }
];