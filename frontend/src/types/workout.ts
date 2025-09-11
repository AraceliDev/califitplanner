export interface Exercise {
    id: number
    nombre: string
    descripcion: string
    instrucciones?: {
        introduccion: string
        pasos: string[]
        consejos?: string[]
        errores_comunes?: string[]
    }
    imagen?: string
    video?: string
    repeticiones?: number
    tiempo?: string
    series: number
    descanso: number
    muscles_worked?: string[]
    difficulty?: number
    equipment?: string
}

export interface Workout {
    _id: string
    type: 'push' | 'pull' | 'lower-body' | 'upper-body' | 'full-body' | 'core'
    name: string
    level: 'principiante' | 'intermedio' | 'avanzado'
    description: string
    exercises: Exercise[]
}

export interface APIResponse<T> {
    success: boolean
    data: T
    count?: number
    message?: string
}

export interface ExerciseSearchResult {
    workout_id: string
    workout_name: string
    workout_type: Workout['type']
    exercise: Exercise
}

export interface ExerciseAPIResponse {
    success: boolean
    workout_name?: string
    exercise?: Exercise
    exercises?: Exercise[]
    search_term?: string
    results?: ExerciseSearchResult[]
    count?: number
    message?: string
}