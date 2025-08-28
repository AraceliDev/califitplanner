<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Workout;

class WorkoutFilterController extends Controller
{
    public function byType($type)
    {
        try {
            $workouts = Workout::where('type', $type)->get();

            return response()->json([
                'success' => true,
                'filter' => "type: {$type}",
                'data' => $workouts,
                'count' => $workouts->count()
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al filtrar por tipo'
            ], 500);
        }
    }

    public function byLevel($level)
    {
        try {
            $workouts = Workout::where('level', $level)->get();

            return response()->json([
                'success' => true,
                'filter' => "level: {$level}",
                'data' => $workouts,
                'count' => $workouts->count()
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al filtrar por nivel'
            ], 500);
        }
    }

    public function byTypeAndLevel($type, $level)
    {
        try {
            $workouts = Workout::where('type', $type)
                ->where('level', $level)
                ->get();

            return response()->json([
                'success' => true,
                'filter' => "type: {$type}, level: {$level}",
                'data' => $workouts,
                'count' => $workouts->count()
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al filtrar por tipo y nivel'
            ], 500);
        }
    }

    public function getTypes()
    {
        try {
            $workouts = Workout::all();
            $types = $workouts->pluck('type')->unique()->values();

            return response()->json([
                'success' => true,
                'types' => $types
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener tipos'
            ], 500);
        }
    }

    public function getLevels()
    {
        try {
            $workouts = Workout::all();
            $levels = $workouts->pluck('level')->unique()->values();

            return response()->json([
                'success' => true,
                'levels' => $levels
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error al obtener niveles'
            ], 500);
        }
    }
}
