const data = {
  // 👤 Datos de la sección "Sobre Mí" y experiencia
  experiencia: {
    años: "4 años",
    periodo: "2022 - 2026",
    descripcion:
      "Desarrollo Full Stack especializado en la creación de aplicaciones escalables, integración de bases de datos distribuidas en la nube y despliegue continuo (CI/CD).",
  },

  // 🛠️ Tus habilidades técnicas actualizadas
  skills: [
    {
      categoria: "Backend",
      tags: ["Node.js (Express)", "Python (Django/Flask)", "SQL/NoSQL", "Restful APIs"],
    },
    {
      categoria: "Bases de Datos",
      tags: ["TiDB Cloud (NewSQL)", "MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    },
    {
      categoria: "Frontend & Cloud",
      tags: ["HTML5", "CSS3", "EJS", "Vercel", "Bootstrap", "Chart.js"],
    },
  ],

  // 🚀 Tus proyectos clave
  proyectos: [
    // 🛑 PROYECTO 1: Sistema de Gestión de Inventario Pro (RECIÉN COMPLETADO)
    {
      nombre: "Sistema de Gestión de Inventario Pro",
      slug: "gestion-inventario",
      fecha: "2026",
      tecnologias: ["Node.js", "Express", "TiDB Cloud", "MySQL", "Vercel", "EJS", "Chart.js"],
      resumen:
        "Solución Full Stack con base de datos distribuida en la nube. Incluye control de stock, dashboard interactivo de ventas y gestión automatizada de categorías.",
      descripcionLarga:
        "Este sistema utiliza una arquitectura escalable conectando Node.js con TiDB Cloud (AWS Virginia). Implementa seguridad avanzada mediante variables de entorno y un despliegue continuo a través de Vercel. Destaca por su visualización de datos en tiempo real y su alta disponibilidad.",
      linkDemo: "https://sistema-inventario-iota.vercel.app/",
      linkRepo: "https://github.com/luigi1501/sistema-inventario",
      enProceso: false,
      destacado: true,
    },

    // 🛑 PROYECTO 2: Sensus AI (¡Ahora con código disponible!)
    {
      nombre: "Sensus AI - Generador de Imágenes",
      slug: "sensus-ai",
      fecha: "2025",
      tecnologias: ["Python", "Flask", "OpenAI API", "HTML5", "Tailwind CSS"],
      resumen:
        "Generador de imágenes impulsado por IA. Enfocado en proveer inspiración visual y herramientas creativas para diseñadores y creadores de contenido.",
      linkDemo: "https://sensus-ia.onrender.com",
      linkRepo: "https://github.com/luigi1501/sensus-ia", //
      enProceso: false, // <--- Lo ponemos en false para que se vea el botón
      destacado: true,
    },

    // 🛑 PROYECTO 3: Sistema de Control de Asistencia QR
    {
      nombre: "Sistema de Control de Asistencia QR",
      slug: "control-asistencia-qr",
      fecha: "2025",
      tecnologias: ["Node.js", "Express", "EJS", "MongoDB", "QR Code Scanner"],
      resumen:
        "Sistema de control de asistencia generado por código QR para la empresa Alimentos del Alba. Escaneo en la misma página, control de entradas/salidas y historial detallado.",
      linkDemo: "https://alimentos-del-alba.onrender.com",
      linkRepo: "https://github.com/luigi1501/Alimentos-del-Alba",
      destacado: true,
    },

    // 🛑 PROYECTO 4: Blog Personal con Python
    {
      nombre: "Blog Personal con Python",
      slug: "blog-python",
      fecha: "2023 - Actualidad",
      tecnologias: ["Python", "Flask", "SQLite", "HTML", "CSS"],
      resumen:
        "Un sistema de blog simple enfocado en la arquitectura MVC y la seguridad.",
      linkRepo: null,
      enProceso: true,
    },
  ],
};

module.exports = data;
