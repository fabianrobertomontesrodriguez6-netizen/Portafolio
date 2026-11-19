// ===== 1. Año dinámico en el footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== 2. Renderizar proyectos =====
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p) => `
    <article class="card reveal">
      <div class="card__img-wrap">
        <img class="card__img" src="${p.image}" alt="Captura del proyecto ${p.title}" loading="lazy" />
      </div>
      <div class="card__body">
        <h3 class="card__title">${p.title}</h3>
        <p class="card__desc">${p.description}</p>
        <ul class="card__tags">
          ${p.tech.map((t) => `<li>${t}</li>`).join("")}
        </ul>
        <div class="card__links">
          <a href="${p.demo}" target="_blank" rel="noopener" class="card__link">Demo ↗</a>
          <a href="${p.repo}" target="_blank" rel="noopener" class="card__link">Código ↗</a>
        </div>
      </div>
    </article>
  `).join("");
}

// ===== 3. Renderizar habilidades =====
function renderSkills() {
  const list = document.getElementById("skillsList");
  if (!list) return;

  list.innerHTML = Object.entries(SKILLS).map(([category, items]) => `
    <li class="skill-group">
      <h3 class="skill-group__title">${category}</h3>
      <ul class="skill-group__list">
        ${items.map((s) => `<li class="chip">${s}</li>`).join("")}
      </ul>
    </li>
  `).join("");
}

// ===== 4. Tema claro/oscuro con persistencia =====
function initTheme() {
  const btn = document.getElementById("themeToggle");
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");

  if (saved) root.setAttribute("data-theme", saved);
  updateThemeButton();

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeButton();
  });

  function updateThemeButton() {
    const isDark = root.getAttribute("data-theme") === "dark";
    btn.textContent = isDark ? "☀️" : "🌙";
    btn.setAttribute("aria-label", isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
  }
}

// ===== 5. Menú mobile =====
function initMenu() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });

  // Cerrar al hacer click en un link
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== 6. Animaciones al scroll =====
function initReveal() {
  const els = document.querySelectorAll(".reveal");
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

// ===== 7. Scroll-spy: link activo según sección visible =====
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

// ===== Init =====
renderProjects();
renderSkills();
initTheme();
initMenu();
initReveal();
initScrollSpy();