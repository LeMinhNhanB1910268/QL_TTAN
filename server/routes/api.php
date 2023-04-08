<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CloneController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('auth/login', 'AuthController@login');
Route::post('auth/resgiter', 'AuthController@register');

Route::middleware('auth:sanctum')->group(function(){
    Route::resource('member', 'MemberController');
    Route::resource('student', 'StudentController');
    Route::resource('course', 'CourseController');
    Route::resource('account', 'UserController');
    Route::resource('nhom', 'NhomController');
    Route::resource('point', 'PointController');
    Route::resource('review', 'ReviewController');
    Route::resource('tuitionfee', 'TuitionFeeController');  
    
    Route::get('user', function(Request $request){
        return $request->user();
    });
    Route::get('ClassWithCourse/{id}', 'NhomController@getCourse');

});
Route::get('member/search/{sex}', 'MemberController@search');

Route::post('account/NoMember/',[CloneController::class,'noMember']);