// ===================================================================
//  contacts.js
//  -------------------------------------------------------------------
//  Carga los métodos de contacto desde database/contacts.json y los
//  inyecta dentro de #contactsList en index.html.
//  Para cambiar WhatsApp/Email/GitHub/LinkedIn, edita SOLO el JSON.
// ===================================================================

let CONTACTS = null;

const CONTACTS_JSON_URL = "database/contacts.json";

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
function renderContacts() {
  const container = document.getElementById("contactsList");
  if (!container) return;
  if (CONTACTS === null) return;

  if (CONTACTS.length === 0) {
    container.innerHTML = `<p class="empty-msg">${escapeHtml(t("contacts.empty"))}</p>`;
    return;
  }

  container.innerHTML = CONTACTS.map((item) => {
    const label = currentLang === "en" && item.label_en ? item.label_en : (item.label_es || "");
    const isExternal = typeof item.href === "string" && /^https?:\/\//i.test(item.href);
    const brandClass = item.brand ? ` brand-${item.brand}` : "";
    return `
      <a class="contact-card${brandClass}"
         href="${escapeHtml(item.href)}"
         ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ""}>
        <span class="contact-icon"><i class="${escapeHtml(item.icon || "fa-solid fa-link")}"></i></span>
        <span class="contact-info">
          <span class="contact-label">${escapeHtml(label)}</span>
          <span class="contact-value">${escapeHtml(item.value || "")}</span>
        </span>
      </a>
    `;
  }).join("");
}

// ---------- load ----------
async function loadContacts() {
  try {
    const res = await fetch(CONTACTS_JSON_URL, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status} al cargar contacts.json`);
    const data = await res.json();
    CONTACTS = Array.isArray(data) ? data : (data.items || []);
    renderContacts();
  } catch (err) {
    console.error("[contacts.js] No se pudieron cargar los contactos:", err);
    CONTACTS = [];
    const container = document.getElementById("contactsList");
    if (container) {
      container.innerHTML = `<p class="error-msg">${escapeHtml(t("contacts.error"))}</p>`;
    }
  }
}

// ---------- arranque ----------
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadContacts);
} else {
  loadContacts();
}