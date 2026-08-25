const currentYear = new Date().getFullYear();
const startYear = 2022;
const añosCalculados = currentYear - startYear;

const data = {
  // 👤 Datos de la sección "Sobre Mí" y experiencia
  experiencia: {
    años: `${añosCalculados} años`,
    periodo: `${startYear} - ${currentYear}`,
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
    // 🛑 PROYECTO 1: Sistema de Gestión de Inventario Pro
    {
      nombre: "Sistema de Gestión de Inventario Pro",
      slug: "gestion-inventario",
      fecha: "2026",
      tecnologias: ["Node.js", "Express", "TiDB Cloud", "MySQL", "Vercel", "EJS", "Chart.js"],
      resumen:
        "Sistema distribuido de gestión de stock con analíticas en tiempo real diseñado para eliminar pérdidas por quiebre de inventario.",
      problema:
        "Las pequeñas y medianas empresas enfrentan pérdidas constantes por descontrol de stock y falta de visibilidad en tiempo real al depender de registros manuales o bases de datos locales no centralizadas.",
      solucionTecnica:
        "Diseño de una arquitectura Full Stack basada en Node.js/Express integrada con TiDB Cloud (NewSQL distribuido en AWS Virginia). Se optó por TiDB para garantizar escalabilidad horizontal elástica y consistencia ACID sobre protocolo MySQL. Se integró Chart.js para dashboards dinámicos y despliegue continuo mediante Vercel.",
      impacto:
        "Visibilidad inmediata de alertas de stock crítico, 100% de disponibilidad mediante infraestructura serverless y garantía de alta disponibilidad en consultas concurrentes sin degradar rendimiento.",
      linkDemo: "https://sistema-inventario-iota.vercel.app/",
      linkRepo: "https://github.com/luigi1501/sistema-inventario",
      enProceso: false,
      destacado: true,
    },

    // 🛑 PROYECTO 2: Sistema de Control de Asistencia QR
    {
      nombre: "Sistema de Control de Asistencia QR",
      slug: "control-asistencia-qr",
      fecha: "2025",
      tecnologias: ["Node.js", "Express", "EJS", "MongoDB", "QR Code Scanner"],
      resumen:
        "Plataforma de registro instantáneo de entradas y salidas vía escáner QR para la empresa Alimentos del Alba.",
      problema:
        "El registro de asistencia manual generaba cuellos de botella en la entrada de turnos de producción, errores en el cómputo de horas trabajadas y falta de trazabilidad inmediata para supervisores.",
      solucionTecnica:
        "Implementación de un motor de escaneo de códigos QR directamente en la aplicación web para eliminar la necesidad de instalar apps nativas. Uso de MongoDB para registros de escritura atómicos de alta velocidad y generación de historiales auditables en tiempo real.",
      impacto:
        "Reducción del tiempo de fichaje por empleado de 45 segundos a menos de 3 segundos, eliminando errores de digitación y proveyendo un panel administrativo con reportes en vivo.",
      linkDemo: "https://alimentos-del-alba.vercel.app",
      linkRepo: "https://github.com/luigi1501/Alimentos-del-Alba",
      enProceso: false,
      destacado: true,
    },

    // 🛑 PROYECTO 3: Blog Profesional con Python
    {
      nombre: "Blog Profesional con Python",
      slug: "blog-python",
      fecha: "2026",
      tecnologias: ["Python", "Flask", "PostgreSQL", "Supabase", "HTML", "CSS"],
      resumen:
        "Plataforma de publicaciones técnicas con arquitectura MVC desacoplada y persistencia PostgreSQL en la nube.",
      problema:
        "Los gestores de contenido convencionales presentan sobrecarga de código (overhead), complejidad innecesaria y vulnerabilidades comunes por mal aislamiento de capas de autenticación.",
      solucionTecnica:
        "Construcción orientada al patrón MVC estricto con Python y Flask para separar limpiamente lógica de negocio de la vista HTML/CSS. Persistencia en Supabase (PostgreSQL cloud) implementando hashing robusto de contraseñas, protección contra inyecciones y rutas optimizadas.",
      impacto:
        "Demostración práctica de patrones de diseño limpios, tiempos de renderizado de respuesta en servidor < 100ms y un código totalmente mantenible y seguro.",
      linkRepo: "https://github.com/luigi1501/mi-blog-profesional",
      linkDemo: "https://mi-blog-profesional.vercel.app/",
      enProceso: false,
      destacado: true,
    },
  ],
};

module.exports = data;
