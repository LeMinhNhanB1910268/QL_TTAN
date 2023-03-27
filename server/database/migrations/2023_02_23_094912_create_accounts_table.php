<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->increments('account_id');
            $table->string('role');
            $table->string('member_id');
            $table->string('username');
            $table->string('password');
            $table->string('name');
            $table->string('sex');
            $table->string('birthday');
            $table->string('email');
            $table->string('phone');
            $table->integer('nhom_id')->unsigned();
            $table->string('position');
            $table->integer('created_by')->unsigned()->nullable();
            $table->integer('updated_by')->unsigned()->nullable();
            $table->timestamps();

            // $table->foreign('member_id')->references('member_id')->on('members');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accounts');
    }
}
