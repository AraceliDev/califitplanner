import { Card, CardBody, Chip, Checkbox, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@heroui/react'
import { useState, useEffect } from 'react'
import usePlannerStore from '@/stores/plannerStore'
import type { Exercise } from '@/types/workout'
import type { WeeklyPlan } from '@/stores/plannerStore'

// Hook para detectar dispositivos móviles/tablets
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

interface DraggableExerciseProps {
  exercise: Exercise
  onDragStart: (e: React.DragEvent, exercise: Exercise) => void
  isSelected?: boolean
  onToggle?: (exercise: Exercise, isSelected: boolean) => void
  isMobile?: boolean
}

const DraggableExercise = ({ 
  exercise, 
  onDragStart, 
  isSelected = false, 
  onToggle, 
  isMobile = false 
}: DraggableExerciseProps) => {
  const cardClasses = isMobile 
    ? "bg-amulet-200 hover:bg-amulet-300 transition-colors cursor-pointer" 
    : "bg-amulet-200 hover:bg-amulet-300 transition-colors cursor-grab active:cursor-grabbing"

  const handleClick = () => {
    if (isMobile && onToggle) {
      onToggle(exercise, !isSelected)
    }
  }

  return (
    <Card
      className={cardClasses}
      {...(!isMobile && {
        draggable: true,
        onDragStart: (e) => onDragStart(e, exercise)
      })}
      {...(isMobile && { onClick: handleClick })}
    >
      <CardBody className="p-3">
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            {isMobile && (
              <Checkbox 
                isSelected={isSelected}
                onValueChange={(checked) => onToggle?.(exercise, checked)}
                color="success"
                className="mt-1"
              />
            )}
            <div className="flex-1">
              <h4 className="font-medium text-sm text-amulet-950">
                {exercise.nombre}
              </h4>
              <p className="text-xs text-amulet-700 line-clamp-2">
                {exercise.descripcion}
              </p>
            </div>
          </div>
          
          <div className="flex gap-1 flex-wrap">
            {exercise.repeticiones && (
              <Chip size="sm" variant="flat" className="bg-amulet-100 text-amulet-800">
                {exercise.repeticiones} reps
              </Chip>
            )}
            {exercise.tiempo && (
              <Chip size="sm" variant="flat" className="bg-amulet-100 text-amulet-800">
                {exercise.tiempo}
              </Chip>
            )}
            <Chip size="sm" variant="flat" className="bg-amulet-100 text-amulet-800">
              {exercise.series} series
            </Chip>
            <Chip size="sm" variant="flat" className="bg-amulet-100 text-amulet-800">
              {exercise.descanso}s desc
            </Chip>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

// Modal para seleccionar día de la semana
interface DaySelectionModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectDay: (day: keyof WeeklyPlan) => void
  selectedExercises: Exercise[]
}

const DaySelectionModal = ({ isOpen, onClose, onSelectDay, selectedExercises }: DaySelectionModalProps) => {
  const DAY_OPTIONS = [
    { key: 'monday', label: 'Lunes' },
    { key: 'tuesday', label: 'Martes' },
    { key: 'wednesday', label: 'Miércoles' },
    { key: 'thursday', label: 'Jueves' },
    { key: 'friday', label: 'Viernes' },
    { key: 'saturday', label: 'Sábado' },
    { key: 'sunday', label: 'Domingo' }
  ] as const

  const handleDaySelect = (day: keyof WeeklyPlan) => {
    onSelectDay(day)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} placement="center">
      <ModalContent>
        <ModalHeader className="text-amulet-950">
          Seleccionar día para {selectedExercises.length} ejercicio(s)
        </ModalHeader>
        <ModalBody>
          <div className="space-y-2">
            {DAY_OPTIONS.map(({ key, label }) => (
              <Button
                key={key}
                variant="flat"
                className="w-full justify-start bg-amulet-100 hover:bg-amulet-200 text-amulet-800"
                onClick={() => handleDaySelect(key)}
              >
                {label}
              </Button>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onPress={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

const ExerciseList = () => {
  const { selectedWorkout, addExerciseToDay } = usePlannerStore()
  const isMobile = useIsMobile()
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleDragStart = (e: React.DragEvent, exercise: Exercise) => {
    e.dataTransfer.setData('application/json', JSON.stringify(exercise))
    e.dataTransfer.effectAllowed = 'copy'
  }

  const handleExerciseToggle = (exercise: Exercise, isSelected: boolean) => {
    setSelectedExercises(prev => {
      if (isSelected) {
        return [...prev, exercise]
      } else {
        return prev.filter(ex => ex.id !== exercise.id)
      }
    })
  }

  const handleAddToDay = (day: keyof WeeklyPlan) => {
    selectedExercises.forEach(exercise => {
      addExerciseToDay(exercise, day)
    })
    setSelectedExercises([])
  }

  const clearSelection = () => {
    setSelectedExercises([])
  }

  if (!selectedWorkout) {
    return (
      <div className="text-center text-amulet-600 p-8">
        <p>Selecciona un workout para ver los ejercicios</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-amulet-950">EJERCICIOS</h2>
        <div className="flex gap-2">
          <Chip
            variant="flat"
            className="bg-amulet-200 text-amulet-800"
          >
            {selectedWorkout.level}
          </Chip>
          <Chip
            variant="flat"
            className="bg-amulet-200 text-amulet-800"
          >
            {selectedWorkout.name}
          </Chip>
        </div>
      </div>

      {/* Botones de acción para móvil */}
      {isMobile && (
        <div className="flex gap-2 flex-wrap">
          <Button
            color="success"
            variant="flat"
            size="sm"
            onPress={onOpen}
            isDisabled={selectedExercises.length === 0}
            className="bg-amulet-500 hover:bg-amulet-600 text-white"
          >
            Agregar {selectedExercises.length > 0 && `(${selectedExercises.length})`}
          </Button>
          {selectedExercises.length > 0 && (
            <Button
              variant="light"
              size="sm"
              onPress={clearSelection}
              className="text-amulet-600"
            >
              Limpiar selección
            </Button>
          )}
        </div>
      )}

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {selectedWorkout.exercises.map((exercise) => (
          <DraggableExercise
            key={exercise.id}
            exercise={exercise}
            onDragStart={handleDragStart}
            isSelected={selectedExercises.some(ex => ex.id === exercise.id)}
            onToggle={handleExerciseToggle}
            isMobile={isMobile}
          />
        ))}
      </div>

      <div className="text-xs text-amulet-600 bg-amulet-50 p-3 rounded-lg">
        💡 <strong>Tip:</strong> {isMobile 
          ? 'Selecciona los ejercicios que deseas agregar y elige el día de entrenamiento.' 
          : 'Arrastra los ejercicios al día que deseas entrenar.'
        } Se recomiendan de 4 a 10 ejercicios por día de entrenamiento.
      </div>

      {/* Modal para seleccionar día */}
      <DaySelectionModal
        isOpen={isOpen}
        onClose={onClose}
        onSelectDay={handleAddToDay}
        selectedExercises={selectedExercises}
      />
    </div>
  )
}

export default ExerciseList