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
        $pushWorkouts = include database_path('data/push_workouts.php');
        $pullWorkouts = include database_path('data/pull_workouts.php');
        // Insertar todos los workouts
        Workout::insert($pushWorkouts);
        Workout::insert($pullWorkouts);
    }
}
