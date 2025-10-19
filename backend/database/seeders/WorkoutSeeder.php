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
        // principiante
        $pushPrincipianteWorkouts = include database_path('data/push_principiante.php');
        $pullPrincipianteWorkouts = include database_path('data/pull_principiante.php');
        $fullPrincipianteWorkouts = include database_path('data/fullBody_principiante.php');
        $corePrincipianteWorkouts = include database_path('data/core_principiante.php');
        $lowerPrincipianteWorkouts = include database_path('data/lowerBody_principiante.php');
        $upperPrincipianteWorkouts = include database_path('data/upperBody_principiante.php');
        // intermedio
        $coreIntermedioWorkouts = include database_path('data/core_intermedio.php');
        $fullIntermedioWorkouts = include database_path('data/fullBody_intermedio.php');
        $lowerIntermedioWorkouts = include database_path('data/lowerBody_intermedio.php');
        $pullIntermedioWorkouts = include database_path('data/pull_intermedio.php');
        $pushIntermedioWorkouts = include database_path('data/push_intermedio.php');
        $upperIntermedioWorkouts = include database_path('data/upperBody_intermedio.php');
        //avanzado
        $upperAvanzadoWorkouts = include database_path('data/upperBody_avanzado.php');
        $coreAvanzadoWorkouts = include database_path('data/core_avanzado.php');
        $fullAvanzadoWorkouts = include database_path('data/fullBody_avanzado.php');
        $lowerAvanzadoWorkouts = include database_path('data/lowerBody_avanzado.php');
        $pullAvanzadosWorkouts = include database_path('data/pull_avanzado.php');
        $pushAvanzadoWorkouts = include database_path('data/push_avanzado.php');
        // Insertar todos los workouts
        Workout::insert($pushPrincipianteWorkouts);
        Workout::insert($pullPrincipianteWorkouts);
        Workout::insert($fullPrincipianteWorkouts);
        Workout::insert($corePrincipianteWorkouts);
        Workout::insert($lowerPrincipianteWorkouts);
        Workout::insert($upperPrincipianteWorkouts);
        Workout::insert($coreIntermedioWorkouts);
        Workout::insert($fullIntermedioWorkouts);
        Workout::insert($lowerIntermedioWorkouts);
        Workout::insert($pullIntermedioWorkouts);
        Workout::insert($pushIntermedioWorkouts);
        Workout::insert($upperIntermedioWorkouts);
        Workout::insert($upperAvanzadoWorkouts);
        Workout::insert($coreAvanzadoWorkouts);
        Workout::insert($fullAvanzadoWorkouts);
        Workout::insert($lowerAvanzadoWorkouts);
        Workout::insert($pullAvanzadosWorkouts);
        Workout::insert($pushAvanzadoWorkouts);
    }
}
