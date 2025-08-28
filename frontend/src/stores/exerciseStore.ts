import { create } from 'zustand'
import type { Exercise, ExerciseAPIResponse, ExerciseSearchResult } from '@/types/workout'

interface ExerciseState {
    // State
    exercises: Exercise[]
    selectedExercise: Exercise | null
    searchResults: ExerciseSearchResult[]
    loading: boolean
    error: string | null

    // Estado del ejercicio actual 
    currentWorkoutName: string | null
    isExerciseActive: boolean
    currentSet: number
    currentRep: number
    timer: number

    // Actions
    fetchExercisesByWorkout: (workoutId: string) => Promise<void>
    fetchSpecificExercise: (workoutId: string, exerciseId: number) => Promise<void>
    searchExercises: (searchTerm: string) => Promise<void>
    setSelectedExercise: (exercise: Exercise | null) => void


    // Utilidades
    clearError: () => void
    clearSearchResults: () => void
}

const API_BASE_URL = 'http://localhost:8000/api'

const useExerciseStore = create<ExerciseState>((set, get) => ({
    // ===== STATE =====
    exercises: [],
    selectedExercise: null,
    searchResults: [],
    loading: false,
    error: null,

    currentWorkoutName: null,
    isExerciseActive: false,
    currentSet: 1,
    currentRep: 0,
    timer: 0,

    // ===== ACTIONS =====

    fetchExercisesByWorkout: async (workoutId: string) => {
        set({ loading: true, error: null })
        try {
            const response = await fetch(`${API_BASE_URL}/workouts/${workoutId}/exercises`)
            const data: ExerciseAPIResponse = await response.json()

            if (data.success && data.exercises) {
                set({
                    exercises: data.exercises,
                    currentWorkoutName: data.workout_name || null,
                    loading: false
                })
            } else {
                set({
                    error: data.message || 'Error al cargar ejercicios',
                    loading: false
                })
            }
        } catch (error) {
            set({
                error: 'Error de conexión',
                loading: false
            })
        }
    },

    fetchSpecificExercise: async (workoutId: string, exerciseId: number) => {
        set({ loading: true, error: null })
        try {
            const response = await fetch(`${API_BASE_URL}/workouts/${workoutId}/exercises/${exerciseId}`)
            const data: ExerciseAPIResponse = await response.json()

            if (data.success && data.exercise) {
                set({
                    selectedExercise: data.exercise,
                    currentWorkoutName: data.workout_name || null,
                    loading: false
                })
            } else {
                set({
                    error: data.message || 'Ejercicio no encontrado',
                    loading: false
                })
            }
        } catch (error) {
            set({
                error: 'Error de conexión',
                loading: false
            })
        }
    },

    searchExercises: async (searchTerm: string) => {
        set({ loading: true, error: null })
        try {
            const response = await fetch(`${API_BASE_URL}/exercises/search/${encodeURIComponent(searchTerm)}`)
            const data: ExerciseAPIResponse = await response.json()

            if (data.success && data.results) {
                set({
                    searchResults: data.results,
                    loading: false
                })
            } else {
                set({
                    searchResults: [],
                    error: data.message || 'No se encontraron ejercicios',
                    loading: false
                })
            }
        } catch (error) {
            set({
                error: 'Error de conexión',
                loading: false
            })
        }
    },

    setSelectedExercise: (exercise: Exercise | null) => {
        set({ selectedExercise: exercise })
    },

    clearError: () => set({ error: null }),

    clearSearchResults: () => set({ searchResults: [] }),
}))

export default useExerciseStore