const data = {
  // Datos de la sección "Sobre Mí" y experiencia
  experiencia: {
    años: "3 años",
    periodo: "2022 - 2025",
    descripcion:
      "Desarrollo Full Stack con un enfoque en la optimización de rendimiento y la integración de servicios RESTful.",
  }, // Tus habilidades técnicas

  skills: [
    {
      categoria: "Backend",
      tags: ["Node.js (Express)", "Python (Tkinter/Django)", "SQL/NoSQL"],
    },
    {
      categoria: "Bases de Datos",
      tags: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
    },
    {
      categoria: "Frontend",
      tags: ["HTML5", "CSS3", "EJS"],
    },
  ], // Tus proyectos clave

  proyectos: [
    // 🛑 PROYECTO 1: Sensus AI (En Proceso y Destacado)
    {
      nombre: "Sensus AI - Generador de Imágenes",
      slug: "sensus-ai",
      fecha: "2025",
      tecnologias: ["Python", "Flask", "OpenAI API", "HTML5", "Tailwind CSS"],
      resumen:
        "Generador de imágenes impulsado por IA. Enfocado en proveer inspiración visual y herramientas creativas para diseñadores y creadores de contenido.",
      linkDemo: "https://sensus-ia.onrender.com",
      linkRepo: null, // Dejamos en 'null' para mostrar el mensaje de "En Proceso"
      enProceso: true, // CLAVE: Muestra el estado "En Proceso"
      destacado: true,
    },

    // 🛑 PROYECTO 2: Sistema de Control de Asistencia QR
    {
      nombre: "Sistema de Control de Asistencia QR",
      slug: "control-asistencia-qr",
      fecha: "2025",
      tecnologias: ["Node.js", "Express", "EJS", "MongoDB", "QR Code Scanner"],
      resumen:
        "Sistema de control de asistencia generado por código QR para la empresa Alimentos del Alba. Escaneo en la misma página, control de entradas/salidas y historial detallado.",
      linkDemo: "https://alimentos-del-alba.onrender.com",
      linkRepo: "https://github.com/luigi1501/Alimentos-del-Alba", // Agregado linkRepo
      destacado: true,
    }, // 🛑 PROYECTO 3: Sistema de Gestión de Inventario

    {
      nombre: "Sistema de Gestión de Inventario",
      slug: "gestion-inventario",
      fecha: "2024 - Actualidad",
      tecnologias: ["Node.js", "Express", "MySQL", "EJS", "CSS Modular"],
      resumen:
        "Desarrollo de una API robusta para el manejo de inventario en tiempo real.",
      linkRepo: null,
      enProceso: true, // CLAVE: Muestra el estado "En Proceso"
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
      enProceso: true, // CLAVE: Muestra el estado "En Proceso"
    },
  ],
};

module.exports = data;
