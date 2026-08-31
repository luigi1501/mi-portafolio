# 🚀 Portafolio Profesional — Luis Rodríguez

![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)
![UI/UX Style](https://img.shields.io/badge/Design-Neomorphism%20%28Soft%20UI%29-6366f1?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-v18+-6366f1?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express)
![Frontend](https://img.shields.io/badge/Frontend-EJS%20%7C%20CSS3%20%7C%20Vanilla%20JS-8b5cf6?style=for-the-badge)

Repositorio central del portafolio profesional de **Luis Rodríguez**, Desarrollador Full Stack. La plataforma ha sido diseñada bajo una arquitectura moderna, fluida y con un estilo de diseño **Neomórfico (Soft UI)**, animaciones de entrada vinculadas a la velocidad del scroll y un **Carrusel Horizontal Autónomo de Proyectos**.

🌐 **Demo En Vivo**: [https://mi-portafolio-23xe.vercel.app/](https://mi-portafolio-23xe.vercel.app/)

---

## 🎨 Especificaciones de Diseño UI/UX

### 1. 💎 Estilo Neomórfico (Soft UI)
- **Sombras Dobles Suaves (Outset)**: Relieve 3D en tarjetas, botones, contenedores, insignias y header mediante sombras dobles (luz superior izquierda y sombra inferior derecha).
- **Sombras Internas (Inset)**: Profundidad en campos de texto (`input`, `textarea`), cajas de historia del modal, distintivos de arrastre y estados presionados (*pressed*) de botones.
- **Armonía de Contrastes**: Fondos sintonizados (`#e6ecf5` en modo claro y `#181f2c` en modo oscuro) manteniendo accesibilidad WCAG AA.

### 2. ⚡ Animaciones al Hacer Scroll (Velocity-Linked Reveal)
- Módulo dinámico en [`scroll-velocity.js`](file:///c:/proyectos/mi-portafolio/public/javascripts/scroll-velocity.js) que calcula la velocidad instantánea del scroll ($v = \frac{|\Delta y|}{\Delta t}$).
- **Scroll Rápido**: Revelados acelerados (~0.22s) y mayor desplazamiento vertical (55px).
- **Scroll Suave**: Aparición progresiva y fluida (~0.65s) con animación de escala y elevación.

### 3. 🎠 Carrusel Horizontal de Proyectos con Autoplay
- Módulo en [`carousel.js`](file:///c:/proyectos/mi-portafolio/public/javascripts/carousel.js) que sustituye las grillas verticales por un slider horizontal autónomo.
- **Desplazamiento Automático (Autoplay)**: Transición automática cada 3.5 segundos con pausa al pasar el puntero (*hover*) o tocar.
- **Interacción Multidispositivo**: Navegación por arrastre (mouse drag), deslizamiento táctil (*touch swipe*), botones de flechas neomórficos e indicadores de puntos (*dots*).

### 4. 📱 Responsividad Total
- **1 Tarjeta visible** en Móvil (`<768px`).
- **2 Tarjetas visibles** en Tablet (`768px - 1024px`).
- **3 Tarjetas visibles** en Escritorio (`>1024px`).

---

## 🛠️ Stack Tecnológico & Herramientas

- **Backend**: Node.js, Express.js (Arquitectura MVC).
- **Frontend**: EJS (Template Engine), HTML5, CSS3 Neomórfico (Google Fonts *Outfit* & *Inter*), JavaScript Vanilla (Zero dependencias pesadas).
- **Bases de Datos & Cloud**: TiDB Cloud (NewSQL), MySQL, MongoDB, PostgreSQL y SQLite.
- **Formularios & Integraciones**: EmailJS (Envío de correos asíncrono desde el cliente).
- **Despliegue & Hosting**: Vercel Serverless Functions (`@vercel/node`) con CDN Edge.

---

## 📂 Estructura del Repositorio

```text
mi-portafolio/
├── api/
│   └── index.js            # Entry Point para Vercel Serverless Function
├── bin/
│   └── www                 # Script de inicio HTTP para entorno local
├── data/
│   └── portfolioData.js    # Información centralizada de experiencia, habilidades y proyectos
├── public/
│   ├── favicon.ico
│   ├── icon/               # Favicons y manifiesto web
│   ├── images/             # Imágenes y foto de perfil
│   ├── javascripts/        # Lógica de cliente
│   │   ├── carousel.js     # Carrusel horizontal con autoplay, drag y touch
│   │   ├── menu.js         # Menú hamburguesa responsivo
│   │   ├── modal.js        # Manejo de modales para casos de estudio
│   │   ├── scroll-velocity.js # Engine de animaciones según velocidad de scroll
│   │   └── theme.js        # Alternador de modo claro/oscuro neomórfico
│   └── stylesheets/
│       └── style.css       # Sistema de diseño Neomórfico global (Soft UI)
├── routes/
│   └── index.js            # Rutas Express (Home & Detalle de Proyectos)
├── views/
│   ├── index.ejs           # Vista principal
│   ├── partials/           # Header y Footer neomórficos
│   └── sections/           # Secciones (skills, projects carrusel, contact, project-detail)
├── app.js                  # Configuración principal de Express
├── package.json            # Dependencias y scripts
└── vercel.json             # Configuración de despliegue en Vercel
```

---

## 📦 Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/luigi1501/mi-portafolio.git
   cd mi-portafolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🤝 Contacto y Redes

- **Sitio Web / Portafolio**: [mi-portafolio-23xe.vercel.app](https://mi-portafolio-23xe.vercel.app/)
- **LinkedIn**: [linkedin.com/in/luis-rodriguez-9b605a3b5](https://www.linkedin.com/in/luis-rodriguez-9b605a3b5)
- **GitHub**: [github.com/luigi1501](https://github.com/luigi1501)
- **Correo**: luisr150104@gmail.com
- **Telegram**: [@luigix15](https://t.me/luigix15)
- **WhatsApp**: [+58 412 452 3599](https://wa.me/+584124523599)
