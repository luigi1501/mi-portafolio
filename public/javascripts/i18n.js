/**
 * i18n.js — Motor de traducción bilingüe ES / EN
 * Portfolio de Luis Rodríguez
 */

const translations = {
  es: {
    // NAV
    "nav.home":       "Inicio",
    "nav.projects":   "Proyectos",
    "nav.skills":     "Habilidades",
    "nav.cv":         "Curriculum (CV)",
    "nav.contact":    "Contacto",

    // HERO
    "hero.status":      "Disponible para nuevos proyectos",
    "hero.greeting":    "¡Hola! Soy",
    "hero.name-role":   "Desarrollador Full Stack",
    "hero.experience":  "de experiencia",
    "hero.description": "Desarrollo Full Stack especializado en la creación de aplicaciones escalables, integración de bases de datos distribuidas en la nube y despliegue continuo (CI/CD).",
    "hero.btn-projects":"Ver Proyectos",
    "hero.btn-cv":      "Ver CV",
    "hero.btn-download":"Descargar CV",
    "hero.btn-contact": "Contactar",

    // QUOTE
    "quote.text":   "\"Cada obstáculo superado no fue un error, sino una lección de maestría. Mi portafolio no solo muestra código, sino la perseverancia de quien se niega a rendirse ante la complejidad.\"",
    "quote.author": "— Luis Rodríguez",

    // SKILLS
    "skills.tag":          "Habilidades & Stack",
    "skills.title":        "Habilidades Técnicas & Experiencia",
    "skills.subtitle":     "Stack tecnológico moderno centrado en rendimiento, arquitectura limpia y soluciones escalables.",
    "skills.period-label": "Período de experiencia activa:",
    "skills.badge":        "🚀 Período de experiencia activa:",
    "skills.summary1":     "Mi enfoque principal se centra en el desarrollo backend con <strong>Node.js</strong> y <strong>Express</strong>, complementado con aplicaciones sólidas en <strong>Python</strong>. Poseo amplia experiencia en el diseño e integración de bases de datos relacionales y NoSQL como <strong>MongoDB, MySQL, PostgreSQL, SQLite, TiDB Cloud y Turso Cloud</strong>.",
    "skills.summary2":     "En el frontend, construyo interfaces dinámicas, responsivas y accesibles utilizando <strong>HTML5, CSS3, JavaScript y EJS</strong>, priorizando siempre la experiencia del usuario y la velocidad de carga.",

    // PROJECTS
    "projects.tag":                "Casos de Estudio",
    "projects.title":              "Proyectos Destacados",
    "projects.subtitle":           "Cada proyecto es un caso de estudio enfocado en resolver problemas de negocio, tomar decisiones técnicas justificadas y generar impacto real.",
    "projects.drag":               "Desliza o arrastra para ver más proyectos",
    "projects.drag-hint":          "Desliza o arrastra para ver más proyectos",
    "projects.carousel-aria":      "Carrusel de Proyectos",
    "projects.prev-aria":          "Proyecto anterior",
    "projects.next-aria":          "Siguiente proyecto",
    "projects.badge":              "💡 Caso de Estudio",
    "projects.case-study-badge":   "💡 Caso de Estudio",
    "projects.wip":                "⚡ En Proceso",
    "projects.status-in-progress": "⚡ En Proceso",
    "projects.done":               "✓ Completado",
    "projects.status-completed":   "✓ Completado",
    "projects.btn":                "Ver Caso de Estudio",
    "projects.btn-view-case":      "Ver Caso de Estudio",

    // MODAL PROYECTOS
    "modal.pill":               "Caso de Estudio Técnico",
    "modal.case-study-pill":    "Caso de Estudio Técnico",
    "modal.challenge":          "El Desafío / Problema Real",
    "modal.challenge-header":   "El Desafío / Problema Real",
    "modal.solution":           "Arquitectura & Decisión Técnica",
    "modal.architecture-header":"Arquitectura & Decisión Técnica",
    "modal.impact":             "Impacto & Aprendizajes",
    "modal.impact-header":      "Impacto & Aprendizajes",
    "modal.demo":               "Ver Demo en Vivo",
    "modal.btn-live-demo":      "Ver Demo en Vivo",
    "modal.repo":               "Ver Código Fuente",
    "modal.btn-source-code":    "Ver Código Fuente",
    "modal.close-aria":         "Cerrar ventana",
    "modal.wip-status":         "⚡ Proyecto actualmente En Proceso de Desarrollo",
    "modal.done-status":        "✓ Proyecto Completado y Desplegado",

    // CV MODAL
    "cv-modal.btn-open":      "Abrir",
    "cv-modal.btn-download":  "Descargar",
    "cv-modal.open-title":    "Abrir en pestaña nueva",
    "cv-modal.download-title":"Descargar PDF",

    // CONTACT
    "contact.tag":                "Contacto Directo",
    "contact.title":              "¡Hablemos de tu Proyecto!",
    "contact.subtitle":           "Estoy disponible para nuevos proyectos, consultas o colaboración. Te responderé en menos de 24 horas.",
    "contact.name":               "Nombre Completo",
    "contact.label-name":         "Nombre Completo",
    "contact.name-ph":            "Tu Nombre",
    "contact.placeholder-name":   "Tu Nombre",
    "contact.email":              "Correo Electrónico",
    "contact.label-email":        "Correo Electrónico",
    "contact.email-ph":           "tu.correo@ejemplo.com",
    "contact.placeholder-email":  "tu.correo@ejemplo.com",
    "contact.message":            "Mensaje",
    "contact.label-message":      "Mensaje",
    "contact.message-ph":         "Cuéntame sobre tu proyecto o consulta...",
    "contact.placeholder-message":"Cuéntame sobre tu proyecto o consulta...",
    "contact.btn":                "Enviar Mensaje",
    "contact.btn-send":           "Enviar Mensaje",
    "contact.sending":            "Enviando...",
    "contact.success-msg":        "¡Mensaje Enviado! Te contactaré pronto.",
    "contact.error-msg":          "Error al Enviar: Intenta más tarde.",

    // FOOTER
    "footer.rights":      "Todos los derechos reservados.",
    "footer.cv":          "Descargar CV",
    "footer.download-cv": "Descargar CV",
  },

  en: {
    // NAV
    "nav.home":       "Home",
    "nav.projects":   "Projects",
    "nav.skills":     "Skills",
    "nav.cv":         "Resume (CV)",
    "nav.contact":    "Contact",

    // HERO
    "hero.status":      "Available for new projects",
    "hero.greeting":    "Hi! I'm",
    "hero.name-role":   "Full Stack Developer",
    "hero.experience":  "of experience",
    "hero.description": "Full Stack Developer specializing in building scalable web applications, integrating distributed cloud databases, and implementing continuous deployment pipelines (CI/CD).",
    "hero.btn-projects":"View Projects",
    "hero.btn-cv":      "View CV",
    "hero.btn-download":"Download CV",
    "hero.btn-contact": "Contact Me",

    // QUOTE
    "quote.text":   "\"Every obstacle overcome was not a mistake, but a lesson in mastery. My portfolio doesn't just show code — it shows the perseverance of someone who refuses to give up in the face of complexity.\"",
    "quote.author": "— Luis Rodríguez",

    // SKILLS
    "skills.tag":          "Skills & Stack",
    "skills.title":        "Technical Skills & Experience",
    "skills.subtitle":     "Modern tech stack focused on performance, clean architecture, and scalable solutions.",
    "skills.period-label": "Active experience period:",
    "skills.badge":        "🚀 Active experience period:",
    "skills.summary1":     "My main focus is backend development with <strong>Node.js</strong> and <strong>Express</strong>, complemented by solid applications in <strong>Python</strong>. I have extensive experience designing and integrating relational and NoSQL databases such as <strong>MongoDB, MySQL, PostgreSQL, SQLite, TiDB Cloud, and Turso Cloud</strong>.",
    "skills.summary2":     "On the frontend, I build dynamic, responsive, and accessible interfaces using <strong>HTML5, CSS3, JavaScript, and EJS</strong>, always prioritizing user experience and load speed.",

    // PROJECTS
    "projects.tag":                "Case Studies",
    "projects.title":              "Featured Projects",
    "projects.subtitle":           "Each project is a case study focused on solving real business problems, making justified technical decisions, and generating real impact.",
    "projects.drag":               "Swipe or drag to see more projects",
    "projects.drag-hint":          "Swipe or drag to see more projects",
    "projects.carousel-aria":      "Projects Carousel",
    "projects.prev-aria":          "Previous project",
    "projects.next-aria":          "Next project",
    "projects.badge":              "💡 Case Study",
    "projects.case-study-badge":   "💡 Case Study",
    "projects.wip":                "⚡ In Progress",
    "projects.status-in-progress": "⚡ In Progress",
    "projects.done":               "✓ Completed",
    "projects.status-completed":   "✓ Completed",
    "projects.btn":                "View Case Study",
    "projects.btn-view-case":      "View Case Study",

    // MODAL PROYECTOS
    "modal.pill":               "Technical Case Study",
    "modal.case-study-pill":    "Technical Case Study",
    "modal.challenge":          "The Challenge / Real Problem",
    "modal.challenge-header":   "The Challenge / Real Problem",
    "modal.solution":           "Architecture & Technical Decision",
    "modal.architecture-header":"Architecture & Technical Decision",
    "modal.impact":             "Impact & Learnings",
    "modal.impact-header":      "Impact & Learnings",
    "modal.demo":               "View Live Demo",
    "modal.btn-live-demo":      "View Live Demo",
    "modal.repo":               "View Source Code",
    "modal.btn-source-code":    "View Source Code",
    "modal.close-aria":         "Close window",
    "modal.wip-status":         "⚡ Project currently In Development",
    "modal.done-status":        "✓ Completed & Deployed Project",

    // CV MODAL
    "cv-modal.btn-open":      "Open",
    "cv-modal.btn-download":  "Download",
    "cv-modal.open-title":    "Open in new tab",
    "cv-modal.download-title":"Download PDF",

    // CONTACT
    "contact.tag":                "Direct Contact",
    "contact.title":              "Let's Talk About Your Project!",
    "contact.subtitle":           "I'm available for new projects, consulting, or collaboration. I'll reply within 24 hours.",
    "contact.name":               "Full Name",
    "contact.label-name":         "Full Name",
    "contact.name-ph":            "Your Name",
    "contact.placeholder-name":   "Your Name",
    "contact.email":              "Email Address",
    "contact.label-email":        "Email Address",
    "contact.email-ph":           "your.email@example.com",
    "contact.placeholder-email":  "your.email@example.com",
    "contact.message":            "Message",
    "contact.label-message":      "Message",
    "contact.message-ph":         "Tell me about your project or inquiry...",
    "contact.placeholder-message":"Tell me about your project or inquiry...",
    "contact.btn":                "Send Message",
    "contact.btn-send":           "Send Message",
    "contact.sending":            "Sending...",
    "contact.success-msg":        "Message Sent! I'll get back to you soon.",
    "contact.error-msg":          "Send Error: Please try again later.",

    // FOOTER
    "footer.rights":      "All rights reserved.",
    "footer.cv":          "Download CV",
    "footer.download-cv": "Download CV",
  }
};

