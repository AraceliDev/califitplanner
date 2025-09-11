<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Workout;

class WorkoutController extends Controller
{
    public function index()
    {
        try {
            $workouts = Workout::all();
            return response()->json([
                'success' => true,
                'data' => $workouts,
                'count' => $workouts->count()
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener workouts'
            ], 500);
        }
    }

    public function show($id)
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
                'data' => $workout
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener workout'
            ], 500);
        }
    }
}
