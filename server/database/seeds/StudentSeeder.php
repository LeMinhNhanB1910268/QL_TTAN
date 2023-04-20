<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('students')->insert([
            array('name'=> 'Le Minh Nhan', 
            'sex' => 'Nam', 
            'birthday' => '09/01/2001', 
            'email' => 
            'nhanb1910268@student.ctu.edu.vn', 
            'phone' => '0565766636', 
            'nhom_id' => '1', 
            'address' => 'Vinh Long', 
            'created_at' => Carbon::now('Asia/Ho_Chi_Minh'), 
            'updated_at' => Carbon::now('Asia/Ho_Chi_Minh')),
            array('name'=> 'Le Minh Nhan1', 
            'sex' => 'Nam', 
            'birthday' => '09/01/2001', 
            'email' => 'nhanb1910268@student.ctu.edu.vn', 
            'phone' => '0565766636', 
            'nhom_id' => '1', 
            'address' => 'Vinh Long', 
            'created_at' => Carbon::now('Asia/Ho_Chi_Minh'), 
            'updated_at' => Carbon::now('Asia/Ho_Chi_Minh'))
        ]);
    }
}
