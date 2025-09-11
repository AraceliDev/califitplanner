import usePlannerStore, { type WeeklyPlan } from '@/stores/plannerStore'
import type { Exercise } from '@/types/workout'

// Constantes
const DAY_NAMES = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const
const DAY_LABELS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'] as const

export const usePlannerLogic = () => {
  const { 
    selectedWeek, 
    weeklyPlan, 
    addExerciseToDay, 
    removeExerciseFromDay 
  } = usePlannerStore()

  const getWeekDates = () => {
    const dates = []
    const startOfWeek = new Date(selectedWeek)
    
    // Obtener el día de la semana (0 = domingo, 1 = lunes, etc.)
    const dayOfWeek = startOfWeek.getDay()
    
    // Calcular días para retroceder hasta el lunes
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1
    
    // Establecer el lunes de esa semana
    startOfWeek.setDate(startOfWeek.getDate() - daysToSubtract)

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek)
      date.setDate(startOfWeek.getDate() + i)
      dates.push({
        key: DAY_NAMES[i] as keyof WeeklyPlan,
        label: DAY_LABELS[i],
        date: date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit' }),
        exercises: weeklyPlan[DAY_NAMES[i] as keyof WeeklyPlan]
      })
    }
    return dates
  }

  const handleDrop = (day: keyof WeeklyPlan, exercise: Exercise) => {
    addExerciseToDay(exercise, day)
  }

  const handleRemoveExercise = (exerciseId: string, day: keyof WeeklyPlan) => {
    removeExerciseFromDay(exerciseId, day)
  }

  return { 
    getWeekDates, 
    handleDrop, 
    handleRemoveExercise 
  }
}