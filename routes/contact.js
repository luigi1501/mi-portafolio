var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET Contacto Page (Redirige a la página principal con el ancla) */
router.get("/", (req, res, next) => {
  // Esto es correcto y redirige a la página principal con el ancla #contacto.
  res.redirect("/#contacto");
});

/* POST Manejar el Envío del Formulario (/contacto) */
router.post("/", (req, res, next) => {
  const { nombre, email, mensaje } = req.body; // 1. Configurar el transportador con las variables de entorno

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  }); // 2. Opciones del correo que vas a recibir

  const mailOptions = {
    from: `"${nombre}" <${email}>`,
    to: process.env.EMAIL_DESTINO,
    subject: `Nuevo Contacto: ${nombre} desde el Portafolio`,
    html: `
      <h2>Detalles del Contacto</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Correo:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="white-space: pre-wrap;">${mensaje}</p>
`,
  }; // 3. Enviar el correo

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar correo:", error);
      const errorMessage = encodeURIComponent(
        "Hubo un error al enviar tu mensaje. Intenta de nuevo."
      );
      return res.redirect(`/?error=${errorMessage}#contacto`);
    } else {
      console.log("Correo enviado: " + info.response);
      const successMessage = encodeURIComponent(
        "¡Mensaje enviado con éxito! Te contactaré pronto."
      );
      return res.redirect(`/?success=${successMessage}#contacto`);
    }
  });
});

module.exports = router;
