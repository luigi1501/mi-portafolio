# 🚀 Mi Portafolio Profesional — Luis Rodríguez

![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)
![Node.js](https://img.shields.io/badge/Node.js-v18+-6366f1?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express)
![EJS](https://img.shields.io/badge/Frontend-EJS%20%7C%20CSS3%20%7C%20JS-8b5cf6?style=for-the-badge)

Repositorio central del portafolio profesional de **Luis Rodríguez**, Desarrollador Full Stack. El sitio web está diseñado para mostrar de forma dinámica, moderna y responsiva mis proyectos clave, experiencia profesional y stack tecnológico.

🌐 **Demo En Vivo**: [https://mi-portafolio-23xe.vercel.app/](https://mi-portafolio-23xe.vercel.app/)

---

## 🛠️ Stack Tecnológico & Herramientas

- **Backend**: Node.js, Express.js (Arquitectura MVC).
- **Frontend**: EJS (Template Engine), HTML5, CSS3 (Sistema de Tokens HSL, Glassmorphism, Google Fonts *Outfit* & *Inter*), JavaScript Vanilla.
- **Bases de Datos & Cloud**: Experiencia técnica con TiDB Cloud (NewSQL), MySQL, MongoDB, PostgreSQL y SQLite.
- **Formularios & Integraciones**: EmailJS (Envío asíncrono de correos en cliente).
- **Despliegue & Hosting**: Vercel Serverless Functions (`@vercel/node`) optimizado para Vercel Edge CDN.

---

## ✨ Características Principales

- 🎨 **Diseño Moderno & UI/UX Premium**: Interfaz fluida con Glassmorphism, gradientes atractivos y micro-interacciones.
- 🌙 **Modo Oscuro Integrado**: Alternador de tema (Claro / Oscuro) con persistencia en `localStorage` y sincronización de `<meta name="theme-color">`.
- 📱 **100% Responsivo**: Adaptado perfectamente a dispositivos móviles, tablets y monitores de escritorio.
- ⚡ **Optimizado para Vercel Serverless**: Configuración con `vercel.json` e `includeFiles` para máximo rendimiento y carga estática ultrarrápida.
- 🔍 **SEO & Open Graph**: Metadatos optimizados para buscadores y vistas previas enriquecidas en LinkedIn, Twitter y WhatsApp.

---

## 📂 Estructura del Repositorio

```text
mi-portafolio/
├── api/
│   └── index.js            # Entry Point para Vercel Serverless Function
├── bin/
│   └── www                 # Script de inicio HTTP para entorno local
├── data/
│   └── portfolioData.js    # Data centralizada de experiencia, habilidades y proyectos
├── public/
│   ├── favicon.ico
│   ├── favicon.png
│   ├── icon/               # Favicons y manifiesto web
│   ├── images/             # Imágenes y foto de perfil
│   ├── javascripts/        # Lógica de cliente (menu.js, modal.js, theme.js)
│   └── stylesheets/        # Estilos CSS globales (style.css)
├── routes/
│   └── index.js            # Controladores de rutas principales (Home & Detalle de Proyectos)
├── views/
│   ├── index.ejs           # Vista principal (Página Única)
│   ├── partials/           # Componentes reutilizables (header.ejs, footer.ejs)
│   └── sections/           # Secciones (skills.ejs, projects.ejs, contact.ejs, project-detail.ejs)
├── app.js                  # Configuración principal del servidor Express
├── package.json            # Dependencias y scripts del proyecto
└── vercel.json             # Configuración de despliegue en Vercel
```

---

## 📦 Instalación y Ejecución Local

Para ejecutar el proyecto en tu entorno local:

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

4. **Ejecutar en modo producción local:**
   ```bash
   npm start
   ```

---

## 🤝 Contacto y Redes

- **Sitio Web / Portafolio**: [mi-portafolio-23xe.vercel.app](https://mi-portafolio-23xe.vercel.app/)
- **LinkedIn**: [linkedin.com/in/luis-rodriguez-9b605a3b5](https://www.linkedin.com/in/luis-rodriguez-9b605a3b5)
- **GitHub**: [github.com/luigi1501](https://github.com/luigi1501)
- **Correo**: luisr150104@gmail.com
- **Telegram**: [@luigix15](https://t.me/luigix15)
- **WhatsApp**: [+58 412 452 3599](https://wa.me/+584124523599)
