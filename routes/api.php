<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::namespace('\App\Http\Controllers')->prefix("profiles")->group(function() {

    Route::get('/', 'ProfileController@all');

    Route::post('/', 'ProfileController@post');

    Route::get('/{id}', 'ProfileController@get');

    Route::put('/{id}', 'ProfileController@put');

    Route::delete('/{id}', 'ProfileController@delete');

});
