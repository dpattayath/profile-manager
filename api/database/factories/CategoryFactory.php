<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Category;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->randomNumber(2),
        'name' => $faker->randomElement(['Model', 'Photographer', 'Designer'])
    ];
});
