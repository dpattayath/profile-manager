<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Profile;
use Faker\Generator as Faker;

$factory->define(Profile::class, function (Faker $faker) {
    return [
        'id' => $faker->unique()->randomNumber(),
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'email' => $faker->unique()->safeEmail,
        'phone_number' => $faker->phoneNumber,
        'description' => $faker->text(100),
        'rating' => $faker->randomFloat,
        'followers' => $faker->randomDigit,
        'location_id' => factory(\App\Models\Location::class),
        'category_id' => factory(\App\Models\Category::class),
    ];
});
