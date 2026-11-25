// ==========================================================================
//  skills.js
//  --------------------------------------------------------------------------
//  Carga las categorías e iconos de habilidades desde database/skills.json.
//  Para actualizar habilidades no es necesario modificar HTML ni JavaScript.
// ==========================================================================

let SKILLS = null;

const SKILLS_JSON_URL = "database/skills.json";

function escapeSkillHtml(str) {
  return String(str ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}

function renderSkills() {
  const list = document.getElementById("skillsList");
  const stack = document.getElementById("techStack");
  if (!list || !stack) return;

  if (SKILLS === null) return;

  const groups = Array.isArray(SKILLS.groups) ? SKILLS.groups : [];
  const stackItems = Array.isArray(SKILLS.stack) ? SKILLS.stack : [];

  list.innerHTML = groups.length
    ? groups.map((group) => {
        const title = currentLang === "en"
          ? (group.title_en || group.title_es || "")
          : (group.title_es || group.title_en || "");
        const items = Array.isArray(group.items) ? group.items : [];

        return `
          <li class="skill-group">
            <h3 class="skill-group__title">${escapeSkillHtml(title)}</h3>
            <ul class="skill-group__list">
              ${items.map((item) => `<li class="chip">${escapeSkillHtml(item)}</li>`).join("")}
            </ul>
          </li>
        `;
      }).join("")
    : `<li><p class="empty-msg">${escapeSkillHtml(t("skills.empty"))}</p></li>`;

  stack.innerHTML = stackItems.map((item) => `
    <i class="${escapeSkillHtml(item.icon || "fa-solid fa-code")}"
       title="${escapeSkillHtml(item.label || "")}"
       aria-label="${escapeSkillHtml(item.label || "")}"></i>
  `).join("");
}

async function loadSkills() {
  try {
    const response = await fetch(SKILLS_JSON_URL, { cache: "no-cache" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} al cargar skills.json`);
    }

    const data = await response.json();
    SKILLS = {
      groups: Array.isArray(data.groups) ? data.groups : (Array.isArray(data) ? data : []),
      stack: Array.isArray(data.stack) ? data.stack : []
    };
    renderSkills();

    if (typeof initReveal === "function") initReveal();
  } catch (error) {
    console.error("[skills.js] No se pudieron cargar las habilidades:", error);
    SKILLS = { groups: [], stack: [] };

    const list = document.getElementById("skillsList");
    if (list) {
      list.innerHTML = `<li><p class="error-msg">${escapeSkillHtml(t("skills.error"))}</p></li>`;
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadSkills);
} else {
  loadSkills();
}
