<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class NhomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('nhoms')->insert([
            array('course_id'=> '1', 
            'name' => 'nhom 1', 
            'day' => '3, 5, 7', 
            'time' => '19h30 - 21h', 
            'description' => 'nhoms hoc danh cho ....',  
            'created_at' => Carbon::now('Asia/Ho_Chi_Minh'), 
            'updated_at' => Carbon::now('Asia/Ho_Chi_Minh'))
        ]); 
    }
}
