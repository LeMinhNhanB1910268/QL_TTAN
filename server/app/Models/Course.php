<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $table = 'courses';
    protected $primaryKey = 'course_id';
    protected $fillable = [
        'name', 
        'time_start', 
        'time_finish', 
        'price', 'detail', 
        'created_by', 
        'modified_by', 
        'created_at', 
        'updated_at'
    ];
}
