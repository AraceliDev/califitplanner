import { create } from 'zustand'
import type { Workout, APIResponse } from '@/types/workout'

interface WorkoutState {
    // State
    workouts: Workout[]
    selectedWorkout: Workout | null
    loading: boolean
    error: string | null

    // Filtros
    currentType: Workout['type'] | null
    currentLevel: Workout['level'] | null

    // Datos de configuración
    availableTypes: string[]
    availableLevels: string[]

    // Actions
    fetchWorkouts: () => Promise<void>
    fetchWorkoutById: (id: string) => Promise<void>
    fetchWorkoutsByType: (type: Workout['type']) => Promise<void>
    fetchWorkoutsByLevel: (level: Workout['level']) => Promise<void>
    fetchWorkoutsByTypeAndLevel: (type: Workout['type'], level: Workout['level']) => Promise<void>
    fetchAvailableTypes: () => Promise<void>
    fetchAvailableLevels: () => Promise<void>
    clearSelectedWorkout: () => void
    clearFilters: () => void
    clearError: () => void
}

const API_BASE_URL = 'http://localhost:8000/api'

const useWorkoutStore = create<WorkoutState>((set, get) => ({
    // ===== STATE =====
    workouts: [],
    selectedWorkout: null,
    loading: false,
    error: null,

    currentType: null,
    currentLevel: null,

    availableTypes: [],
    availableLevels: [],

    // ===== ACTIONS =====

    fetchWorkouts: async () => {
        set({ loading: true, error: null })
        try {
            const response = await fetch(`${API_BASE_URL}/workouts`)
            const data: APIResponse<Workout[]> = await response.json()

            if (data.success) {
                set({
                    workouts: data.data,
                    loading: false
                })
            } else {
                set({
                    error: data.message || 'Error al cargar workouts',
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

    fetchWorkoutById: async (id: string) => {
        set({ loading: true, error: null })
        try {
            const response = await fetch(`${API_BASE_URL}/workouts/${id}`)
            const data: APIResponse<Workout> = await response.json()

            if (data.success) {
                set({
                    selectedWorkout: data.data,
                    loading: false
                })
            } else {
                set({
                    error: data.message || 'Workout no encontrado',
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

    fetchWorkoutsByType: async (type: Workout['type']) => {
        set({ loading: true, error: null, currentType: type })
        try {
            const response = await fetch(`${API_BASE_URL}/workouts/type/${type}`)
            const data: APIResponse<Workout[]> = await response.json()

            if (data.success) {
                set({
                    workouts: data.data,
                    loading: false
                })
            } else {
                set({
                    error: data.message || 'Error al filtrar workouts',
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

    fetchWorkoutsByLevel: async (level: Workout['level']) => {
        set({ loading: true, error: null, currentLevel: level })
        try {
            const response = await fetch(`${API_BASE_URL}/workouts/level/${level}`)
            const data: APIResponse<Workout[]> = await response.json()

            if (data.success) {
                set({
                    workouts: data.data,
                    loading: false
                })
            } else {
                set({
                    error: data.message || 'Error al filtrar workouts',
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

    fetchWorkoutsByTypeAndLevel: async (type: Workout['type'], level: Workout['level']) => {
        set({ loading: true, error: null, currentType: type, currentLevel: level })
        try {
            const response = await fetch(`${API_BASE_URL}/workouts/${type}/${level}`)
            const data: APIResponse<Workout[]> = await response.json()

            if (data.success) {
                set({
                    workouts: data.data,
                    loading: false
                })
            } else {
                set({
                    error: data.message || 'Error al filtrar workouts',
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

    fetchAvailableTypes: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/workout-types`)
            const data: APIResponse<string[]> = await response.json()

            if (data.success) {
                set({ availableTypes: data.data })
            }
        } catch (error) {
            console.error('Error al obtener tipos:', error)
        }
    },

    fetchAvailableLevels: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/workout-levels`)
            const data: APIResponse<string[]> = await response.json()

            if (data.success) {
                set({ availableLevels: data.data })
            }
        } catch (error) {
            console.error('Error al obtener niveles:', error)
        }
    },

    clearSelectedWorkout: () => set({ selectedWorkout: null }),

    clearFilters: () => {
        set({
            currentType: null,
            currentLevel: null
        })
        get().fetchWorkouts()
    },

    clearError: () => set({ error: null }),
}))

export default useWorkoutStore