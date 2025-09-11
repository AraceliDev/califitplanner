// Ejemplo de cómo agregar tu logo al PDF

// 1. Convierte tu logo a base64 (online o con código)
const logoBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANS...' // Tu logo en base64

// 2. En el generatePDF, después de crear el doc:
doc.addImage(logoBase64, 'PNG', 15, 10, 55, 10) // x, y, width, height

// 3. O si tienes el archivo del logo en public/images/:
const logoUrl = '/images/logos/logocalifitPDF.png'
doc.addImage(logoUrl, 'PNG', 15, 10, 30, 15)

export const addLogoToPDF = (doc: jsPDF, logoData: string) => {
  try {
    // Logo en la esquina superior izquierda
    doc.addImage(logoData, 'PNG', 15, 10, 30, 15)
    return true
  } catch (error) {
    console.error('Error al agregar logo:', error)
    return false
  }
}