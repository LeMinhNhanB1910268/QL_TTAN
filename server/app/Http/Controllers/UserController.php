<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new UserCollection(User::paginate());
    }

    public function search($name) {
        return new UserCollection(User::where('name','like', $name)->orWhere('member_id','like', $name)->get());
        // return $sex;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = User::create([
            'username' => $request->username,
            'member_id' => $request->member_id,
            'role' => $request->role,
            'password' => bcrypt($request->password),
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'birthday' => $request->birthday,
            'position' => $request->position,
            'sex' => $request->sex,
            'address' => $request->address,
        ]);
        return $user;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  User $account
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new UserResource(User::where('member_id',$id)->get());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  User $account
     * @return \Illuminate\Http\Response
     */
    public function edit(User $account)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  User $account
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $account)
    {
        $account->update($request->all());
        return new UserResource($account);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  User $account
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $account)
    {
        $account->delete();
    }

    // public function search($name) {
    //     return User::where('sex','like', '%'.$name.'%')->get();
    //     // return $sex;
    // }
}
