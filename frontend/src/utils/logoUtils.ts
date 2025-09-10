// Función para convertir imagen a base64
const getLogoBase64 = async (): Promise<string> => {
  try {
    const response = await fetch('/images/logos/logoCalifitPDF.png')
    const blob = await response.blob()
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  } catch (error) {
    console.error('Error cargando logo:', error)
    throw error
  }
}

export default getLogoBase64