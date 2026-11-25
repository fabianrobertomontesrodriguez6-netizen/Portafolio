// ===================================================================
//  testimonials.js
//  -------------------------------------------------------------------
//  Carga las recomendaciones de LinkedIn desde database/testimonials.json
//  y las inyecta como iframes dentro de #testimonialsList en index.html.
//  Para agregar/quitar una recomendación, edita SOLO el JSON.
// ===================================================================

// null = aún no cargado | [] = cargado pero vacío | [...] = con datos
let TESTIMONIALS = null;

const TESTIMONIALS_JSON_URL = "database/testimonials.json";

// ---------- helpers ----------
function escapeHtml(str) {
  return String(str ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

// ---------- render ----------
function renderTestimonials() {
  const container = document.getElementById("testimonialsList");
  if (!container) return;
  if (TESTIMONIALS === null) return; // aún no ha cargado, no pintar nada

  if (TESTIMONIALS.length === 0) {
    container.innerHTML = `<p class="empty-msg">${escapeHtml(t("testimonials.empty"))}</p>`;
    return;
  }

  container.innerHTML = TESTIMONIALS.map((item) => {
    const role = currentLang === "en" && item.role_en ? item.role_en : (item.role_es || "");
    const height = Number(item.height) > 0 ? Number(item.height) : 400;
    return `
      <article class="testimonial-card">
        <header class="testimonial-header">
          <strong>${escapeHtml(item.author || "Recomendación")}</strong>
          ${role ? `<span>${escapeHtml(role)}</span>` : ""}
        </header>
        <div class="testimonial-embed">
          <iframe
            src="${escapeHtml(item.embedUrl)}"
            height="${height}"
            width="100%"
            frameborder="0"
            allowfullscreen
            loading="lazy"
            title="Recomendación de ${escapeHtml(item.author || "LinkedIn")}">
          </iframe>
        </div>
        ${item.fallbackUrl ? `
          <a class="testimonial-link"
             href="${escapeHtml(item.fallbackUrl)}"
             target="_blank"
             rel="noopener noreferrer">
            ${escapeHtml(t("testimonials.viewPost"))}
          </a>` : ""}
      </article>
    `;
  }).join("");
}

// ---------- load ----------
async function loadTestimonials() {
  try {
    const res = await fetch(TESTIMONIALS_JSON_URL, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status} al cargar testimonials.json`);
    const data = await res.json();
    TESTIMONIALS = Array.isArray(data) ? data : (data.items || []);
    renderTestimonials();
  } catch (err) {
    console.error("[testimonials.js] No se pudieron cargar las recomendaciones:", err);
    TESTIMONIALS = [];
    const container = document.getElementById("testimonialsList");
    if (container) {
      container.innerHTML = `<p class="error-msg">${escapeHtml(t("testimonials.error"))}</p>`;
    }
  }
}

// ---------- arranque ----------
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadTestimonials);
} else {
  loadTestimonials();
}