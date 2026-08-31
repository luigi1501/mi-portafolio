# Portafolio Profesional — Luis Rodríguez

![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)
![UI/UX Style](https://img.shields.io/badge/Design-Neomorphism%20%28Soft%20UI%29-6366f1?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-v18+-6366f1?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express)
![Frontend](https://img.shields.io/badge/Frontend-EJS%20%7C%20CSS3%20%7C%20Vanilla%20JS-8b5cf6?style=for-the-badge)

Plataforma web profesional y repositorio central de **Luis Rodríguez**, Desarrollador Full Stack. El sistema implementa una arquitectura orientada a rendimiento, interfaz basada en el paradigma **Neomórfico (Soft UI)**, animaciones dinámicas sincronizadas con la velocidad del scroll y un carrusel interactivo autónomo para la exhibición de casos de estudio técnicos.

**Demostración en Producción**: [https://mi-portafolio-23xe.vercel.app/](https://mi-portafolio-23xe.vercel.app/)

---

## Arquitectura de Diseño y Experiencia de Usuario (UI/UX)

### 1. Sistema Neomórfico (Soft UI)
- **Relieve en Superficie (Outset)**: Implementación de pares de sombras vectoriales de alta precisión (resplandor superior-izquierdo y sombra profunda inferior-derecha) aplicadas a contenedores, tarjetas de proyectos, encabezado y controles interactivos.
- **Profundidad de Inserción (Inset)**: Sombras internas configuradas para campos de entrada de formularios (`input`, `textarea`), contenedores de información secundaria del modal y estados activos (*pressed*) en botones.
- **Gama de Color y Accesibilidad**: Paletas adaptadas para modo claro (`#e6ecf5`) y modo oscuro (`#181f2c`), cumpliendo con los estándares de contraste y legibilidad WCAG AA.

### 2. Animaciones Adaptativas de Scroll (Velocity-Linked Reveal)
- **Cálculo de Velocidad**: Motor desacoplado en `scroll-velocity.js` que determina la velocidad instantánea de desplazamiento ($v = \frac{|\Delta y|}{\Delta t}$) en tiempo real.
- **Aceleración Dinámica**: Ajuste automático de parámetros de transición CSS (duración, distancia de elevación y escala) en función de la rapidez de navegación del usuario.

### 3. Carrusel Horizontal de Proyectos con Autoplay
- **Desplazamiento Autónomo**: Ciclo automático configurable (3.5 segundos por diapositiva) con suspensión inteligente ante interacción o evento *hover*.
- **Control Multidispositivo**: Soporte para gestos táctiles (*touch swipe*), arrastre con cursor (*mouse drag*), botones de navegación lateral e indicadores de paginación.
- **Exhibición Destacada**: Formato de visualización individual (1 proyecto por diapositiva) para máxima atención a los detalles técnicos de cada caso de estudio.

---

## Stack Tecnológico e Infraestructura

- **Backend**: Node.js, Express.js (Patrón Arquitectónico MVC).
- **Frontend**: EJS (Embedded JavaScript Templates), HTML5 Semántico, CSS3 Neomórfico, JavaScript Vanilla (sin dependencias pesadas).
- **Bases de Datos & Almacenamiento**: TiDB Cloud (NewSQL), MySQL, MongoDB, PostgreSQL, SQLite.
- **Servicios de Integración**: EmailJS (Procesamiento asíncrono de solicitudes de contacto).
- **Despliegue e Infraestructura Cloud**: Vercel Serverless Functions (`@vercel/node`) respaldado por CDN Edge.

---

## Estructura del Repositorio

```text
mi-portafolio/
├── api/
│   └── index.js            # Punto de entrada para Vercel Serverless Function
├── bin/
│   └── www                 # Script de inicialización del servidor HTTP local
├── data/
│   └── portfolioData.js    # Data de experiencia, proyectos y competencias
├── public/
│   ├── favicon.ico
│   ├── icon/               # Activos de icono y manifiesto web
│   ├── images/             # Recurso gráfico de perfil
│   ├── javascripts/        # Módulos de lógica cliente
│   │   ├── carousel.js     # Controlador del carrusel horizontal (drag, swipe, autoplay)
│   │   ├── menu.js         # Gestión de navegación responsiva
│   │   ├── modal.js        # Lógica de modales para casos de estudio
│   │   ├── scroll-velocity.js # Motor de animaciones según velocidad de scroll
│   │   └── theme.js        # Gestión de persistencia de modo claro / oscuro
│   └── stylesheets/
│       └── style.css       # Hoja de estilos global y sistema Neomórfico
├── routes/
│   └── index.js            # Enrutamiento principal del sistema
├── views/
│   ├── index.ejs           # Vista principal
│   ├── partials/           # Componentes de encabezado y pie de página
│   └── sections/           # Vistas de módulos (skills, projects, contact, project-detail)
├── app.js                  # Configuración y middlewares de Express
├── package.json            # Manifiesto de dependencias y scripts
└── vercel.json             # Configuración de despliegue en Vercel
```

---

## Despliegue y Ejecución en Entorno Local

1. **Clonación del Repositorio:**
   ```bash
   git clone https://github.com/luigi1501/mi-portafolio.git
   cd mi-portafolio
   ```

2. **Instalación de Dependencias:**
   ```bash
   npm install
   ```

3. **Ejecución en Entorno de Desarrollo:**
   ```bash
   npm run dev
   ```
   Acceder a `http://localhost:3000` en el navegador web.

---

## Información de Contacto y Perfiles Profesionales

- **Plataforma Web**: [mi-portafolio-23xe.vercel.app](https://mi-portafolio-23xe.vercel.app/)
- **LinkedIn**: [linkedin.com/in/luis-rodriguez-9b605a3b5](https://www.linkedin.com/in/luis-rodriguez-9b605a3b5)
- **GitHub**: [github.com/luigi1501](https://github.com/luigi1501)
- **Correo Electrónico**: luisr150104@gmail.com
- **Telegram**: [@luigix15](https://t.me/luigix15)
- **WhatsApp**: [+58 412 452 3599](https://wa.me/+584124523599)
