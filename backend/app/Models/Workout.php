<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class Workout extends Model
{
    //conexion de base de datos y nombre de la colección en MongoDB
    protected $connection = 'mongodb';
    protected $collection = 'workouts';
    //Define qué campos se pueden asignar en masa
    protected $fillable = [
        'type',
        'name',
        'level',
        'description',
        'exercises'
    ];
    //Convierte autom el campo exercises en un array
    protected $casts = [
        // 'exercises' => 'array',
    ];
}
