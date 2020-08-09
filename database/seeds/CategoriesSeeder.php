<?php
namespace App\Database\Seeds;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    public function run()
    {
        Category::create(['name' => 'Models']);
        Category::create(['name' => 'Actors/Presenters']);
        Category::create(['name' => 'Photographers/Video']);
        Category::create(['name' => 'Celebrities']);
        Category::create(['name' => 'Influencers/Bloggers']);
    }
}
