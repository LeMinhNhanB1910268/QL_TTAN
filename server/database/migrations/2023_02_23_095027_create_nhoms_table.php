<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNhomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nhoms', function (Blueprint $table) {
            $table->increments('nhom_id');
            $table->integer('course_id')->unsigned();
            $table->string('name');
            $table->string('day');
            $table->string('time');
            $table->string('member_id');
            $table->string('description');
            $table->integer('created_by')->unsigned()->nullable();
            $table->integer('updated_by')->unsigned()->nullable();
            $table->timestamps();

            // $table->foreign('course_id')->references('course_id')->on('courses');
            // $table->foreign('member_id')->references('member_id')->on('members');
            // $table->foreign('student_id')->references('student_id')->on('students');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nhoms');
    }
}
