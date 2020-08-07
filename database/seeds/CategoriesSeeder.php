<?php
namespace App\Database\Seeds;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    public function run()
    {
        Category::create(['name' => 'Model']);
        Category::create(['name' => 'Photographer']);
        Category::create(['name' => 'Designer']);
    }
}
