<?php

use App\Http\Controllers\ArchiveController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\FeaturePageController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomePageController::class, 'show']);
Route::get('/p/{slug}', [FeaturePageController::class, 'show']);
Route::get('/t/{slug}', [ArchiveController::class, 'show']);
Route::get('/archive',[ArchiveController::class, 'index'] );
Route::get('/s/{query}',[SearchController::class, 'show'] );

Route::get('/admin/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/new-feature', [FeatureController::class, 'add'])->name('new-feature');
    Route::get('/admin/edit-feature/{slug}', [FeatureController::class, 'edit'])->name('edit-feature');
    Route::get('/admin/delete-feature/{slug}', [FeatureController::class, 'confirmDelete'])->name('feature.confirm-delete');
    Route::get('/admin/list-features', [FeatureController::class, 'list'])->name('list-features');
    Route::post('/api/features', [FeatureController::class, 'store'])->name('new-feature.store');
    Route::put('/api/features', [FeatureController::class, 'update'])->name('edit-feature.update');
    Route::delete('api/features', [FeatureController::class, 'destroy'])->name('feature.destroy');
    Route::get('api/one-feature', [FeatureController::class, 'returnOne'])->name('feature.destroy');
    Route::put('/api/test', [TestController::class, 'testPut'])->name('test.put');
    Route::get('/api/test', [TestController::class, 'testGet'])->name('test.get');
    Route::post('/api/test', [TestController::class, 'testPost'])->name('test.post');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
