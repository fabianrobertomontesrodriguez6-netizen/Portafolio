// ===================================================================
//  projects.js
//  -------------------------------------------------------------------
//  Carga los proyectos desde database/projects.json (fetch) y los
//  inyecta directamente como HTML dentro de #projectsGrid en
//  index.html. A partir de ahora, para agregar un proyecto nuevo
//  NO hace falta tocar este archivo: basta con editar projects.json.
// ===================================================================

// Datos cargados desde el JSON. Se rellena tras el fetch.
let PROJECTS = [];

// Ruta del JSON (relativa a index.html, que está en la raíz del repo).
const PROJECTS_JSON_URL = "database/projects.json";

// -------------------------------------------------------------------
//  renderProjects: inyecta las tarjetas de proyecto en #projectsGrid.
//  Usa `currentLang` y `t()` que viven en script.js (globals).
// -------------------------------------------------------------------
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  // Si los datos aún no cargaron, no pinta nada (se re-renderiza al
  // terminar el fetch). Si quieres mostrar un loader, puedes
  // descomentar la línea de abajo.
  // if (PROJECTS.length === 0) grid.innerHTML = "<p class='card__desc'>Cargando proyectos…</p>";

  grid.innerHTML = PROJECTS.map((p) => {
    const title = currentLang === "en" && p.title_en ? p.title_en : p.title;
    const desc  = currentLang === "en" && p.description_en ? p.description_en : p.description;
    return `
      <article class="card reveal">
        <div class="card__img-wrap">
          <img class="card__img" src="${p.image}" alt="${title}" loading="lazy" />
        </div>
        <div class="card__body">
          <h3 class="card__title">${title}</h3>
          <p class="card__desc">${desc}</p>
          <ul class="card__tags">
            ${p.tech.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
          <div class="card__links">
            ${p.demo && String(p.demo).trim() !== "" ? `<a href="${p.demo}" target="_blank" rel="noopener" class="card__link">${t("projects.demo")} ↗</a>` : ""}
            ${p.repo && String(p.repo).trim() !== "" ? `<a href="${p.repo}" target="_blank" rel="noopener" class="card__link">${t("projects.code")} ↗</a>` : ""}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// -------------------------------------------------------------------
//  loadProjects: lee projects.json, popula PROJECTS y dispara el
//  render. Se ejecuta solo una vez al cargar la página.
// -------------------------------------------------------------------
async function loadProjects() {
  try {
    const res = await fetch(PROJECTS_JSON_URL, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status} al cargar projects.json`);
    const data = await res.json();

    // Acepta tanto un array directo como un objeto { projects: [...] }
    PROJECTS = Array.isArray(data) ? data : (data.projects || []);

    // Inyecta el HTML en index.html
    renderProjects();

    // Re-inicia el observer de reveal para animar las tarjetas nuevas
    if (typeof initReveal === "function") initReveal();
  } catch (err) {
    console.error("[projects.js] No se pudieron cargar los proyectos:", err);
    const grid = document.getElementById("projectsGrid");
    if (grid) {
      grid.innerHTML =
        "<p class='card__desc'>No se pudieron cargar los proyectos. " +
        "Verifica que database/projects.json exista y sea válido.</p>";
    }
  }
}

// -------------------------------------------------------------------
//  Arranque: dispara la carga cuando el DOM esté listo.
// -------------------------------------------------------------------
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadProjects);
} else {
  loadProjects();
}
