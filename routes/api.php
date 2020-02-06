<?php

use Illuminate\Http\Request;

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

Route::resource('todolist', 'Api\todosController');
Route::post('done/{id}', 'Api\todosController@markDone');
Route::post('notdone/{id}', 'Api\todosController@markNotdone');
Route::post('delete/{id}', 'Api\todosController@destroy');
