import React, { useEffect } from 'react'
import useWorkoutStore from '../stores/workoutStore'

const TestWorkout: React.FC = () => {
  const { workouts, loading, error, fetchWorkouts } = useWorkoutStore()

  useEffect(() => {
    fetchWorkouts()
  }, [fetchWorkouts])

  if (loading) return <div>Cargando workouts...</div>
  if (error) return <div className="text-red-500">Error: {error}</div>

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Workouts ({workouts.length})</h2>
      {workouts.map(workout => (
        <div key={workout._id} className="border p-2 mb-2">
          <h3 className="font-semibold">{workout.name}</h3>
          <p className="text-sm text-gray-600">
            {workout.type} - {workout.level}
          </p>
          <p className="text-sm">{workout.exercises.length} ejercicios</p>
        </div>
      ))}
    </div>
  )
}

export default TestWorkout