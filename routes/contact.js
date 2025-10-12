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

  // 2. Configuración del transportador para SendGrid
  // NOTA IMPORTANTE:
  // En las variables de entorno de Render, debes configurar:
  // - EMAIL_USER: 'apikey'
  // - EMAIL_PASS: TU_API_KEY_DE_SENDGRID
  
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net", // Servidor SMTP de SendGrid
    port: 587, 
    secure: false, // ¡IMPORTANTE! False para el puerto 587 (usa STARTTLS)
    requireTLS: true, // Fuerza el uso de TLS
    auth: {
      user: process.env.EMAIL_USER, // Debe ser 'apikey'
      pass: process.env.EMAIL_PASS, // Tu API Key
    },
  });

  // 3. Opciones del correo que vas a recibir
  const mailOptions = {
    // Es CRUCIAL que el correo en 'from' (EMAIL_DESTINO) esté verificado en SendGrid.
    // Usamos el email del remitente (el cliente) en el cuerpo para saber a quién responder.
    from: process.env.EMAIL_DESTINO, // Tu correo principal (debe ser el verificado)
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
    console.log("Correo enviado con éxito (SendGrid):", info.response);

    const successMessage = encodeURIComponent(
      "¡Mensaje enviado con éxito! Recibí tu consulta y te contactaré pronto."
    );
    // Redirección exitosa (rápida)
    return res.redirect(`/?success=${successMessage}#contacto`);
  } catch (error) {
    // Si hay un error, se captura y se informa.
    console.error("Error FATAL al enviar correo (SendGrid):", error.message || error);

    const errorMessage = encodeURIComponent(
      "Hubo un error al enviar tu mensaje. (Error de red/SMTP). Intenta más tarde o contáctame por LinkedIn."
    );
    // Redirección con error (rápida)
    return res.redirect(`/?error=${errorMessage}#contacto`);
  }
});

module.exports = router;
