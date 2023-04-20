<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('courses')->insert([
            array('name' => 'topic 450', 
            'time_start' => '01/01/2023', 
            'time_finish' => '05/05/2023', 
            'price' => '3.000.000vnd',  
            'created_at' => Carbon::now('Asia/Ho_Chi_Minh'), 
            'updated_at' => Carbon::now('Asia/Ho_Chi_Minh'))
        ]);
    }
}
