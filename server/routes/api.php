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
    Route::get('getClass/{id}', 'CourseController@getClass');
    Route::get('getACourse/{id}', 'CourseController@showOne1');
    Route::get('getTuition/{id}', 'StudentController@getFee');
    Route::get('getReview/{id}', 'StudentController@getReview');
    Route::get('getPoint/{id}', 'StudentController@getPoint');
    Route::get('getStateFeeA/{id}', 'StudentController@getStateFeeA');
    Route::get('getStateFeeB/{id}', 'StudentController@getStateFeeB');
    Route::get('getCountStateFee/{id}', 'StudentController@getCountStateFee');
    Route::get('getCountStateFeeA/{id}', 'StudentController@getCountStateFeeA');
    Route::get('getCountStateFeeB/{id}', 'StudentController@getCountStateFeeB');
    Route::get('getCountReview/{id}', 'StudentController@getCountReview');
    Route::get('getCountReviewD/{id}', 'StudentController@getCountReviewD');
    Route::get('getCountReviewCD/{id}', 'StudentController@getCountReviewCD');
    Route::get('getReviewD/{id}', 'StudentController@getReviewD');
    Route::get('getReviewCD/{id}', 'StudentController@getReviewCD');
    Route::get('getClassOfMenber/{id}', 'NhomController@getClassOfMenber');
    // Route::get('getPoint', 'StudentController@getPoint');

});
Route::post('auth/login', 'AuthController@login');
Route::post('auth/resgiter', 'AuthController@register');
Route::get('auth/logout', 'AuthController@Logout');
Route::get('member/search/{name}', 'UserController@search');
Route::get('student/search/{name}', 'StudentController@search');
Route::post('account/NoMember/',[CloneController::class,'noMember']);