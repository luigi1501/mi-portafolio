/**
 * Script: add-qr-to-cv.js
 * Genera un QR con la URL del portafolio y lo incrusta en los CVs.
 * Uso: node scripts/add-qr-to-cv.js
 */

const { PDFDocument, rgb } = require("pdf-lib");
const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const PORTFOLIO_URL = "https://mi-portafolio-23xe.vercel.app/";

// PDFs a modificar (en public/images/)
const PDFS = [
  "Curriculum Luigi.pdf",
  "CV_Luis_Rodriguez.pdf",
];

// Tamaño del QR en puntos PDF (1 punto = 1/72 pulgada)
const QR_SIZE = 95;

// Posición: espacio en blanco a la derecha de los datos personales (Teléfono, Cédula, Email, etc.)
// A4: 595 x 842 pts
const QR_X = 455;   // a la derecha de la columna de texto de datos personales
const QR_Y = 572;   // justo encima de la línea de FORMACIÓN ACADÉMICA

async function generateQRBuffer() {
  return await QRCode.toBuffer(PORTFOLIO_URL, {
    type: "png",
    width: 300,
    margin: 1,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
    errorCorrectionLevel: "H",
  });
}

async function addQRToPDF(pdfPath, qrBuffer) {
  const pdfBytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);

  const qrImage = await pdfDoc.embedPng(qrBuffer);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();

  // Posición: mitad derecha, sección de datos personales
  const x = QR_X;
  const y = QR_Y;

  // Limpiar/cubrir cualquier QR previo en la plantilla con un recuadro blanco
  firstPage.drawRectangle({
    x: 440,
    y: 565,
    width: 125,
    height: 125,
    color: rgb(1, 1, 1),
  });

  // Dibujar el nuevo QR oficial
  firstPage.drawImage(qrImage, {
    x,
    y,
    width: QR_SIZE,
    height: QR_SIZE,
  });

  const modifiedPdfBytes = await pdfDoc.save();
  fs.writeFileSync(pdfPath, modifiedPdfBytes);

  console.log(`✅ QR agregado a: ${path.basename(pdfPath)}`);
  console.log(`   Posición: x=${Math.round(x)}, y=${Math.round(y)} (mitad derecha - datos personales)`);
  console.log(`   Tamaño: ${QR_SIZE}x${QR_SIZE} pts`);
}

async function main() {
  console.log("🔗 URL del portafolio:", PORTFOLIO_URL);
  console.log("📱 Generando QR...\n");

  const qrBuffer = await generateQRBuffer();

  const imagesDir = path.join(__dirname, "..", "public", "images");

  for (const pdfName of PDFS) {
    const pdfPath = path.join(imagesDir, pdfName);

    // Restaurar PDF limpio desde git si existe, para evitar acumular varios QRs
    try {
      execSync(`git checkout -- "${pdfPath}"`, { stdio: "ignore" });
    } catch (_) {}

    if (!fs.existsSync(pdfPath)) {
      console.warn(`⚠️  No encontrado: ${pdfName}`);
      continue;
    }

    await addQRToPDF(pdfPath, qrBuffer);
  }

  console.log("\n✨ ¡Listo! Los PDFs han sido actualizados con el QR.");
  console.log("   El QR apunta directamente a tu portafolio sin intermediarios.");
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
