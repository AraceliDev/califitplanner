import React, { useEffect } from 'react'
import useWorkoutStore from './stores/workoutStore'
import TestWorkout from './components/TestWorkout'
import TestExercise from './components/TestExercise'

function App() {
    const { fetchWorkouts } = useWorkoutStore()

    useEffect(() => {
        fetchWorkouts() // Cargar workouts al iniciar
    }, [fetchWorkouts])

    return (
        <div className="App">
            <h1 className="text-3xl font-bold text-center p-4">
                CaliFit Planner - TypeScript Test
            </h1>

            <div className="grid lg:grid-cols-2 gap-6 p-4">
                <div>
                    <TestWorkout />
                </div>
                <div>
                    <TestExercise />
                </div>
            </div>
        </div>
    )
}

export default App