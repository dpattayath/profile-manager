<?php
namespace App\Database\Seeds;

use App\Models\Location;
use Illuminate\Database\Seeder;

class LocationsSeeder extends Seeder
{
    public function run()
    {
        Location::create(['name' => 'New South Wales']);
        Location::create(['name' => 'Victoria']);
        Location::create(['name' => 'Northern Territory']);
        Location::create(['name' => 'Western Australia']);
        Location::create(['name' => 'South Australia']);
        Location::create(['name' => 'Australian Capital Territory']);
    }
}
