<?php

namespace Database\Seeders;

use App\Models\Feature;
use Faker\Provider\DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('users')->insert([
            'name' => 'Lore Sjoberg',
            'email' => 'loresjoberg@gmail.com',
            'password' => Hash::make('password'),
        ]);
    }
}