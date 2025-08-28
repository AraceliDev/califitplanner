import React, { useState } from 'react'
import useExerciseStore from '../stores/exerciseStore'
import useWorkoutStore from '../stores/workoutStore'

const TestExercise: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedWorkoutId, setSelectedWorkoutId] = useState('')

    const { workouts } = useWorkoutStore()
    const {
        exercises,
        searchResults,
        loading,
        error,
        currentWorkoutName,
        fetchExercisesByWorkout,
        searchExercises,
        clearError,
        clearSearchResults
    } = useExerciseStore()

    const handleGetExercises = () => {
        if (selectedWorkoutId) {
            fetchExercisesByWorkout(selectedWorkoutId)
        }
    }

    const handleSearch = () => {
        if (searchTerm.trim()) {
            searchExercises(searchTerm)
        }
    }

    if (loading) return <div className="p-4">Cargando...</div>

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Test Exercise Store</h2>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                    <button
                        onClick={clearError}
                        className="ml-2 underline"
                    >
                        Cerrar
                    </button>
                </div>
            )}

            {/* Selector de workout */}
            <div className="mb-6 p-4 border rounded">
                <h3 className="font-semibold mb-2">1. Seleccionar Workout:</h3>
                <select
                    value={selectedWorkoutId}
                    onChange={(e) => setSelectedWorkoutId(e.target.value)}
                    className="border p-2 rounded mr-2"
                >
                    <option value="">Selecciona un workout</option>
                    {workouts.map(workout => (
                        <option key={workout.id} value={workout.id}>
                            {workout.name} ({workout.type})
                        </option>
                    ))}
                </select>
                <button
                    onClick={handleGetExercises}
                    disabled={!selectedWorkoutId}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Obtener Ejercicios
                </button>
            </div>

            {/* Buscador */}
            <div className="mb-6 p-4 border rounded">
                <h3 className="font-semibold mb-2">2. Buscar Ejercicio:</h3>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar ejercicio..."
                    className="border p-2 rounded mr-2"
                />
                <button
                    onClick={handleSearch}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Buscar
                </button>
                {searchResults.length > 0 && (
                    <button
                        onClick={clearSearchResults}
                        className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
                    >
                        Limpiar
                    </button>
                )}
            </div>

            {/* Lista de ejercicios del workout */}
            {exercises.length > 0 && (
                <div className="mb-6 p-4 border rounded">
                    <h3 className="font-semibold mb-2">
                        Ejercicios de: {currentWorkoutName} ({exercises.length})
                    </h3>
                    <div className="grid gap-2">
                        {exercises.map(exercise => (
                            <div key={exercise.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                <div>
                                    <span className="font-medium">{exercise.nombre}</span>
                                    <span className="text-sm text-gray-600 ml-2">
                                        {exercise.repeticiones ? `${exercise.repeticiones} reps` : exercise.tiempo}
                                        × {exercise.series} series
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Resultados de búsqueda */}
            {searchResults.length > 0 && (
                <div className="mb-6 p-4 border rounded">
                    <h3 className="font-semibold mb-2">
                        Resultados de búsqueda: "{searchTerm}" ({searchResults.length})
                    </h3>
                    <div className="grid gap-2">
                        {searchResults.map((result, index) => (
                            <div key={index} className="p-2 bg-yellow-50 rounded">
                                <div className="font-medium">{result.exercise.nombre}</div>
                                <div className="text-sm text-gray-600">
                                    De: {result.workout_name} ({result.workout_type})
                                </div>
                                <div className="text-sm text-gray-600">
                                    {result.exercise.repeticiones 
                                        ? `${result.exercise.repeticiones} repeticiones`
                                        : `${result.exercise.tiempo}`
                                    } × {result.exercise.series} series
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default TestExercise