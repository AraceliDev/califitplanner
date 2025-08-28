<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Workout;

class ExerciseController extends Controller
{
    public function getByWorkout($id)
    {
        try {
            $workout = Workout::find($id);

            if (!$workout) {
                return response()->json([
                    'success' => false,
                    'message' => 'Workout no encontrado'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'workout_name' => $workout->name,
                'exercises' => $workout->exercises,
                'count' => count($workout->exercises)
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener ejercicios'
            ], 500);
        }
    }

    public function getSpecificExercise($workoutId, $exerciseId)
    {
        try {
            $workout = Workout::find($workoutId);

            if (!$workout) {
                return response()->json([
                    'success' => false,
                    'message' => 'Workout no encontrado'
                ], 404);
            }

            $exercise = collect($workout->exercises)->firstWhere('id', $exerciseId);

            if (!$exercise) {
                return response()->json([
                    'success' => false,
                    'message' => 'Ejercicio no encontrado'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'workout_name' => $workout->name,
                'exercise' => $exercise
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener ejercicio'
            ], 500);
        }
    }

    public function search($name)
    {
        try {
            $workouts = Workout::all();
            $foundExercises = [];

            foreach ($workouts as $workout) {
                foreach ($workout->exercises as $exercise) {
                    if (stripos($exercise['nombre'], $name) !== false) {
                        $foundExercises[] = [
                            'workout_id' => $workout->_id,
                            'workout_name' => $workout->name,
                            'workout_type' => $workout->type,
                            'exercise' => $exercise
                        ];
                    }
                }
            }

            return response()->json([
                'success' => true,
                'search_term' => $name,
                'results' => $foundExercises,
                'count' => count($foundExercises)
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error en la búsqueda'
            ], 500);
        }
    }
}
