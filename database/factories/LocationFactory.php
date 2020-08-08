<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Location;
use Faker\Generator as Faker;

$factory->define(Location::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->randomNumber(2),
        'name' => $faker->randomElement(['New South Wales', 'Victoria'])
    ];
});
