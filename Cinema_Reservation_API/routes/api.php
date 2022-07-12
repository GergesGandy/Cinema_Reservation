<?php

use App\Http\Controllers\CancellationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FilmsController;
use App\Http\Controllers\RoomsController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ShowController;




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/

// public routes
Route:: post('/register', [AuthController::class, 'register']);
Route:: post('/login', [AuthController::class, 'login']);

// Films
Route:: get('/films', [FilmsController::class, 'index']);
Route:: get('/films/{id}', [FilmsController::class, 'show']);
// End Films






//protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    // Films
    Route:: post('/films', [FilmsController::class, 'store']);
    Route:: get('/filmName/{id}', [FilmsController::class, 'getName']);

    // End Films


    // Rooms
    Route:: post('/rooms', [RoomsController::class, 'store']);
    Route:: get('/rooms', [RoomsController::class, 'index']);
    Route:: get('/rooms/{id}', [RoomsController::class, 'show']);
    // End Rooms


    // Shows
    Route:: post('/show', [ShowController::class, 'store']);
    Route:: get('/show', [ShowController::class, 'index']);
    Route:: get('/show/{id}', [ShowController::class, 'viewAppointments']);
    // End Shows

    // Reservation
    Route:: post('/reservation', [ReservationController::class, 'store']);
    Route:: get('/reservation', [ReservationController::class, 'index']);
    Route:: get('/reservation/{show_id}', [ReservationController::class, 'chairReservations']);
    Route:: get('/reservationFilmName/{show_id}', [ReservationController::class, 'getFilmName']);
    // End Reservation


    // Cancellation
    Route:: post('/cancellation', [CancellationController::class, 'store']);
    Route:: get('/cancellation', [CancellationController::class, 'index']);
    Route:: get('/cancellation/{show_id}', [CancellationController::class, 'chairCancellation']);
    Route:: get('/cancellationFilmName/{show_id}', [CancellationController::class, 'getFilmName']);
    // End Cancellation


    Route:: post('/logout', [AuthController::class, 'logout']);
});

