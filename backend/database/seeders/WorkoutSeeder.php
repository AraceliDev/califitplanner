<?php

namespace Database\Seeders;

use App\Models\Workout;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WorkoutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Cargar datos de archivos externos
        $pushPrincipianteWorkouts = include database_path('data/push_principiante.php');
        $pullPrincipianteWorkouts = include database_path('data/pull_principiante.php');
        $fullPrincipianteWorkouts = include database_path('data/fullBody_principiante.php');
        $corePrincipianteWorkouts = include database_path('data/core_principiante.php');
        $lowerPrincipianteWorkouts = include database_path('data/lowerBody_principiante.php');
        $upperPrincipianteWorkouts = include database_path('data/upperBody_principiante.php');

        // Insertar todos los workouts
        Workout::insert($pushPrincipianteWorkouts);
        Workout::insert($pullPrincipianteWorkouts);
        Workout::insert($fullPrincipianteWorkouts);
        Workout::insert($corePrincipianteWorkouts);
        Workout::insert($lowerPrincipianteWorkouts);
        Workout::insert($upperPrincipianteWorkouts);
    }
}
