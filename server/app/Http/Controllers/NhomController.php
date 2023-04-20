<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\NhomResource;
use App\Http\Resources\NhomCollection;
use App\Models\Nhom;
use App\Models\Student;
class NhomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new NhomCollection(Nhom::with('getStudent')->paginate());
    }
    // public function student()
    // {
    //     return new NhomCollection(Nhom::with('getStudent')->paginate());
    // }
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
        $request->validate([
            'name' => 'required',
        ]);
        $nhom = Nhom::create($request->all());
        return new NhomResource($nhom);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  Nhom $nhom
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // return new NhomResource(Nhom::with('getStudent')
        // ->with('getStudent',function($query){
        //     $query->with("tuitionfee");
        // })
        // ->find($id));
        return new NhomResource(Nhom::with('getStudent')->find($id));
    }
    public function getCourse($id)
    {
        return new NhomResource(Nhom::with('getCourse')->find($id));
    }
    public function getClassOfMenber($id)
    {
        return new NhomResource(Nhom::where('member_id', $id)->get());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  Nhom $nhom
     * @return \Illuminate\Http\Response
     */
    public function edit(Nhom $nhom)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  Nhom $nhom
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Nhom $nhom)
    {
        $nhom->update($request->all());
        return new NhomResource($nhom);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  Nhom $nhom
     * @return \Illuminate\Http\Response
     */
    public function destroy(Nhom $nhom)
    {
        $nhom->delete();
    }
}
