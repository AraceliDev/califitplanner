import { useState, useEffect } from 'react'

interface Step {
  id: number
  title: string
  description: string
}

interface StepperProps {
  currentStep: number
  steps: Step[]
  onStepChange?: (stepId: number) => void
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

const Stepper = ({ currentStep, steps, onStepChange }: StepperProps) => {
  const isMobile = useIsMobile()

  if (isMobile) {
    const currentStepData = steps.find(step => step.id === currentStep)
    
    return (
      <div className="mb-8">
        {/* Indicador de progreso */}
        <div className="flex justify-center mb-4">
          <div className="bg-amulet-200 rounded-full h-2 w-full max-w-xs">
            <div 
              className="bg-amulet-600 h-2 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Información del paso actual */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-amulet-600 text-white rounded-full text-lg font-semibold mb-3">
            {currentStep}
          </div>
          <h3 className="text-lg font-semibold text-amulet-950 mb-1">
            {currentStepData?.title}
          </h3>
          <p className="text-sm text-amulet-700 max-w-xs mx-auto">
            {currentStepData?.description}
          </p>
          <p className="text-xs text-amulet-500 mt-2">
            Paso {currentStep} de {steps.length}
          </p>
        </div>
      </div>
    )
  }

  // Versión desktop: Stepper horizontal completo
  return (
    <div className="mb-8">
      <div className="flex justify-center items-center overflow-x-auto pb-4">
        <div className="flex items-center space-x-4 min-w-fit">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              {/* Contenedor del paso */}
              <div className="flex flex-col items-center min-w-0">
                {/* Círculo del paso */}
                <div 
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold
                    transition-all duration-200 cursor-pointer hover:scale-105
                    ${currentStep >= step.id
                      ? 'bg-amulet-600 text-white shadow-lg'
                      : 'bg-amulet-200 text-amulet-600 hover:bg-amulet-300'
                    }
                  `}
                  onClick={() => onStepChange?.(step.id)}
                >
                  {step.id}
                </div>
                
                {/* Título y descripción */}
                <div className="text-center mt-3 max-w-24">
                  <h3 className={`text-sm font-medium mb-1 ${
                    currentStep >= step.id ? 'text-amulet-950' : 'text-amulet-600'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-amulet-500 leading-tight hidden sm:block">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Línea conectora */}
              {index < steps.length - 1 && (
                <div className="flex-shrink-0 mx-4">
                  <div className={`
                    w-16 h-1 rounded-full transition-all duration-300
                    ${currentStep > step.id ? 'bg-amulet-600' : 'bg-amulet-200'}
                  `} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stepper