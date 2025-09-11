import { create } from 'zustand'
import type { Workout, Exercise } from '@/types/workout'

export interface PlannerExercise {
  id: string
  workoutId: string
  workoutName: string
  workoutType: string 
  exercise: Exercise
  dayAssigned: string
}

export interface WeeklyPlan {
  monday: PlannerExercise[]
  tuesday: PlannerExercise[]
  wednesday: PlannerExercise[]
  thursday: PlannerExercise[]
  friday: PlannerExercise[]
  saturday: PlannerExercise[]
  sunday: PlannerExercise[]
}

interface PlannerState {
  // State
  selectedWorkout: Workout | null
  selectedWeek: Date
  weeklyPlan: WeeklyPlan
  levelFilter: string | null
  
  // Actions
  setSelectedWorkout: (workout: Workout | null) => void
  setSelectedWeek: (week: Date) => void
  setLevelFilter: (level: string | null) => void
  addExerciseToDay: (exercise: Exercise, day: keyof WeeklyPlan) => void
  removeExerciseFromDay: (exerciseId: string, day: keyof WeeklyPlan) => void
  clearDay: (day: keyof WeeklyPlan) => void
  clearWeeklyPlan: () => void
  getTotalExercisesForDay: (day: keyof WeeklyPlan) => number
}

const initialWeeklyPlan: WeeklyPlan = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
}

const usePlannerStore = create<PlannerState>((set, get) => ({
  // ===== STATE =====
  selectedWorkout: null,
  selectedWeek: new Date(),
  weeklyPlan: initialWeeklyPlan,
  levelFilter: null,

  // ===== ACTIONS =====
  setSelectedWorkout: (workout: Workout | null) => {
    set({ selectedWorkout: workout })
  },

  setSelectedWeek: (week: Date) => {
    set({ selectedWeek: week })
  },

  setLevelFilter: (level: string | null) => {
    set({ levelFilter: level })
  },
addExerciseToDay: (exercise: Exercise, day: keyof WeeklyPlan) => {
  const { selectedWorkout, weeklyPlan } = get()
  
  if (!selectedWorkout) return

  // Verificar si el ejercicio ya está asignado ese día
  const dayExercises = weeklyPlan[day]
  const exerciseExists = dayExercises.find(pe => pe.exercise.id === exercise.id)
  
  if (exerciseExists) return

  const plannerExercise: PlannerExercise = {
    id: `${selectedWorkout.id || selectedWorkout.id}-${exercise.id}-${day}-${Date.now()}`,
    workoutId: selectedWorkout.id || selectedWorkout.id,
    workoutName: selectedWorkout.name || selectedWorkout.type, 
    workoutType: selectedWorkout.type,
    exercise: exercise,
    dayAssigned: day
  }

  set({
    weeklyPlan: {
      ...weeklyPlan,
      [day]: [...weeklyPlan[day], plannerExercise]
    }
  })
},

  removeExerciseFromDay: (exerciseId: string, day: keyof WeeklyPlan) => {
    const { weeklyPlan } = get()
    
    set({
      weeklyPlan: {
        ...weeklyPlan,
        [day]: weeklyPlan[day].filter(pe => pe.id !== exerciseId)
      }
    })
  },

  clearDay: (day: keyof WeeklyPlan) => {
    const { weeklyPlan } = get()
    
    set({
      weeklyPlan: {
        ...weeklyPlan,
        [day]: []
      }
    })
  },

  clearWeeklyPlan: () => {
    set({ weeklyPlan: initialWeeklyPlan })
  },

  getTotalExercisesForDay: (day: keyof WeeklyPlan) => {
    const { weeklyPlan } = get()
    return weeklyPlan[day].length
  }
}))

export default usePlannerStore