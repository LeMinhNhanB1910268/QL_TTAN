<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->increments('review_id');
            $table->integer('member_id')->unsigned();
            $table->integer('student_id')->unsigned();
            $table->integer('nhom_id')->unsigned();
            $table->string('name');
            $table->string('detail');
            $table->integer('created_by')->unsigned()->nullable();
            $table->integer('updated_by')->unsigned()->nullable();
            $table->timestamps();

            // $table->foreign('member_id')->references('member_id')->on('members');
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
        Schema::dropIfExists('reviews');
    }
}
