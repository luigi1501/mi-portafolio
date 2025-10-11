var express = require("express");
var router = express.Router();
var createError = require("http-errors");
var portfolioData = require("../data/potafolioData");

/* GET Home Page (/) - La página única que renderiza TODAS las secciones */
router.get("/", (req, res, next) => {
  // Captura los mensajes de estado (success/error) pasados por el redirect del formulario de contacto
  const success = req.query.success || null;
  const error = req.query.error || null;

  res.render("index", {
    title: "Mi Portafolio | Full Stack Developer", // Variables de datos para el renderizado de secciones

    experiencia: portfolioData.experiencia,
    skillsPorCategoria: portfolioData.skills,
    periodoExperiencia: portfolioData.experiencia.periodo,
    todosLosProyectos: portfolioData.proyectos, // Muestra los 3 proyectos más recientes en la página de inicio (Hero)

    proyectosRecientes: portfolioData.proyectos.slice(0, 3), // Pasa los mensajes de estado a la vista para renderizar la alerta

    success: success,
    error: error,
  });
});

/* -----------------------------------------------------------
   RUTAS DE REDIRECCIÓN (Para navegación de Página Única)
   ----------------------------------------------------------- */

/* GET Proyectos List Page (/proyectos) - Redirige a la sección #proyectos de la Home. */
router.get("/proyectos", (req, res, next) => {
  res.redirect("/#proyectos");
});

/* GET Habilidades y Experiencia Page (/habilidades) - Redirige a la sección #habilidades de la Home. */
router.get("/habilidades", (req, res, next) => {
  res.redirect("/#habilidades");
});

/* -----------------------------------------------------------
   RUTAS DE DETALLE (Renderiza una vista específica)
   ----------------------------------------------------------- */

/* GET Detalle del Proyecto Page */
router.get("/proyectos/:slug", (req, res, next) => {
  const slug = req.params.slug;
  const proyecto = portfolioData.proyectos.find((p) => p.slug === slug); // Manejo de error 404 si no se encuentra el proyecto

  if (!proyecto) {
    return next(createError(404));
  }

  res.render("project-detail", {
    title: proyecto.nombre,
    proyecto: proyecto,
  });
});

module.exports = router;
