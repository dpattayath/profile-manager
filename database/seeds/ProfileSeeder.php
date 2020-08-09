<?php
namespace App\Database\Seeds;

use App\Models\Profile;
use Illuminate\Database\Seeder;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Profile::insert([
            [
                'first_name' => "Adam",
                'last_name' => "Singer",
                'phone_number' => '0400000000',
                'email' => 'adam.singer@email.com',
                'location_id' => 1,
                'category_id' => 1,
                'description' => '',
                'rating' => 5,
                'followers' => "274",
                'reviews' => 10,
                'photo_identifier' => "image-0.png",
            ],
            [
                'first_name' => "Lucy",
                'last_name' => "Alcorn",
                'phone_number' => '0400000001',
                'email' => 'lucy.alcorn@email.com',
                'location_id' => 1,
                'category_id' => 1,
                'description' => '',
                'rating' => 5,
                'followers' => 3000,
                'reviews' => 14,
                'photo_identifier' => "image-1.png",
            ],
            [
                'first_name' => "Matt",
                'last_name' => "R",
                'phone_number' => '0400000002',
                'email' => 'matt.r@email.com',
                'location_id' => 1,
                'category_id' => 2,
                'description' => '',
                'rating' => 5,
                'followers' => 409,
                'reviews' => 9,
                'photo_identifier' => "image-2.png",
            ],
            [
                'first_name' => "Jaynelle",
                'last_name' => "Lording",
                'phone_number' => '0400000003',
                'email' => 'jaynelle.lording@email.com',
                'location_id' => 2,
                'category_id' => 2,
                'description' => '',
                'rating' => 5,
                'followers' => 9000,
                'reviews' => 5,
                'photo_identifier' => "image-3.png",
            ],
            [
                'first_name' => "Benny",
                'last_name' => "Russell",
                'phone_number' => '0400000004',
                'email' => 'benny.russell@email.com',
                'location_id' => 1,
                'category_id' => 1,
                'description' => '',
                'rating' => 5,
                'followers' => 275,
                'reviews' => 6,
                'photo_identifier' => "image-4.png",
            ],
            [
                'first_name' => "Melinda",
                'last_name' => "Wenig",
                'phone_number' => '0400000005',
                'email' => 'melinda.wenig@email.com',
                'location_id' => 1,
                'category_id' => 2,
                'description' => '',
                'rating' => 5,
                'followers' => 1000,
                'reviews' => 18,
                'photo_identifier' => "image-5.png",
            ],
            [
                'first_name' => "Charles",
                'last_name' => "Grant",
                'phone_number' => '0400000006',
                'email' => 'charles.grant@email.com',
                'location_id' => 1,
                'category_id' => 2,
                'description' => '',
                'rating' => 5,
                'followers' => 10000,
                'reviews' => 5,
                'photo_identifier' => "image-6.png",
            ],
            [
                'first_name' => "Melanie",
                'last_name' => "Burnicle",
                'phone_number' => '0400000007',
                'email' => 'melanie.burnicle@email.com',
                'location_id' => 1,
                'category_id' => 1,
                'description' => '',
                'rating' => 5,
                'followers' => 15000,
                'reviews' => 18,
                'photo_identifier' => "image-7.png",
            ],
        ]);
    }
}
