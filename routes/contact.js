var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer"); // Usamos Nodemailer

/* GET Contacto Page (Redirige a la página principal con el ancla) */
router.get("/", (req, res, next) => {
  // Esto es correcto y redirige a la página principal con el ancla #contacto.
  res.redirect("/#contacto");
});

/* POST Manejar el Envío del Formulario (/contacto) */
router.post("/", async (req, res, next) => {
  // 1. Obtener datos del formulario
  const { nombre, email, mensaje } = req.body;

  // 2. Configuración del transportador para GMAIL (Usando 587 + STARTTLS)
  // Utiliza tus variables de entorno existentes: EMAIL_USER y EMAIL_PASS (la clave de aplicación de Gmail).
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Servidor SMTP de Gmail
    port: 587, 
    secure: false, // ¡IMPORTANTE! False para el puerto 587 (usa STARTTLS)
    requireTLS: true, // Fuerza el uso de TLS
    auth: {
      user: process.env.EMAIL_USER, // Tu correo
      pass: process.env.EMAIL_PASS, // Tu clave de aplicación de Gmail (16 dígitos)
    },
  });

  // 3. Opciones del correo que vas a recibir
  const mailOptions = {
    // El correo en 'from' DEBE ser el mismo que el de autenticación (EMAIL_USER).
    from: process.env.EMAIL_USER, 
    to: process.env.EMAIL_DESTINO,
    subject: `[PORTAFOLIO] Nuevo Mensaje de ${nombre}`,
    html: `
      <h2>Detalles del Contacto</h2>
      <p>Este mensaje fue enviado por: <strong>${nombre}</strong></p>
      <p>Su correo de contacto es: <strong>${email}</strong></p>
      <hr>
      <h3>Mensaje:</h3>
      <p style="white-space: pre-wrap; background-color: #f7f7f7; padding: 15px; border-radius: 5px; border-left: 5px solid #007bff;">${mensaje}</p>
      <hr>
      <p>Recuerda responder al correo: ${email}</p>
    `,
  };

  // 4. Enviar el correo usando async/await
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado con éxito (Gmail 587):", info.response);

    const successMessage = encodeURIComponent(
      "¡Mensaje enviado con éxito! Recibí tu consulta y te contactaré pronto."
    );
    // Redirección exitosa (rápida)
    return res.redirect(`/?success=${successMessage}#contacto`);
  } catch (error) {
    // Si hay un error, se captura y se informa.
    console.error("Error FATAL al enviar correo (Gmail 587):", error.message || error);

    const errorMessage = encodeURIComponent(
      "Hubo un error al enviar tu mensaje. (Error de red/SMTP). Intenta más tarde."
    );
    // Redirección con error (rápida)
    return res.redirect(`/?error=${errorMessage}#contacto`);
  }
});

module.exports = router;
