<?php

namespace App\Http\Controllers;

use App\Http\Controllers\FilmsController;
use Illuminate\Http\Request;
use App\Models\Shows;
use App\Http\Controllers\RoomsController;
use App\Http\Controllers\ReservationController;

class ShowController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = Shows::all()->unique('film_id');
        return $response->map(function($show) {
            return ['id' => $show->id,
                    'film' => (new FilmsController)->getName($show->film_id),
                    'price' => (new FilmsController)->getPrice($show->film_id)
                ];
        });
    }

    public function viewAppointments($id){
        $response = Shows::all()->where('film_id', '=', $id);

        return $response->map(function($show) {
            return ['id' => $show->id,
                'film' => (new FilmsController)->getName($show->film_id),
                'price' => (new FilmsController)->getPrice($show->film_id),
                'room' => (new RoomsController())->getName($show->room_id),
                'movie_date_time' => $show->movie_date_time,
                'left' => (new RoomsController())->getCapacity($show->room_id) - (new ReservationController())->countReservations($show->id)
            ];
        });
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'film_id' => 'required',
            'room_id' => 'required',
            'movie_date_time' => 'required'
        ]);
        return Shows::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return  Shows::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $show = Shows::find($id);
        $show->update($request->all());
        return $show;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return int
     */
    public function destroy($id)
    {
        return Shows::destroy($id);
    }
}
