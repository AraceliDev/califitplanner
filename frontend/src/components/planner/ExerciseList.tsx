import { Card, CardBody, Chip, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Image } from '@heroui/react'
import { useState, useEffect } from 'react'
import usePlannerStore from '@/stores/plannerStore'
import type { Exercise } from '@/types/workout'
import type { WeeklyPlan } from '@/stores/plannerStore'
import { IoMdAdd, IoMdCheckmark, IoMdStar, IoMdEye } from 'react-icons/io'
import toast from 'react-hot-toast'

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
  onViewImage?: (exercise: Exercise) => void
  isAdded?: boolean
  isAddedToDay?: boolean
}

const DraggableExercise = ({
  exercise,
  onDragStart,
  isSelected = false,
  onToggle,
  isMobile = false,
  onViewImage,
  isAdded = false,
  isAddedToDay = false
}: DraggableExerciseProps) => {
  const cardClasses = isMobile
    ? "bg-amulet-50 hover:bg-amulet-100 transition-all duration-200 shadow-sm hover:shadow-md relative overflow-visible"
    : "bg-amulet-50 hover:bg-amulet-100 transition-all duration-200 cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md relative overflow-visible"

  const handleToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    // Si ya está añadido al día, no hacer nada
    if (isAddedToDay) return
    
    if (onToggle) {
      onToggle(exercise, !isSelected)
    }
  }

  const handleViewImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onViewImage) {
      onViewImage(exercise)
    }
  }

  return (
    <Card
      className={cardClasses}
      {...(!isMobile && {
        draggable: true,
        onDragStart: (e) => onDragStart(e, exercise)
      })}
    >
      <CardBody className="p-4">
        <div className="space-y-3">
          {/* Header con título y botón de acción */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-base text-amulet-950 mb-1">
                {exercise.nombre}
              </h4>
              <p className="text-sm text-amulet-700 line-clamp-2">
                {exercise.descripcion}
              </p>
            </div>

            {/* Botón circular de agregar/check - Solo visible en móvil/tablet */}
            <button
              onClick={handleToggleClick}
              disabled={isAddedToDay}
              className={`
                flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                transition-all duration-200 shadow-md
                lg:hidden
                ${isAddedToDay
                  ? 'bg-amulet-700 text-white cursor-not-allowed'
                  : isAdded
                    ? 'bg-amulet-600 text-white scale-110 animate-pulse'
                    : 'bg-[#171f14] text-white hover:scale-110 hover:shadow-lg'
                }
              `}
            >
              {isAddedToDay || isAdded ? (
                <IoMdCheckmark className="w-4 h-4" />
              ) : (
                <IoMdAdd className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Rating con badge de estrella y botón de ojo */}
          <div className="flex items-center gap-2">
            <Chip
              size="sm"
              variant="flat"
              className="bg-[#171f14] text-white font-medium"
              startContent={<IoMdStar className="w-4 h-4" />}
            >
              5.0
            </Chip>
            <button
              onClick={handleViewImage}
              className="flex items-center justify-center w-7 h-7 rounded-full bg-[#171f14] hover:bg-[#2a3526] text-white transition-all duration-200 shadow-sm hover:shadow-md"
              title="Ver imagen del ejercicio"
            >
              <IoMdEye className="w-4 h-4" />
            </button>
          </div>

          {/* Chips de información */}
          <div className="flex gap-2 flex-wrap">
            {exercise.repeticiones && (
              <Chip size="sm" variant="flat" className="bg-amulet-200 text-amulet-800 font-medium">
                {exercise.repeticiones} reps
              </Chip>
            )}
            {exercise.tiempo && (
              <Chip size="sm" variant="flat" className="bg-amulet-200 text-amulet-800 font-medium">
                {exercise.tiempo}
              </Chip>
            )}
            <Chip size="sm" variant="flat" className="bg-amulet-200 text-amulet-800 font-medium">
              {exercise.series} series
            </Chip>
            <Chip size="sm" variant="flat" className="bg-amulet-200 text-amulet-800 font-medium">
              {exercise.descanso}s descanso
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

// Modal para ver la imagen del ejercicio
interface ExerciseImageModalProps {
  isOpen: boolean
  onClose: () => void
  exercise: Exercise | null
}

const ExerciseImageModal = ({ isOpen, onClose, exercise }: ExerciseImageModalProps) => {
  if (!exercise) return null

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      size="lg"
      placement="center"
      hideCloseButton={true}
      classNames={{
        base: "max-w-[600px]",
        body: "p-4"
      }}
    >
      <ModalContent>
        <ModalHeader className="text-amulet-950 px-6 pt-6 pb-3">
          {exercise.nombre}
        </ModalHeader>
        <ModalBody className="px-6 pb-6">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-amulet-50">
            <Image
              src={`../../../public/images/${exercise.imagen}`}
              alt={exercise.nombre}
              className="w-full h-full object-cover"
            />
          </div>
        </ModalBody>
        <ModalFooter className="px-6 pb-6">
          <Button 
            className="bg-amulet-600 text-white hover:bg-amulet-700"
            onPress={onClose}
          >
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

const ExerciseList = () => {
  const { selectedWorkout, addExerciseToDay, selectedDayForMobile, weeklyPlan, setSelectedDayForMobile } = usePlannerStore()
  const isMobile = useIsMobile()
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([])
  const [exerciseToView, setExerciseToView] = useState<Exercise | null>(null)
  const [addedExercises, setAddedExercises] = useState<Set<string>>(new Set())
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { 
    isOpen: isImageModalOpen, 
    onOpen: onImageModalOpen, 
    onClose: onImageModalClose 
  } = useDisclosure()

  // Limpiar estados cuando cambia el workout seleccionado
  useEffect(() => {
    setAddedExercises(new Set())
    setSelectedExercises([])
    // Limpiar día seleccionado para que el usuario elija conscientemente dónde poner el nuevo workout
    setSelectedDayForMobile(null)
  }, [selectedWorkout?.id, setSelectedDayForMobile])

  // Verificar si un ejercicio ya está añadido al día seleccionado desde el workout actual
  const isExerciseAdded = (exerciseId: string): boolean => {
    if (!selectedDayForMobile || !selectedWorkout) return false
    const dayExercises = weeklyPlan[selectedDayForMobile]
    // Verificar que el ejercicio esté añadido Y que sea del workout actual
    return dayExercises.some(pe => 
      pe.exercise.id === exerciseId && 
      pe.workoutId === selectedWorkout.id
    )
  }

  const handleDragStart = (e: React.DragEvent, exercise: Exercise) => {
    e.dataTransfer.setData('application/json', JSON.stringify(exercise))
    e.dataTransfer.effectAllowed = 'copy'
  }

  const handleExerciseToggle = (exercise: Exercise, isSelected: boolean) => {
    // En móvil, verificar que hay un día seleccionado
    if (isMobile && !selectedDayForMobile && isSelected) {
      // Mostrar toast/mensaje
      toast.error('Selecciona primero el día de entrenamiento', {
        duration: 3000,
        position: 'top-center',
        style: {
          background: '#5D7A4F',
          color: '#fff',
          fontWeight: '600',
          padding: '16px',
          borderRadius: '12px',
        },
        icon: '📅',
      })
      return
    }

    // Si estamos en móvil y hay un día seleccionado
    if (isMobile && selectedDayForMobile) {
      // Si ya está añadido, no hacer nada
      if (isExerciseAdded(exercise.id)) {
        return
      }

      if (isSelected) {
        addExerciseToDay(exercise, selectedDayForMobile)
        
        // Añadir a la lista de ejercicios añadidos temporalmente
        setAddedExercises(prev => new Set(prev).add(exercise.id))
        
        // Remover del Set después de 1.5 segundos
        setTimeout(() => {
          setAddedExercises(prev => {
            const newSet = new Set(prev)
            newSet.delete(exercise.id)
            return newSet
          })
        }, 1500)
      }
      return
    }

    // Comportamiento original para desktop o cuando no hay día seleccionado
    setSelectedExercises(prev => {
      if (isSelected) {
        return [...prev, exercise]
      } else {
        return prev.filter(ex => ex.id !== exercise.id)
      }
    })
  }

  const handleViewImage = (exercise: Exercise) => {
    setExerciseToView(exercise)
    onImageModalOpen()
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-xl font-semibold text-amulet-950">EJERCICIOS</h2>

        <div className="flex gap-2 flex-wrap">
          <Chip
            size="sm"
            variant="flat"
            className="bg-amulet-200 text-amulet-800"
          >
            {selectedWorkout.level}
          </Chip>
          <Chip
            size="sm"
            variant="flat"
            className="bg-amulet-200 text-amulet-800"
          >
            {selectedWorkout.name}
          </Chip>
        </div>
      </div>
      <div className="text-xs text-amulet-600 bg-amulet-50 p-3 rounded-lg border border-amulet-200">
        💡 <strong>Tip:</strong> {isMobile
          ? selectedDayForMobile 
            ? 'Toca el botón + para añadir ejercicios al día seleccionado.' 
            : 'Selecciona primero un día en el calendario semanal arriba.'
          : 'Arrastra los ejercicios directamente al día deseado.'
        } Se recomiendan de 4 a 10 ejercicios por día de entrenamiento.
      </div>
      {/* Banner de selección cuando hay ejercicios seleccionados - Solo visible en móvil/tablet cuando NO hay día seleccionado */}
      {selectedExercises.length > 0 && !selectedDayForMobile && (
        <div className="bg-[#394932] text-white p-4 rounded-xl shadow-md lg:hidden">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                {selectedExercises.length}
              </div>
              <div className="min-w-0">
                <p className="font-semibold">
                  ejercicio{selectedExercises.length > 1 ? 's' : ''} seleccionado{selectedExercises.length > 1 ? 's' : ''}
                </p>
                <p className="text-xs opacity-90">Toca para elegir el día de entrenamiento</p>
              </div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button
                size="sm"
                className="bg-white text-[#394932] font-semibold hover:bg-white/90 flex-1 sm:flex-none"
                onPress={onOpen}
              >
                Agregar al día
              </Button>
              <Button
                size="sm"
                variant="light"
                className="text-white flex-1 sm:flex-none"
                onPress={clearSelection}
              >
                Limpiar
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className={`space-y-3 ${isMobile ? '' : 'max-h-[600px] overflow-y-auto pr-2'}`}>
        {selectedWorkout.exercises.map((exercise) => (
          <DraggableExercise
            key={exercise.id}
            exercise={exercise}
            onDragStart={handleDragStart}
            isSelected={selectedExercises.some(ex => ex.id === exercise.id)}
            onToggle={handleExerciseToggle}
            isMobile={isMobile}
            onViewImage={handleViewImage}
            isAdded={addedExercises.has(exercise.id)}
            isAddedToDay={isExerciseAdded(exercise.id)}
          />
        ))}
      </div>

      {/* Modal para ver imagen del ejercicio */}
      <ExerciseImageModal
        isOpen={isImageModalOpen}
        onClose={onImageModalClose}
        exercise={exerciseToView}
      />

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