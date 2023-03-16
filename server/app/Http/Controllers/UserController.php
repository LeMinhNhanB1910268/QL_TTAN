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
        $request->validate([
            'role' => 'required',
            'username' => 'required',
            'password' => 'required',
        ]);
        $account = User::create($request->all());
        return new UserResource($account);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  User $account
     * @return \Illuminate\Http\Response
     */
    public function show(User $account)
    {
        return new UserResource($account);
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
}
