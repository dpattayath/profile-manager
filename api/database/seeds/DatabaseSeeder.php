<?php
use Illuminate\Database\Seeder;

use App\Database\Seeds\CategoriesSeeder;
use App\Database\Seeds\LocationsSeeder;
use App\Database\Seeds\ProfileSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersSeeder::class);
        $this->call(CategoriesSeeder::class);
        $this->call(LocationsSeeder::class);
        $this->call(ProfileSeeder::class);
    }
}
