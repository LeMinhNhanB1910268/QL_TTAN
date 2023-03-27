<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('accounts')->insert([
            array('username' => 'nhanminhle', 
            'password' => 'nhan123', 
            'role' => 'Admin',  
            'member_id'=>'B1910268',
            'name'=> 'Le Minh Nhan',  
            'sex' => 'Nam', 
            'birthday' => '09/01/2001', 
            'email' => 'nhanb1910268@student.ctu.edu.vn', 
            'phone' => '0565766636', 
            'position' => 'Quan ly', 
            'nhom_id' => '1', 
            'created_at' => Carbon::now('Asia/Ho_Chi_Minh'), 
            'updated_at' => Carbon::now('Asia/Ho_Chi_Minh'))
        ]);
    }
}
