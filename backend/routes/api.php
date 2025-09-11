<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Workout;
use App\Http\Controllers\WorkoutController;
use App\Http\Controllers\ExerciseController;
use App\Http\Controllers\WorkoutFilterController;

// Rutas básicas de workouts
Route::get('/workouts', [WorkoutController::class, 'index']);
Route::get('/workouts/{id}', [WorkoutController::class, 'show']);

// Rutas de ejercicios
Route::get('/workouts/{id}/exercises', [ExerciseController::class, 'getByWorkout']);
Route::get('/workouts/{workoutId}/exercises/{exerciseId}', [ExerciseController::class, 'getSpecificExercise']);
Route::get('/exercises/search/{name}', [ExerciseController::class, 'search']);

// Rutas de filtros
Route::get('/workouts/type/{type}', [WorkoutFilterController::class, 'byType']);
Route::get('/workouts/level/{level}', [WorkoutFilterController::class, 'byLevel']);
Route::get('/workouts/{type}/{level}', [WorkoutFilterController::class, 'byTypeAndLevel']);

// Rutas utilitarias
Route::get('/workout-types', [WorkoutFilterController::class, 'getTypes']);
Route::get('/workout-levels', [WorkoutFilterController::class, 'getLevels']);
