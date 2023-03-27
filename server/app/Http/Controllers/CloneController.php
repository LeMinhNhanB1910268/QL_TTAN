<?php

namespace App\Http\Controllers;
use App\Models\Job;
use Illuminate\Http\Request;
use App\Models\User;
class CloneController extends Controller
{
    public function noMember(Request $request)
    {
        $user = User::create([
            'username' => $request->username,
            'member_id' => $request->member_id,
            'role' => $request->role,
            'password' => bcrypt($request->password),
        ]);
        return $user;
    }
}