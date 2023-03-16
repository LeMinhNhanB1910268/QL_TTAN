<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Point extends Model
{
    protected $table = 'points';
    protected $primaryKey = 'point_id';
    protected $fillable = [
        'name',
        'diem',
        'nhom_id',
        'member_id',
        'student_id',
        'created_by',
        'modified_by',
        'created_at',
        'updated_at'
    ];
}
