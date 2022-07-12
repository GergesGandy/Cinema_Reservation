<?php

namespace App\Http\Controllers;

use App\Models\Shows;
use Illuminate\Http\Request;
use App\Models\Reservations;
use App\Http\Controllers\RoomsController;


class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Reservations::all();

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
            'show_id' => 'required',
            'chair_num' => 'required'
        ]);
        return Reservations::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Reservations::find($id);
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
        $reservation = Reservations::find($id);
        $reservation->update($request->all());
        return $reservation;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return int
     */
    public function destroy($show_id, $chair_num)
    {
        //return Reservations::destroy();
        $reservations = Reservations::where([['show_id','=',$show_id],['chair_num','=', $chair_num]]);
        $reservations->delete();
    }

    public function countReservations($show_id)
    {
        return Reservations::all()->where('show_id', '=', $show_id)->count();
    }

    public function chairReservations($show_id)
    {
        $response = Reservations::all()->where('show_id', '=', $show_id)->toArray();



        $capacity = (new RoomsController())->getCapacity(Shows::find($show_id)->room_id);
        $chairArray = array();
        for ($x = 1; $x <= $capacity; $x++) {
            if (array_search($x, array_column($response, 'chair_num')) != '') {
                $chairArray[] = ['id' => $x, 'state' => false];} //{$chairArray[] .=  "$x => ['id' => $x, 'state' => false]";}
            else {
                $chairArray[] = ['id' => $x, 'state' => true];} //{$chairArray[] .=  "$x => ['id' => $x, 'state' => true]";}
        }
        return json_encode($chairArray);
    }

    public function getFilmName($show_id){
        return json_encode((new FilmsController())->getName(Shows::find($show_id)->film_id));
    }

}
