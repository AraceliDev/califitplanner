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

    // Navigation
    getNextExercise: () => Exercise | null
    getPreviousExercise: () => Exercise | null
    getCurrentExerciseIndex: () => number

    // Utilidades
    clearError: () => void
    clearSearchResults: () => void
}

// const API_BASE_URL = 'http://localhost:8000/api'
const API_BASE_URL = 'https://www.califitplanner.com/api';

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

    // ===== NAVIGATION =====
    getNextExercise: () => {
        const { exercises, selectedExercise } = get()
        if (!selectedExercise || exercises.length === 0) return null
        
        const currentIndex = exercises.findIndex(ex => ex.id === selectedExercise.id)
        if (currentIndex === -1 || currentIndex === exercises.length - 1) return null
        
        return exercises[currentIndex + 1]
    },

    getPreviousExercise: () => {
        const { exercises, selectedExercise } = get()
        if (!selectedExercise || exercises.length === 0) return null
        
        const currentIndex = exercises.findIndex(ex => ex.id === selectedExercise.id)
        if (currentIndex === -1 || currentIndex === 0) return null
        
        return exercises[currentIndex - 1]
    },

    getCurrentExerciseIndex: () => {
        const { exercises, selectedExercise } = get()
        if (!selectedExercise || exercises.length === 0) return -1
        return exercises.findIndex(ex => ex.id === selectedExercise.id)
    },

    clearError: () => set({ error: null }),

    clearSearchResults: () => set({ searchResults: [] }),
}))

export default useExerciseStore