<?php

namespace Database\Seeders;

use App\Models\Feature;
use Faker\Provider\DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('sections')->insert([
            'title' => 'Speak With Monsters',
            'slug' => 'speak-with-monsters',
            'isPrimary' => true,
        ]);
        DB::table('sections')->insert([
            'title' => 'Bandwidth Theater',
            'slug' => 'bandwidth-theater',
            'isPrimary' => true,
        ]);
        DB::table('sections')->insert([
            'title' => 'The Ratings',
            'slug' => 'the-ratings',
            'isPrimary' => true,
        ]);
        DB::table('sections')->insert([
            'title' => 'Toadstones',
            'slug' => 'toadstones',
            'isPrimary' => true,
        ]);
        DB::table('sections')->insert([
            'title' => 'Apocrypha',
            'slug' => 'apocrypha',
            'isPrimary' => true,
        ]);
    }
}
