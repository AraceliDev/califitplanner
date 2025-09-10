import { Button, Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@heroui/react'
import { DocumentArrowDownIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import jsPDF from 'jspdf'
import usePlannerStore from '@/stores/plannerStore'
import getLogoBase64 from '@/utils/logoUtils'

const PDFGenerator = () => {
  const { selectedWeek, weeklyPlan, clearWeeklyPlan } = usePlannerStore()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isGenerating, setIsGenerating] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  const getWeekDates = () => {
    const dates = []
    const startOfWeek = new Date(selectedWeek)

    // Obtener el día de la semana (0 = domingo, 1 = lunes, etc.)
    const dayOfWeek = startOfWeek.getDay()

    // Calcular días para retroceder hasta el lunes
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1

    // Establecer el lunes de esa semana
    startOfWeek.setDate(startOfWeek.getDate() - daysToSubtract)

    const dayNames = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    const dayLabels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek)
      date.setDate(startOfWeek.getDate() + i)
      dates.push({
        key: dayNames[i],
        label: dayLabels[i],
        date: date.toLocaleDateString('es-ES', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }),
        exercises: weeklyPlan[dayNames[i] as keyof typeof weeklyPlan]
      })
    }
    return dates
  }

  const generatePDF = async () => {
    setIsGenerating(true)
    
    try {
      const weekDates = getWeekDates()
      const startDate = weekDates[0].date
      const endDate = weekDates[6].date

      // Crear nuevo documento PDF
      const doc = new jsPDF('p', 'mm', 'a4') // Portrait, milímetros, A4
      const pageWidth = doc.internal.pageSize.getWidth()
      const pageHeight = doc.internal.pageSize.getHeight()

      // Configuración de colores (tu paleta amulet)
      const colors = {
        primary: '#5d7a4f',      // amulet-600
        secondary: '#a7ba9b',    // amulet-300
        background: '#f4f7f2',   // amulet-50
        text: '#141c12',         // amulet-950
        light: '#e6ebe0'         // amulet-100
      }

      let yPosition = 20 // Posición Y inicial

      // HEADER CON LOGO
      try {
        // Cargar logo como base64 para mayor compatibilidad
        const logoBase64 = await getLogoBase64()
        doc.addImage(logoBase64, 'PNG', 15, 10, 30, 15)
        yPosition += 5
      } catch (error) {
        console.log('Error cargando logo:', error)
        // Si hay problema con el logo, crear marca con texto estilizado
        doc.setFillColor(colors.primary)
        doc.roundedRect(15, 10, 35, 10, 2, 2, 'F')
        doc.setFontSize(12)
        doc.setTextColor(255, 255, 255)
        doc.setFont('helvetica', 'bold')
        doc.text('CALIFIT', 32.5, 16.5, { align: 'center' })
        yPosition += 5
      }

      // Título principal
      doc.setFontSize(24)
      doc.setTextColor(colors.primary)
      doc.setFont('helvetica', 'bold')
      doc.text('CALIFIT PLANNER', 105, yPosition, { align: 'center' })

      yPosition += 10
      doc.setFontSize(16)
      doc.setTextColor(colors.text)
      doc.setFont('helvetica', 'normal')
      doc.text('Rutina Semanal', 105, yPosition, { align: 'center' })

      yPosition += 8
      doc.setFontSize(12)
      doc.setTextColor(colors.secondary)
      doc.text(`${startDate} - ${endDate}`, 105, yPosition, { align: 'center' })

      // Línea separadora
      yPosition += 8
      doc.setDrawColor(colors.primary)
      doc.setLineWidth(0.5)
      doc.line(15, yPosition, 195, yPosition)

      yPosition += 15

      // PLANIFICADOR SEMANAL - TABLA
      doc.setFontSize(14)
      doc.setTextColor(colors.primary)
      doc.setFont('helvetica', 'bold')
      doc.text('PLANIFICACIÓN SEMANAL', 15, yPosition)

      yPosition += 10

      // Encabezados de días
      const dayWidth = 25
      const startX = 15

      weekDates.forEach((day, index) => {
        const x = startX + (index * dayWidth)

        // Fondo del encabezado
        doc.setFillColor(colors.primary)
        doc.rect(x, yPosition, dayWidth - 1, 8, 'F')

        // Texto del día
        doc.setFontSize(10)
        doc.setTextColor(255, 255, 255) // Blanco
        doc.setFont('helvetica', 'bold')
        doc.text(day.label, x + dayWidth / 2, yPosition + 5, { align: 'center' })

        // Fecha
        doc.setFontSize(8)
        const dateOnly = day.date.split('/').slice(0, 2).join('/')
        doc.text(dateOnly, x + dayWidth / 2, yPosition + 7, { align: 'center' })
      })

      yPosition += 8

      // Contenido de ejercicios por día
      const maxExercises = Math.max(...weekDates.map(d => d.exercises.length), 5)
      const exerciseHeight = 25

      for (let exerciseIndex = 0; exerciseIndex < maxExercises; exerciseIndex++) {
        weekDates.forEach((day, dayIndex) => {
          const x = startX + (dayIndex * dayWidth)

          // Fondo alternado
          if (exerciseIndex % 2 === 0) {
            doc.setFillColor(colors.background)
            doc.rect(x, yPosition, dayWidth - 1, exerciseHeight, 'F')
          }

          // Borde
          doc.setDrawColor(colors.light)
          doc.rect(x, yPosition, dayWidth - 1, exerciseHeight)

          // Ejercicio si existe
          const exercise = day.exercises[exerciseIndex]
          if (exercise) {
            doc.setFontSize(7)
            doc.setTextColor(colors.text)
            doc.setFont('helvetica', 'normal')

            // Nombre del ejercicio (truncado)
            const exerciseName = exercise.exercise.nombre.length > 15
              ? exercise.exercise.nombre.substring(0, 15) + '...'
              : exercise.exercise.nombre

            doc.text(exerciseName, x + 1, yPosition + 4, { maxWidth: dayWidth - 2 })

            // Detalles del ejercicio
            doc.setFontSize(6)
            doc.setTextColor(colors.text) // Cambio a texto principal más oscuro
            const details = []
            if (exercise.exercise.repeticiones) details.push(`${exercise.exercise.repeticiones} reps`)
            if (exercise.exercise.tiempo) details.push(exercise.exercise.tiempo)
            details.push(`${exercise.exercise.series}s`)

            doc.text(details.join(' • '), x + 1, yPosition + 8)
            doc.text(`${exercise.exercise.descanso}s desc`, x + 1, yPosition + 11)
          }
        })
        yPosition += exerciseHeight
      }

      // Nueva página para detalle de ejercicios
      if (Object.values(weeklyPlan).some(day => day.length > 0)) {
        doc.addPage()
        yPosition = 20

        // Título de la segunda página
        doc.setFontSize(18)
        doc.setTextColor(colors.primary)
        doc.setFont('helvetica', 'bold')
        doc.text('DETALLE DE EJERCICIOS', 15, yPosition)

        yPosition += 15

        // Agrupar ejercicios por workout
        const workoutExercises = weekDates.reduce((acc, day) => {
          day.exercises.forEach(pe => {
            if (!acc[pe.workoutName]) {
              acc[pe.workoutName] = []
            }
            if (!acc[pe.workoutName].find(e => e.id === pe.exercise.id)) {
              acc[pe.workoutName].push(pe.exercise)
            }
          })
          return acc
        }, {} as Record<string, any[]>)

        // Mostrar cada workout y sus ejercicios
        Object.entries(workoutExercises).forEach(([workoutName, exercises]) => {
          // Verificar si necesitamos nueva página
          if (yPosition > 250) {
            doc.addPage()
            yPosition = 20
          }

          // Título del workout
          doc.setFillColor(colors.primary)
          doc.rect(15, yPosition - 5, 180, 10, 'F')
          doc.setFontSize(12)
          doc.setTextColor(255, 255, 255)
          doc.setFont('helvetica', 'bold')
          doc.text(workoutName, 20, yPosition)

          yPosition += 15

          exercises.forEach((exercise) => {
            // Verificar espacio para el ejercicio
            if (yPosition > 250) {
              doc.addPage()
              yPosition = 20
            }

            // Nombre del ejercicio
            doc.setFontSize(11)
            doc.setTextColor(colors.text)
            doc.setFont('helvetica', 'bold')
            doc.text(exercise.nombre, 20, yPosition)

            yPosition += 5

            // Descripción
            doc.setFontSize(9)
            doc.setTextColor(colors.text)
            doc.setFont('helvetica', 'normal')
            const descriptionLines = doc.splitTextToSize(exercise.descripcion, 160)
            doc.text(descriptionLines, 20, yPosition)
            yPosition += descriptionLines.length * 4

            // Detalles del ejercicio
            doc.setFontSize(10)
            doc.setTextColor(colors.primary)
            doc.setFont('helvetica', 'bold')
            const details = []
            if (exercise.repeticiones) details.push(`${exercise.repeticiones} repeticiones`)
            if (exercise.tiempo) details.push(exercise.tiempo)
            details.push(`${exercise.series} series`)
            details.push(`${exercise.descanso} segundos de descanso`)

            doc.text(details.join(' • '), 20, yPosition)
            yPosition += 10
          })

          yPosition += 5
        })
      }

      // Footer en todas las páginas
      const pageCount = doc.getNumberOfPages()
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i)
        doc.setFontSize(8)
        doc.setTextColor(colors.secondary)
        doc.text('Generado con CaliFit Planner', 105, 285, { align: 'center' })
        doc.text(`Página ${i} de ${pageCount}`, 195, 285, { align: 'right' })
      }

      // Guardar el PDF
      doc.save(`rutina-califit-${startDate.replace(/\//g, '-')}.pdf`)
      
      // Mostrar éxito y abrir modal
      setDownloadSuccess(true)
      onOpen()
      
    } catch (error) {
      console.error('Error generando PDF:', error)
      // Aquí podrías mostrar un toast de error
    } finally {
      setIsGenerating(false)
    }
  }

  const handleResetPlanner = () => {
    clearWeeklyPlan()
    setDownloadSuccess(false)
    onClose()
  }

  const handleKeepPlanner = () => {
    setDownloadSuccess(false)
    onClose()
  }

  const hasExercises = Object.values(weeklyPlan).some(dayExercises => dayExercises.length > 0)

  return (
    <>
      <div className="flex justify-center pt-6">
        {!hasExercises ? (
          <Tooltip
            showArrow
            content="Agrega ejercicios a tu planificación para poder descargar el PDF"
            placement="top"
          >
            <div>
              <Button
                color="success"
                size="lg"
                startContent={<DocumentArrowDownIcon className="w-5 h-5" />}
                onClick={generatePDF}
                isDisabled={true}
                className="bg-amulet-600 hover:bg-amulet-700 text-white font-medium px-8"
              >
                Descargar PDF
              </Button>
            </div>
          </Tooltip>
        ) : (
          <Button
            color="success"
            size="lg"
            startContent={<DocumentArrowDownIcon className="w-5 h-5" />}
            onClick={generatePDF}
            isLoading={isGenerating}
            className="bg-amulet-600 hover:bg-amulet-700 text-white font-medium px-8"
          >
            {isGenerating ? 'Generando PDF...' : 'Descargar PDF'}
          </Button>
        )}
      </div>

      {/* Modal de confirmación después de descargar */}
      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        placement="center"
        backdrop="blur"
        closeButton={false}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-center">
            <div className="flex justify-center mb-2">
              <CheckCircleIcon className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-amulet-950">¡PDF Descargado!</h3>
          </ModalHeader>
          <ModalBody className="text-center">
            <p className="text-amulet-700">
              Tu rutina se ha descargado exitosamente. 
            </p>
            <p className="text-amulet-600 text-sm">
              ¿Qué quieres hacer con tu planificación actual?
            </p>
          </ModalBody>
          <ModalFooter className="flex justify-center gap-3">
            <Button
              variant="flat"
              onClick={handleKeepPlanner}
              className="bg-amulet-100 text-amulet-700 hover:bg-amulet-200"
            >
              Mantener rutina
            </Button>
            <Button
              color="success"
              onClick={handleResetPlanner}
              className="bg-amulet-600 hover:bg-amulet-700 text-white"
            >
              Crear nueva rutina
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PDFGenerator