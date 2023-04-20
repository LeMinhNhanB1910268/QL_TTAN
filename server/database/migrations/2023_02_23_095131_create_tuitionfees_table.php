<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTuitionfeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tuitionfees', function (Blueprint $table) {
            $table->increments('tuitionfee_id');
            $table->integer('student_id')->unsigned();
            $table->string('status');
            $table->string('member_id');
            $table->integer('created_by')->unsigned()->nullable();
            $table->integer('updated_by')->unsigned()->nullable();
            $table->timestamps();

            // $table->foreign('student_id')->references('student_id')->on('students');
            // $table->foreign('nhom_id')->references('nhom_id')->on('nhoms');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tuitionfees');
    }
}
