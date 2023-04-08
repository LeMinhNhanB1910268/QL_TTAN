<?php

namespace App\Http\Controllers;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
class AuthController extends Controller
{
    public function response($user)
    {
        $token = $user->createToken(Str::random(40))->plainTextToken;
        return response() -> json([
            'user' => $user,
            'token' => $token,
            'token_type' => 'Bearer'
        ]);
    }
    public function register(Request $req)
    {
        $user = User::create([
            'username' => $req->username,
            'role' => $req->role,
            'password' => bcrypt($req->password),
        ]);
        return $user;
    }
    public function Login(Request $request){
        $cred = $request->validate([
            'username' => 'required|exists:accounts',
            'password'=> 'required|min:6'
         ]);
        if(!Auth::attempt($cred)){
            return response()->json([
                'message'=>'Unauthorized.'
            ],401);
        };
        
        return $this->response( Auth::user());
    }
}
