var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET Contacto Page (Redirige a la página principal con el ancla) */
router.get("/", (req, res, next) => {
  // Esto es correcto y redirige a la página principal con el ancla #contacto.
  res.redirect("/#contacto");
});

/* POST Manejar el Envío del Formulario (/contacto) */
router.post("/", async (req, res, next) => {
  // 1. Obtener datos del formulario
  const { nombre, email, mensaje } = req.body;

  // 2. Configuración EXPLÍCITA del transportador para Gmail (SMTP con SSL/TLS)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, 
    secure: true, // true para puerto 465 (SSL)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // La clave de aplicación de Google
    },
  });

  // 3. Opciones del correo que vas a recibir
  const mailOptions = {
    from: `"${nombre}" <${email}>`,
    to: process.env.EMAIL_DESTINO,
    subject: `Nuevo Contacto: ${nombre} desde el Portafolio`,
    html: `
      <h2>Detalles del Contacto</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Correo:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="white-space: pre-wrap; background-color: #f7f7f7; padding: 15px; border-radius: 5px;">${mensaje}</p>
    `,
  };

  // 4. Enviar el correo usando async/await
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info.response);

    const successMessage = encodeURIComponent(
      "¡Mensaje enviado con éxito! Te contactaré pronto."
    );
    // Redirección exitosa (rápida)
    return res.redirect(`/?success=${successMessage}#contacto`);
  } catch (error) {
    // Si hay un error (ej. credenciales incorrectas o timeout), se captura y se informa.
    console.error("Error al enviar correo (Catch):", error.message || error);

    const errorMessage = encodeURIComponent(
      "Hubo un error al enviar tu mensaje. Verifica tu conexión o intenta más tarde."
    );
    // Redirección con error (rápida)
    return res.redirect(`/?error=${errorMessage}#contacto`);
  }
});

module.exports = router;
