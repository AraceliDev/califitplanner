import { useEffect } from 'react'
import WorkoutCard from '@/components/workout/WorkoutCard'
import workoutStore from '@/stores/workoutStore'

function Workouts() {
    const { workouts, fetchWorkouts, currentLevel, setCurrentLevel } = workoutStore()
    
    useEffect(() => {
        fetchWorkouts()
    }, [fetchWorkouts])

    const levels = ['principiante', 'intermedio', 'avanzado']
    
    const filteredWorkouts = workouts.filter(workout => {
        const matchLevel = workout.level === currentLevel
        return matchLevel
    })
    return (
        <div className="px-4 sm:px-6 md:px-12">
            {/* Título con gradiente y efecto */}
            <h1 className="mb-6 text-4xl font-extrabold text-amulet-950 md:text-5xl lg:text-6xl leading-tight text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amulet-600 via-amulet-500 to-amulet-400 animate-pulse">
                    Workouts
                </span>
            </h1>

            {/* Línea decorativa */}
            <div className="w-24 h-1 bg-gradient-to-r from-amulet-400 to-amulet-600 mx-auto mb-6 rounded-full"></div>
            {/* Filtro */}
            <div className="flex justify-center mb-8 px-4 sm:px-6 md:px-12">
                <div className="max-w-[1200px] w-full flex justify-center sm:justify-end">
                    <div className="flex flex-col sm:flex-row items-center gap-3 bg-amulet-50 px-4 sm:px-6 py-3 rounded-2xl sm:rounded-full shadow-lg border border-amulet-200 w-full sm:w-auto">
                        <span className="text-amulet-800 font-semibold text-sm">Nivel:</span>
                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                            {levels.map(level => (
                                <button
                                    key={level}
                                    onClick={() => setCurrentLevel(level)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                            ${currentLevel === level
                                            ? 'bg-amulet-600 text-white shadow-md'
                                            : 'bg-white text-amulet-700 hover:bg-amulet-100'
                                        }`}
                                >
                                    {level.charAt(0).toUpperCase() + level.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-10 mb-10 bg-amulet-100 -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-6 md:px-12">
                <div className="max-w-[1200px] w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
                    {filteredWorkouts.map(workout => (
                        <WorkoutCard key={workout.id} workout={workout} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workouts
