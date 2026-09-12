var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();

// Configuración del motor de vistas optimizada para Vercel Serverless
app.set("views", path.join(process.cwd(), "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), "public")));

// Helper global para icons de tecnologías
app.use(function (req, res, next) {
  res.locals.getTechIcon = function (techName) {
    if (!techName) return { type: 'none' };
    const cleanTag = techName.toLowerCase().split('(')[0].trim();
    switch (cleanTag) {
      case 'node.js':
      case 'node':
        return { type: 'devicon', class: 'devicon-nodejs-plain colored' };
      case 'express':
        return { type: 'devicon', class: 'devicon-express-original' };
      case '.net 10':
      case '.net':
      case '.net maui':
      case 'asp.net core web api':
        return { type: 'devicon', class: 'devicon-dotnetcore-plain colored' };
      case 'c#':
        return { type: 'devicon', class: 'devicon-csharp-plain colored' };
      case 'python':
        return { type: 'devicon', class: 'devicon-python-plain colored' };
      case 'flask':
        return { type: 'devicon', class: 'devicon-flask-original colored' };
      case 'django':
        return { type: 'devicon', class: 'devicon-django-plain colored' };
      case 'blazor':
        return { type: 'devicon', class: 'devicon-blazor-original colored' };
      case 'tailwind css':
      case 'tailwind':
        return { type: 'devicon', class: 'devicon-tailwindcss-plain colored' };
      case 'javascript':
      case 'js':
        return { type: 'devicon', class: 'devicon-javascript-plain colored' };
      case 'mongodb':
        return { type: 'devicon', class: 'devicon-mongodb-plain colored' };
      case 'mysql':
        return { type: 'devicon', class: 'devicon-mysql-plain colored' };
      case 'postgresql':
        return { type: 'devicon', class: 'devicon-postgresql-plain colored' };
      case 'sqlite':
        return { type: 'devicon', class: 'devicon-sqlite-plain colored' };
      case 'supabase':
        return { type: 'devicon', class: 'devicon-supabase-plain colored' };
      case 'html5':
      case 'html':
        return { type: 'devicon', class: 'devicon-html5-plain colored' };
      case 'css3':
      case 'css':
        return { type: 'devicon', class: 'devicon-css3-plain colored' };
      case 'bootstrap':
        return { type: 'devicon', class: 'devicon-bootstrap-plain colored' };
      case 'vercel':
        return { type: 'devicon', class: 'devicon-vercel-original' };
      case 'chart.js':
        return { type: 'devicon', class: 'devicon-chartjs-plain colored' };
      case 'ejs':
        return { type: 'img', src: '/images/ejs.svg' };
      case 'tidb':
      case 'tidb cloud':
        return { type: 'img', src: '/images/tidb.svg' };
      case 'sql/nosql':
        return { type: 'svg', html: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#60a5fa" stroke-width="2" style="vertical-align:middle;flex-shrink:0"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>' };
      case 'restful apis':
        return { type: 'svg', html: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;flex-shrink:0"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>' };
      case 'qr code scanner':
        return { type: 'svg', html: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#34d399" stroke-width="2" style="vertical-align:middle;flex-shrink:0"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' };
      default:
        return { type: 'none' };
    }
  };
  next();
});

app.use("/", indexRouter);

// Manejo de errores 404
app.use(function (req, res, next) {
  next(createError(404));
});

// Handler de errores
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
