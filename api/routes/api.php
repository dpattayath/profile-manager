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

/**
 * Identity routes - Authentication, Authorization
 */
Route::group(['middleware' => 'api', 'prefix' => 'auth', 'namespace' => '\App\Http\Identity\Controllers'], function ($router) {

    Route::post('register', 'AuthController@register');

    Route::post('login', 'AuthController@login');

    Route::post('logout', 'AuthController@logout');

});

Route::namespace('\App\Http\Controllers')->prefix("profiles")->group(function() {

    Route::get('/', 'ProfileController@all');

    Route::get('/{id}', 'ProfileController@get');

    Route::group(['middleware' => 'auth:api'], function() {

        Route::post('/', 'ProfileController@post');

        Route::put('/{id}', 'ProfileController@put');

        Route::delete('/{id}', 'ProfileController@delete');

    });

});
