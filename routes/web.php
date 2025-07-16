<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\JobController;


Route::get('/', [JobController::class, 'index'])->name('home');

Route::get('/jobs/{id}', [JobController::class, 'show'])->name('jobs.show');


Route::get('/about', function () {
     return Inertia::render('about');
})->name('about');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
