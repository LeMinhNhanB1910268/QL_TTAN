<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $table = 'reviews';
    protected $primaryKey = 'review_id';
    protected $fillable = [
        'name',
        'student_id',
        'detail',
        'member_id',
        'created_by',
        'modified_by',
        'created_at',
        'updated_at'
    ];
}
