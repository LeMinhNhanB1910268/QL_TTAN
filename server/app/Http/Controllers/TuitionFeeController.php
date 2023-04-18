<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TuitionFee;
use App\Http\Resources\TuitionFeeCollection;
use App\Http\Resources\TuitionFeeResource;
class TuitionFeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new TuitionFeeCollection(TuitionFee::paginate());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tuitionfee = TuitionFee::create($request->all());
        return new TuitionFeeResource($tuitionfee);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(TuitionFee $tuitionfee)
    {
        //
        return new TuitionFeeResource($tuitionfee);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response 
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TuitionFee $tuitionfee)
    {
        $tuitionfee->update($request->all());
        return new TuitionFeeResource($tuitionfee);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(TuitionFee $tuitionfee)
    {
        $tuitionfee->delete();
    }
    // public function search($phone) {
    //     return TuitionFee::where('phone','like', '%'.$phone.'%')->get();
    // }
}
