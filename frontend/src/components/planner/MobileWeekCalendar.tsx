import { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@heroui/react'
import { TrashIcon } from '@heroicons/react/24/outline'
import type { DayData } from './DayColumn'
import type { WeeklyPlan } from '@/stores/plannerStore'

interface MobileWeekCalendarProps {
  weekDates: DayData[]
  onSelectDay: (day: keyof WeeklyPlan) => void
  selectedDay: keyof WeeklyPlan | null
  onRemoveExercise: (exerciseId: string, day: keyof WeeklyPlan) => void
}

const MobileWeekCalendar = ({ weekDates, onSelectDay, selectedDay, onRemoveExercise }: MobileWeekCalendarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalDayData, setModalDayData] = useState<DayData | null>(null)

  const getWorkoutTypeFromExercises = (exercises: any[]) => {
    if (exercises.length === 0) return null
    const workoutTypes = [...new Set(exercises.map(pe => pe.workoutType))]
    if (workoutTypes.length > 1) return "Mixto"
    return workoutTypes[0]
  }

  const getWorkoutTypeLabel = (type: string) => {
    const labels = {
      'push': 'Push',
      'pull': 'Pull',
      'lower-body': 'Lower',
      'upper-body': 'Upper',
      'full-body': 'Full Body',
      'core': 'Core',
      'mixto': 'Mixto'
    }
    return labels[type?.toLowerCase()] || type
  }

  const getWorkoutTypeColor = (type: string) => {
    const colors = {
      'push': 'bg-amulet-200 text-amulet-800',
      'pull': 'bg-amulet-300 text-amulet-900',
      'lower-body': 'bg-amulet-400 text-amulet-950',
      'upper-body': 'bg-amulet-200 text-amulet-800',
      'full-body': 'bg-amulet-300 text-amulet-900',
      'core': 'bg-amulet-400 text-amulet-950',
      'mixto': 'bg-amulet-200 text-amulet-800'
    }
    return colors[type?.toLowerCase()] || 'bg-amulet-200 text-amulet-800'
  }

  const handleDayClick = (dayData: DayData) => {
    onSelectDay(dayData.key)
  }

  const handleWorkoutLabelClick = (e: React.MouseEvent, dayData: DayData) => {
    e.stopPropagation()
    setModalDayData(dayData)
    setIsModalOpen(true)
  }

  const handleRemoveExerciseFromModal = (exerciseId: string) => {
    if (modalDayData) {
      onRemoveExercise(exerciseId, modalDayData.key)
      // Actualizar los datos del modal
      const updatedExercises = modalDayData.exercises.filter(ex => ex.id !== exerciseId)
      setModalDayData({
        ...modalDayData,
        exercises: updatedExercises
      })
      
      // Si no quedan ejercicios, cerrar el modal
      if (updatedExercises.length === 0) {
        setIsModalOpen(false)
      }
    }
  }

  return (
    <>
      {/* Calendario semanal compacto */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <h3 className="text-sm font-semibold text-amulet-950 mb-3 text-center">
          SEMANA DE ENTRENAMIENTO
        </h3>
        
        <div className="grid grid-cols-7 gap-2">
          {weekDates.map((dayData) => {
            const workoutType = getWorkoutTypeFromExercises(dayData.exercises)
            const isSelected = selectedDay === dayData.key
            
            return (
              <div
                key={dayData.key}
                onClick={() => handleDayClick(dayData)}
                className={`
                  flex flex-col items-center p-2 rounded-lg cursor-pointer transition-all
                  ${isSelected 
                    ? 'bg-amulet-600 text-white shadow-md scale-105' 
                    : 'bg-amulet-50 text-amulet-950 hover:bg-amulet-100'
                  }
                `}
              >
                {/* Día de la semana */}
                <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-amulet-700'}`}>
                  {dayData.label}
                </span>
                
                {/* Fecha */}
                <span className={`text-xs mt-1 ${isSelected ? 'text-white' : 'text-amulet-600'}`}>
                  {dayData.date}
                </span>
                
                {/* Etiqueta de workout (si existe) */}
                {workoutType && (
                  <button
                    onClick={(e) => handleWorkoutLabelClick(e, dayData)}
                    className={`
                      text-[10px] px-2 py-0.5 rounded-full mt-2 font-medium
                      ${isSelected 
                        ? 'bg-white text-amulet-800' 
                        : getWorkoutTypeColor(workoutType)
                      }
                      hover:scale-105 transition-transform
                    `}
                  >
                    {getWorkoutTypeLabel(workoutType)}
                  </button>
                )}
                
                {/* Indicador de ejercicios */}
                {dayData.exercises.length > 0 && (
                  <div className="mt-1 flex items-center justify-center">
                    <div className={`
                      w-1.5 h-1.5 rounded-full
                      ${isSelected ? 'bg-white' : 'bg-amulet-600'}
                    `} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal de detalles del día */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        size="lg"
        placement="center"
        scrollBehavior="inside"
      >
        <ModalContent>
          <ModalHeader className="text-amulet-950 border-b border-amulet-200">
            <div className="flex flex-col">
              <span className="text-xl font-bold">
                {modalDayData?.label} - {modalDayData?.date}
              </span>
              {modalDayData && getWorkoutTypeFromExercises(modalDayData.exercises) && (
                <span className={`
                  text-xs px-3 py-1 rounded-full w-fit mt-2 font-medium
                  ${getWorkoutTypeColor(getWorkoutTypeFromExercises(modalDayData.exercises)!)}
                `}>
                  {getWorkoutTypeLabel(getWorkoutTypeFromExercises(modalDayData.exercises)!)}
                </span>
              )}
            </div>
          </ModalHeader>
          
          <ModalBody className="py-4">
            {modalDayData && modalDayData.exercises.length > 0 ? (
              <div className="space-y-4">
                <div className="text-sm text-amulet-700 font-medium mb-3">
                  {modalDayData.exercises.length} ejercicio{modalDayData.exercises.length !== 1 ? 's' : ''} seleccionado{modalDayData.exercises.length !== 1 ? 's' : ''}
                </div>
                
                {/* Agrupar ejercicios por workout */}
                {(() => {
                  // Agrupar ejercicios por workoutName
                  const groupedExercises = modalDayData.exercises.reduce((acc, exercise) => {
                    const workoutKey = exercise.workoutName || 'Sin categoría'
                    if (!acc[workoutKey]) {
                      acc[workoutKey] = []
                    }
                    acc[workoutKey].push(exercise)
                    return acc
                  }, {} as Record<string, typeof modalDayData.exercises>)

                  return Object.entries(groupedExercises).map(([workoutName, exercises]) => (
                    <div key={workoutName} className="space-y-2">
                      {/* Header del workout */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`
                          text-xs px-3 py-1 rounded-full font-semibold
                          ${getWorkoutTypeColor(exercises[0].workoutType)}
                        `}>
                          {getWorkoutTypeLabel(exercises[0].workoutType)}
                        </div>
                        <span className="text-xs text-amulet-600 font-medium">
                          {exercises.length} ejercicio{exercises.length !== 1 ? 's' : ''}
                        </span>
                      </div>

                      {/* Lista de ejercicios del workout */}
                      {exercises.map((exercise) => (
                        <div
                          key={exercise.id}
                          className="bg-amulet-50 rounded-lg p-3 flex items-start justify-between gap-3 hover:bg-amulet-100 transition-colors ml-2"
                        >
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-amulet-950 text-sm mb-1">
                              {exercise.exercise.nombre}
                            </h4>
                            <div className="flex gap-2 flex-wrap text-xs text-amulet-700">
                              <span>{exercise.exercise.series} series</span>
                              <span>•</span>
                              <span>{exercise.exercise.repeticiones} reps</span>
                              <span>•</span>
                              <span>{exercise.exercise.descanso}s</span>
                            </div>
                          </div>
                          
                          <button
                            onClick={() => handleRemoveExerciseFromModal(exercise.id)}
                            className="flex-shrink-0 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            aria-label="Eliminar ejercicio"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ))
                })()}
              </div>
            ) : (
              <div className="text-center py-8 text-amulet-600">
                <p>No hay ejercicios seleccionados para este día</p>
              </div>
            )}
          </ModalBody>
          
          <ModalFooter className="border-t border-amulet-200">
            <Button
              className="bg-amulet-600 text-white hover:bg-amulet-700"
              onPress={() => setIsModalOpen(false)}
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MobileWeekCalendar
