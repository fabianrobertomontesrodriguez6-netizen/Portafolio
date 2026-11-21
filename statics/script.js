// ===== Estado global =====
let currentLang = localStorage.getItem("lang") || "es";

// Año dinámico
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Diccionario de traducciones =====
const TRANSLATIONS = {
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "nav.menuOpen": "Abrir menú",
    "theme.dark": "Cambiar a tema oscuro",
    "theme.light": "Cambiar a tema claro",
    "lang.switch": "Cambiar idioma",
    "hero.badge": "Disponible para nuevos proyectos",
    "hero.greeting": "Hola, soy",
    "hero.role": "Desarrollador Web Frontend · Desarrollador de IA y Bots",
    "hero.text": "Construyo interfaces rápidas, accesibles y con buen diseño, además de soluciones de IA y bots para automatizar tareas. Trabajo con JavaScript, React, Python y C++.",
    "hero.viewProjects": "Ver proyectos",
    "hero.contactMe": "Contáctame",
    "services.title": "Soluciones Digitales",
    "services.subtitle": "Full Stack Web & IA Personalizada",
    "services.s1.title": "Desarrollo Web Full Stack",
    "services.s1.desc": "Frontend y Backend a medida.",
    "services.s2.title": "Plataformas E-commerce y Landing Pages",
    "services.s2.desc": "Tiendas online y páginas de aterrizaje.",
    "services.s3.title": "Desarrollo de Agentes de IA y Automatización",
    "services.s3.desc": "Automatiza flujos de trabajo inteligentes.",
    "services.s4.title": "Creación de Bots Personalizados",
    "services.s4.desc": "Asistentes virtuales a tu medida.",
    "services.s5.title": "Creación de Bots Personalizados para Negocios",
    "services.s5.desc": "Atención al cliente y ventas automatizadas.",
    "services.s6.title": "Integración de APIs y Bases de Datos",
    "services.s6.desc": "Conectamos tus servicios y almacenamiento.",
    "services.s7.title": "Optimización de Rendimiento y UX/UI",
    "services.s7.desc": "Velocidad y experiencia de usuario superior.",
    "services.s8.title": "Soluciones Digitales Integrales",
    "services.s8.desc": "Ecosistemas completos para tu negocio.",
    "projects.title": "Proyectos",
    "projects.demo": "Demo",
    "projects.code": "Código",
    "skills.title": "Habilidades",
    "skills.languages": "Lenguajes",
    "skills.frameworks": "Frameworks y librerías",
    "skills.tools": "Herramientas",
    "contact.title": "Contacto",
    "contact.text": "¿Tienes un proyecto en mente o quieres saludar? Escríbeme.",
    "contact.whatsapp": "WhatsApp",
    "footer.text": "Hecho con JS y ☕"
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.menuOpen": "Open menu",
    "theme.dark": "Switch to dark theme",
    "theme.light": "Switch to light theme",
    "lang.switch": "Switch language",
    "hero.badge": "Available for new projects",
    "hero.greeting": "Hi, I'm",
    "hero.role": "Frontend Web Developer · AI & Bot Developer",
    "hero.text": "I build fast, accessible interfaces with great design, plus AI and bot solutions to automate tasks. I work with JavaScript, React, Python and C++.",
    "hero.viewProjects": "View projects",
    "hero.contactMe": "Contact me",
    "services.title": "Digital Solutions",
    "services.subtitle": "Full Stack Web & Custom AI",
    "services.s1.title": "Full Stack Web Development",
    "services.s1.desc": "Custom Frontend and Backend.",
    "services.s2.title": "E-commerce Platforms & Landing Pages",
    "services.s2.desc": "Online stores and landing pages.",
    "services.s3.title": "AI Agents & Automation Development",
    "services.s3.desc": "Automate smart workflows.",
    "services.s4.title": "Custom Bots Creation",
    "services.s4.desc": "Tailor-made virtual assistants.",
    "services.s5.title": "Custom Bots for Businesses",
    "services.s5.desc": "Automated customer service and sales.",
    "services.s6.title": "API & Database Integration",
    "services.s6.desc": "Connecting your services and storage.",
    "services.s7.title": "Performance & UX/UI Optimization",
    "services.s7.desc": "Superior speed and user experience.",
    "services.s8.title": "Comprehensive Digital Solutions",
    "services.s8.desc": "Complete ecosystems for your business.",
    "projects.title": "Projects",
    "projects.demo": "Demo",
    "projects.code": "Code",
    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks & Libraries",
    "skills.tools": "Tools",
    "contact.title": "Contact",
    "contact.text": "Got a project in mind or just want to say hi? Drop me a line.",
    "contact.whatsapp": "WhatsApp",
    "footer.text": "Made with JS and ☕"
  }
};

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
      ?? TRANSLATIONS.es[key]
      ?? key;
}

// ===== Aplicar traducciones a nodos estáticos =====
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  document.getElementById("navToggle").setAttribute("aria-label", t("nav.menuOpen"));
  updateThemeLabel();

  const langBtn = document.getElementById("langToggle");
  langBtn.textContent = currentLang.toUpperCase();
  langBtn.setAttribute("aria-label", t("lang.switch"));

  document.documentElement.lang = currentLang;
}

// ===== Renderizar proyectos =====
// Nota: renderProjects() ahora vive en statics/projects.js y lee los
// datos desde statics/projects.json. Desde aquí solo la llamamos
// (init() y el cambio de idioma la invocan).
// ===== Renderizar habilidades =====
function renderSkills() {
  const list = document.getElementById("skillsList");
  if (!list) return;

  list.innerHTML = SKILLS.map((group) => `
    <li class="skill-group">
      <h3 class="skill-group__title">${t(group.key)}</h3>
      <ul class="skill-group__list">
        ${group.items.map((s) => `<li class="chip">${s}</li>`).join("")}
      </ul>
    </li>
  `).join("");
}

// ===== Tema =====
function initTheme() {
  const btn = document.getElementById("themeToggle");
  const root = document.documentElement;
  updateThemeLabel();

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeLabel();
  });
}

function updateThemeLabel() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  btn.textContent = isDark ? "☀️" : "🌙";
  btn.setAttribute("aria-label", t(isDark ? "theme.light" : "theme.dark"));
}

// ===== Menú mobile =====
function initMenu() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== Reveal al scroll =====
function initReveal() {
  const els = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach((el) => io.observe(el));
}

// ===== Scroll spy =====
function initScrollSpy() {
  const links = [...document.querySelectorAll(".nav__menu a[href^='#']")];
  const sections = links
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.remove("active"));
        const active = links.find((l) => l.getAttribute("href") === `#${entry.target.id}`);
        if (active) active.classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach((s) => io.observe(s));
}

// ===== Cambio de idioma =====
function initLangToggle() {
  document.getElementById("langToggle").addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    localStorage.setItem("lang", currentLang);
    applyTranslations();
    renderProjects();
    renderSkills();
    initReveal();
  });
}

// ===== Init =====
function init() {
  applyTranslations();
  renderProjects();
  renderSkills();
  initTheme();
  initMenu();
  initLangToggle();
  initReveal();
  initScrollSpy();
}

init();