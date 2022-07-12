<?php

namespace App\Http\Controllers;

use App\Models\Cancellation;
use App\Models\Shows;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CancellationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Cancellation::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //$request->;
        $request->validate([
            'show_id' => 'required',
            'chair_num' => 'required',
        ]);
        //return Auth::user()->id;
        //return Cancellation::create($request->all());


        (new ReservationController())->destroy($request->show_id, $request->chair_num);
        return Cancellation::create(array_merge($request->all(), ['userCreated' => Auth::user()->id]));

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Cancellation::find($id);
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
        $cancellation = Cancellation::find($id);
        $cancellation->update($request->all());
        return $cancellation;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return int
     */
    public function destroy($id)
    {
        return Cancellation::destroy($id);
    }

    public function chairCancellation($show_id)
    {
        return (new ReservationController())->chairReservations($show_id);
    }

    public function getFilmName($show_id){
        return json_encode((new FilmsController())->getName(Shows::find($show_id)->film_id));
    }

}
