var express = require("express");
var router = express.Router();
var createError = require("http-errors");
var portfolioData = require("../data/portfolioData");

/* GET Home Page (/) - La página única que renderiza TODAS las secciones */
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Luis Rodríguez | Full Stack Developer & Software Engineer",
    experiencia: portfolioData.experiencia,
    skillsPorCategoria: portfolioData.skills,
    periodoExperiencia: portfolioData.experiencia.periodo,
    todosLosProyectos: portfolioData.proyectos,
    proyectosRecientes: portfolioData.proyectos.slice(0, 3),
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
  const proyecto = portfolioData.proyectos.find((p) => p.slug === slug);

  if (!proyecto) {
    return next(createError(404));
  }

  res.render("sections/project-detail", {
    title: `${proyecto.nombre} | Luis Rodríguez`,
    proyecto: proyecto,
  });
});

module.exports = router;