// ─── Helper global t() ─────────────────────────────────────────────────────

window.t = function(key) {
  const lang = localStorage.getItem('portfolio_lang') || 'es';
  return (translations[lang] && translations[lang][key]) || (translations.es && translations.es[key]) || key;
};

// ─── Motor de traducción ───────────────────────────────────────────────────

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Guardar preferencia
  localStorage.setItem('portfolio_lang', lang);
  localStorage.setItem('portfolio-lang', lang);

  // Texto simple (data-i18n)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML (data-i18n-html)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Placeholders (data-i18n-placeholder)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Titles (data-i18n-title)
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (t[key] !== undefined) el.title = t[key];
  });

  // Aria-labels (data-i18n-aria)
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  // Elementos con data-lang-es / data-lang-en (hero subtitle, etc.)
  document.querySelectorAll('[data-lang-es][data-lang-en]').forEach(el => {
    const val = lang === 'en' ? el.getAttribute('data-lang-en') : el.getAttribute('data-lang-es');
    if (val) el.textContent = val;
  });

  // Actualizar atributo html lang
  document.documentElement.lang = lang === 'es' ? 'es' : 'en';

  // Actualizar estado de los botones del toggle en la nav (soporta tanto .lang-btn como .lang-toggle-btn)
  document.querySelectorAll('.lang-btn, .lang-toggle-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // Traducir tarjetas de proyectos y categorías
  applyProjectTranslations(lang);

  // Disparar evento global para notificat a otros scripts (modal.js, etc.)
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function applyProjectTranslations(lang) {
  // Actualizar tarjetas de proyectos en el carrusel
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    try {
      const proyecto = JSON.parse(btn.getAttribute('data-proyecto'));
      const card = btn.closest('article');
      if (!card) return;

      const nameEl = card.querySelector('h3');
      const summaryEl = card.querySelector('.summary');
      const btnSpan = btn.querySelector('span');

      if (lang === 'en') {
        if (nameEl && proyecto.nombre_en) nameEl.textContent = proyecto.nombre_en;
        if (summaryEl && proyecto.resumen_en) summaryEl.textContent = proyecto.resumen_en;
      } else {
        if (nameEl) nameEl.textContent = proyecto.nombre;
        if (summaryEl) summaryEl.textContent = proyecto.resumen;
      }
      if (btnSpan) btnSpan.textContent = translations[lang]['projects.btn-view-case'] || translations[lang]['projects.btn'];
    } catch(e) { /* ignorar */ }
  });

  // Actualizar títulos de categorías de skills
  document.querySelectorAll('.skill-category-block h3').forEach(h3 => {
    const enVal = h3.dataset.langEn;
    const esVal = h3.dataset.langEs;
    if (lang === 'en' && enVal) h3.textContent = enVal;
    if (lang === 'es' && esVal) h3.textContent = esVal;
  });
}

// Exponer globalmente
window.applyTranslations = applyTranslations;
window.setLanguage = function(lang) {
  applyTranslations(lang);
};
window.getStoredLang = function() {
  return localStorage.getItem('portfolio_lang') || localStorage.getItem('portfolio-lang') || 'es';
};

document.addEventListener('DOMContentLoaded', () => {
  const currentLang = window.getStoredLang();
  applyTranslations(currentLang);

  // Listener para botones de toggle en la nav
  document.querySelectorAll('.lang-btn, .lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedLang = btn.dataset.lang;
      if (selectedLang) {
        applyTranslations(selectedLang);
      }
    });
  });
});
