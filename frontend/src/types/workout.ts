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
