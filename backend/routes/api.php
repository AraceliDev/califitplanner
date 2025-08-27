<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Workout;

Route::get('/workouts', function () {
    return App\Models\Workout::all();
});
