import { Card, CardHeader, CardBody, Button, Chip } from '@heroui/react'
import { TrashIcon } from '@heroicons/react/24/outline'
import type { WeeklyPlan, PlannerExercise } from '@/stores/plannerStore'
import type { Exercise } from '@/types/workout'

export interface DayData {
    key: keyof WeeklyPlan
    label: string
    date: string
    exercises: PlannerExercise[]
}

interface DayColumnProps {
    dayData: DayData
    onDrop: (day: keyof WeeklyPlan, exercise: Exercise) => void
    onRemoveExercise: (exerciseId: string, day: keyof WeeklyPlan) => void
}

export const DayColumn = ({ dayData, onDrop, onRemoveExercise }: DayColumnProps) => {
    const { key: day, label: dayLabel, date, exercises } = dayData

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'copy'
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        try {
            const exerciseData = e.dataTransfer.getData('application/json')
            const exercise: Exercise = JSON.parse(exerciseData)
            onDrop(day, exercise)
        } catch (error) {
            console.error('Error al procesar el ejercicio:', error)
        }
    }

    const getRecommendationColor = () => {
        const count = exercises.length
        if (count === 0) return 'text-amulet-500'
        if (count < 4) return 'text-amulet-600'  // Amarillo/naranja suave
        if (count >= 4 && count <= 10) return 'text-amulet-700'  // Verde óptimo
        return 'text-amulet-600'  // Más de 10 ejercicios
    }
    const getWorkoutTypeFromExercises = (exercises: PlannerExercise[]) => {
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

    return (
        <div className="flex flex-col h-full p-1">
            <Card className="flex-1 h-full">
                <CardHeader className="pb-2">
    <div className="w-full">
        <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-amulet-950">{dayLabel}</h3>
            <span className="text-xs text-amulet-600">{date}</span>
        </div>
        <div className="flex flex-col gap-1 mt-1">
            {/* Tipo de workout primero */}
            {getWorkoutTypeFromExercises(exercises) && (
                <span className={`text-xs px-2 py-1 rounded-full w-fit ${getWorkoutTypeColor(getWorkoutTypeFromExercises(exercises))}`}>
                    {getWorkoutTypeLabel(getWorkoutTypeFromExercises(exercises))}
                </span>
            )}
            {/* Número de ejercicios debajo */}
            <Chip
                size="sm"
                variant="flat"
                className={`${getRecommendationColor()} bg-amulet-100 font-medium text-xs w-fit`}
            >
                {exercises.length} ejercicios
            </Chip>
        </div>
    </div>
</CardHeader>

                <CardBody
                    className="pt-0 min-h-[200px] space-y-2"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    {exercises.length === 0 ? (
                        <div className="flex-1 flex items-center justify-center text-amulet-500 text-sm border-2 border-dashed border-amulet-300 rounded-lg p-4 text-center">
                            <span className="hidden lg:inline">Arrastra ejercicios aquí</span>
                            <span className="lg:hidden">Selecciona ejercicios para este día</span>
                        </div>
                    ) : (
                        exercises.map((plannerExercise) => (
                            <Card
                                key={plannerExercise.id}
                                className="bg-amulet-600 text-white"
                            >
                                <CardBody className="p-2">
                                    <div className="flex justify-between items-start gap-2">
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-xs font-medium">
                                                {plannerExercise.exercise.nombre}
                                            </h4>
                                        </div>
                                        <Button
                                            isIconOnly
                                            size="sm"
                                            variant="light"
                                            className="text-white hover:text-red-300 min-w-6 h-6"
                                            onClick={() => onRemoveExercise(plannerExercise.id, day)}
                                        >
                                            <TrashIcon className="w-3 h-3" />
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        ))
                    )}
                </CardBody>
            </Card>
        </div>
    )
}