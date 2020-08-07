<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // $this->app->when('App\Services\ProfileService')
        //   ->needs('App\Abstractions\IRepository')
        //   ->give('App\Repository\ProfileRepository');

        $this->app->when('App\Services\ProfileService')
          ->needs('App\Abstractions\IRepository')
          ->give('App\Helpers\MockProfileRepository');
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
