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
    descripcion_en:
      "Full Stack Development specialized in building scalable applications, integrating distributed cloud databases, and continuous deployment (CI/CD).",
  },

  // 🛠️ Tus habilidades técnicas actualizadas
  skills: [
    {
      categoria: "Backend",
      categoria_en: "Backend",
      tags: ["Node.js (Express)", ".NET 10 (C#)", "Python (Django/Flask)", "SQL/NoSQL", "Restful APIs"],
    },
    {
      categoria: "Bases de Datos",
      categoria_en: "Databases",
      tags: ["TiDB Cloud (NewSQL)", "MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    },
    {
      categoria: "Frontend & Cloud",
      categoria_en: "Frontend & Cloud",
      tags: ["HTML5", "CSS3", "Tailwind CSS", "Blazor", "EJS", "Vercel", "Bootstrap", "Chart.js"],
    },
  ],

  // 🚀 Tus proyectos clave
  proyectos: [
    // 🛑 PROYECTO 1: TasaPlus — Monitor Inteligente y Calculadora Financiera
    {
      nombre: "TasaPlus — Monitor Inteligente y Calculadora Financiera",
      nombre_en: "TasaPlus — Intelligent Monitor & Financial Calculator",
      slug: "tasaplus",
      fecha: "2026",
      tecnologias: [
        ".NET 10",
        "C#",
        "ASP.NET Core Web API",
        "Blazor",
        "Tailwind CSS",
        "JavaScript",
        "Vercel",
        ".NET MAUI",
      ],
      resumen:
        "Solución financiera multiplataforma que unifica en tiempo real las cotizaciones del BCV y Binance (Spot & P2P) con calculadora inteligente y generador de comprobantes.",
      resumen_en:
        "Cross-platform financial solution that unifies in real time BCV and Binance (Spot & P2P) exchange rates with an intelligent calculator and receipt generator.",
      problema:
        "La disparidad y fluctuación entre las tasas oficiales del Banco Central de Venezuela (BCV) y el mercado P2P/Spot de criptomonedas (Binance) dificultan la fijación exacta de precios y la conversión rápida de divisas para comerciantes y usuarios en Venezuela.",
      problema_en:
        "The disparity and volatility between the official rates of Venezuela's Central Bank (BCV) and the P2P/Spot crypto market (Binance) makes accurate pricing and fast currency conversion difficult for merchants and users in Venezuela.",
      solucionTecnica:
        "Desarrollo de una arquitectura multiplataforma (.NET 10 / C# ASP.NET Core Web API + Blazor Shared) con sincronización automática de APIs de cotización (ve.dolarapi.com, Binance Spot & P2P). Incluye calculadora bidireccional inteligente con formato regional es-VE (punto para miles, coma para decimales), generador de comprobantes en HD (PNG) para compartir en WhatsApp/Telegram y guía de seguridad P2P.",
      solucionTecnica_en:
        "Built a cross-platform architecture (.NET 10 / C# ASP.NET Core Web API + Blazor Shared) with automatic synchronization from exchange rate APIs (ve.dolarapi.com, Binance Spot & P2P). Includes a smart bidirectional calculator with Venezuelan regional formatting, HD receipt generator (PNG) for WhatsApp/Telegram sharing, and a P2P security guide.",
      impacto:
        "Unificación instantánea de cotizaciones financieras, conversión sin errores con formato regional venezolano, generación de comprobantes digitales de pago en 1 clic y reducción de riesgos de fraude P2P.",
      impacto_en:
        "Instant unification of financial exchange rates, error-free conversion with Venezuelan regional formatting, 1-click digital receipt generation, and reduced P2P fraud risk.",
      linkDemo: "https://tasaplus.vercel.app",
      linkRepo: "https://github.com/luigi1501/Proyecto-Calculadora-Monedas",
      enProceso: false,
      destacado: true,
    },

    // 🛑 PROYECTO 2: Sistema de Gestión de Inventario Pro
    {
      nombre: "Sistema de Gestión de Inventario Pro",
      nombre_en: "Pro Inventory Management System",
      slug: "gestion-inventario",
      fecha: "2026",
      tecnologias: ["Node.js", "Express", "TiDB Cloud", "MySQL", "Vercel", "EJS", "Chart.js"],
      resumen:
        "Sistema distribuido de gestión de stock con analíticas en tiempo real diseñado para eliminar pérdidas por quiebre de inventario.",
      resumen_en:
        "Distributed stock management system with real-time analytics designed to eliminate inventory stockout losses.",
      problema:
        "Las pequeñas y medianas empresas enfrentan pérdidas constantes por descontrol de stock y falta de visibilidad en tiempo real al depender de registros manuales o bases de datos locales no centralizadas.",
      problema_en:
        "Small and medium-sized businesses face constant losses due to uncontrolled stock and lack of real-time visibility, relying on manual records or non-centralized local databases.",
      solucionTecnica:
        "Diseño de una arquitectura Full Stack basada en Node.js/Express integrada con TiDB Cloud (NewSQL distribuido en AWS Virginia). Se optó por TiDB para garantizar escalabilidad horizontal elástica y consistencia ACID sobre protocolo MySQL. Se integró Chart.js para dashboards dinámicos y despliegue continuo mediante Vercel.",
      solucionTecnica_en:
        "Designed a Full Stack architecture using Node.js/Express integrated with TiDB Cloud (NewSQL distributed on AWS Virginia). TiDB was chosen to ensure elastic horizontal scalability and ACID consistency over the MySQL protocol. Chart.js was integrated for dynamic dashboards with continuous deployment via Vercel.",
      impacto:
        "Visibilidad inmediata de alertas de stock crítico, 100% de disponibilidad mediante infraestructura serverless y garantía de alta disponibilidad en consultas concurrentes sin degradar rendimiento.",
      impacto_en:
        "Immediate visibility of critical stock alerts, 100% availability through serverless infrastructure, and guaranteed high availability on concurrent queries without performance degradation.",
      linkDemo: "https://sistema-inventario-iota.vercel.app/",
      linkRepo: "https://github.com/luigi1501/sistema-inventario",
      enProceso: false,
      destacado: true,
    },

    // 🛑 PROYECTO 2: Sistema de Control de Asistencia QR
    {
      nombre: "Sistema de Control de Asistencia QR",
      nombre_en: "QR Attendance Control System",
      slug: "control-asistencia-qr",
      fecha: "2025",
      tecnologias: ["Node.js", "Express", "EJS", "MongoDB", "QR Code Scanner"],
      resumen:
        "Plataforma de registro instantáneo de entradas y salidas vía escáner QR para la empresa Alimentos del Alba.",
      resumen_en:
        "Instant check-in/check-out registration platform via QR scanner for the company Alimentos del Alba.",
      problema:
        "El registro de asistencia manual generaba cuellos de botella en la entrada de turnos de producción, errores en el cómputo de horas trabajadas y falta de trazabilidad inmediata para supervisores.",
      problema_en:
        "Manual attendance tracking caused bottlenecks at production shift entries, errors in hours worked calculation, and lack of immediate traceability for supervisors.",
      solucionTecnica:
        "Implementación de un motor de escaneo de códigos QR directamente en la aplicación web para eliminar la necesidad de instalar apps nativas. Uso de MongoDB para registros de escritura atómicos de alta velocidad y generación de historiales auditables en tiempo real.",
      solucionTecnica_en:
        "Implemented a QR code scanning engine directly in the web app to eliminate the need for native apps. MongoDB was used for high-speed atomic write records and real-time auditable history generation.",
      impacto:
        "Reducción del tiempo de fichaje por empleado de 45 segundos a menos de 3 segundos, eliminando errores de digitación y proveyendo un panel administrativo con reportes en vivo.",
      impacto_en:
        "Reduced employee check-in time from 45 seconds to under 3 seconds, eliminating typing errors and providing an admin dashboard with live reports.",
      linkDemo: "https://alimentos-del-alba.vercel.app",
      linkRepo: "https://github.com/luigi1501/Alimentos-del-Alba",
      enProceso: false,
      destacado: true,
    },

    // 🛑 PROYECTO 3: Blog Profesional con Python
    {
      nombre: "Blog Profesional con Python",
      nombre_en: "Professional Blog with Python",
      slug: "blog-python",
      fecha: "2026",
      tecnologias: ["Python", "Flask", "PostgreSQL", "Supabase", "HTML", "CSS"],
      resumen:
        "Plataforma de publicaciones técnicas con arquitectura MVC desacoplada y persistencia PostgreSQL en la nube.",
      resumen_en:
        "Technical publishing platform with a decoupled MVC architecture and cloud PostgreSQL persistence.",
      problema:
        "Los gestores de contenido convencionales presentan sobrecarga de código (overhead), complejidad innecesaria y vulnerabilidades comunes por mal aislamiento de capas de autenticación.",
      problema_en:
        "Conventional content managers suffer from code overhead, unnecessary complexity, and common vulnerabilities due to poor isolation of authentication layers.",
      solucionTecnica:
        "Construcción orientada al patrón MVC estricto con Python y Flask para separar limpiamente lógica de negocio de la vista HTML/CSS. Persistencia en Supabase (PostgreSQL cloud) implementando hashing robusto de contraseñas, protección contra inyecciones y rutas optimizadas.",
      solucionTecnica_en:
        "Built using strict MVC pattern with Python and Flask to cleanly separate business logic from HTML/CSS views. Persistence in Supabase (PostgreSQL cloud) with robust password hashing, injection protection, and optimized routes.",
      impacto:
        "Demostración práctica de patrones de diseño limpios, tiempos de renderizado de respuesta en servidor < 100ms y un código totalmente mantenible y seguro.",
      impacto_en:
        "Practical demonstration of clean design patterns, server response rendering times under 100ms, and a fully maintainable and secure codebase.",
      linkRepo: "https://github.com/luigi1501/mi-blog-profesional",
      linkDemo: "https://mi-blog-profesional.vercel.app/",
      enProceso: false,
      destacado: true,
    },
  ],
};

module.exports = data;
