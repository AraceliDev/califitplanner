import { useState, useEffect } from 'react'
import { Button, Tooltip } from '@heroui/react'
import WorkoutSelector from '@/components/planner/WorkoutSelector'
import ExerciseList from '@/components/planner/ExerciseList'
import WeekSelector from '@/components/planner/WeekSelector'
import WeeklyPlanner from '@/components/planner/WeeklyPlanner'
import PDFGenerator from '@/components/planner/PDFGenerator'
import usePlannerStore from '@/stores/plannerStore'
import Stepper from '@/components/planner/Stepper'

function Rutinas() {
  const [currentStep, setCurrentStep] = useState(1)
  const { selectedWorkout, weeklyPlan } = usePlannerStore()

  // Función para hacer scroll al inicio cuando cambia el paso
  const handleStepChange = (newStep) => {
    setCurrentStep(newStep)
    // Scroll suave al inicio de la página
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const steps = [
    { id: 1, title: 'Semana', description: 'Elige la semana de entrenamiento' },
    { id: 2, title: 'Workouts', description: 'Escoge los tipos de entrenamiento' },
    { id: 3, title: 'Planificar', description: 'Arrastra ejercicios a cada día' },
    { id: 4, title: 'Descargar', description: 'Descarga tu rutina completa' }
  ]

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="max-w-2xl mx-auto">
            <WeekSelector />
            <div className="text-center mt-6">
            </div>
          </div>
        )
      case 2:
        return (
          <div className="max-w-4xl mx-auto">
            <WorkoutSelector />
          </div>
        )
      case 3:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <ExerciseList />
              <div className="text-center mt-4">
                <Button
                  color="primary"
                  variant="bordered"
                  onClick={() => handleStepChange(2)}
                  className="border-amulet-600 text-amulet-600 hover:bg-amulet-50"
                >
                  + Añadir nuevo Workout
                </Button>
              </div>
            </div>
            <div className="lg:col-span-3">
              <WeeklyPlanner />
            </div>
          </div>
        )
      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="bg-amulet-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-amulet-950 mb-4">
                ¡Rutina completada!
              </h3>
              <p className="text-amulet-700 mb-6">
                Tu rutina semanal está lista para descargar
              </p>
            </div>
            <PDFGenerator />
          </div>
        )
      default:
        return null
    }
  }

  const StepNavigation = () => {
    const hasExercises = Object.values(weeklyPlan).some(day => day.length > 0)

    const canGoNext = () => {
      switch (currentStep) {
        case 1: return true 
        case 2: return selectedWorkout !== null
        case 3: return hasExercises
        default: return true
      }
    }

    const canGoPrev = currentStep > 1
    const canGoNextStep = canGoNext() && currentStep < 4

    // Función para obtener el mensaje del tooltip según el paso
    const getTooltipMessage = () => {
      switch (currentStep) {
        case 2:
          return selectedWorkout === null ? "Selecciona primero un workout" : ""
        case 3:
          return !hasExercises ? "Selecciona los ejercicios que deseas realizar esta semana" : ""
        default:
          return ""
      }
    }

    const tooltipMessage = getTooltipMessage()
    const showTooltip = !canGoNextStep && currentStep < 4

    return (
      <div className="flex justify-between mt-8">
        <Button
          onClick={() => handleStepChange(currentStep - 1)}
          disabled={!canGoPrev}
          variant="ghost"
          className="text-amulet-600"
        >
          ← Anterior
        </Button>

        {currentStep < 4 && (
          <>
            {showTooltip ? (
              <Tooltip
                showArrow
                content={tooltipMessage}
                placement="top"
              >
                <div>
                  <Button
                    onClick={() => handleStepChange(currentStep + 1)}
                    disabled={!canGoNextStep}
                    color="success"
                    className="bg-amulet-600 hover:bg-amulet-700"
                  >
                    {currentStep === 3 ? 'Finalizar' : 'Siguiente →'}
                  </Button>
                </div>
              </Tooltip>
            ) : (
              <Button
                onClick={() => handleStepChange(currentStep + 1)}
                disabled={!canGoNextStep}
                color="success"
                className="bg-amulet-600 hover:bg-amulet-700"
              >
                {currentStep === 3 ? 'Finalizar' : 'Siguiente →'}
              </Button>
            )}
          </>
        )}

        {currentStep === 4 && (
          <Button
            onClick={() => handleStepChange(1)}
            variant="ghost"
            className="text-amulet-600"
          >
            Nueva rutina
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="bg-amulet-100 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 md:px-12 py-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-extrabold text-amulet-950 md:text-5xl lg:text-6xl leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amulet-600 via-amulet-500 to-amulet-400">
              Crear Rutina
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amulet-400 to-amulet-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-amulet-700">
            Sigue los pasos para crear tu rutina semanal personalizada
          </p>
        </div>

        {/* Stepper */}
        <Stepper currentStep={currentStep} steps={steps} onStepChange={handleStepChange} />

        {/* Contenido del paso actual */}
        <div className="min-h-[400px]">
          {renderStepContent()}
        </div>

        {/* Navegación de pasos */}
        <StepNavigation />
      </div>
    </div>
  )
}

export default Rutinas