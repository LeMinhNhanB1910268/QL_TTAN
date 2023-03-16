<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table = 'students';
    protected $primaryKey = 'student_id';
    protected $fillable = [
        'name',
        'sex',
        'birthday',
        'email',
        'phone',
        'picture',
        'created_by',
        'modified_by',
        'created_at',
        'updated_at'
    ];
    public function points()
    {
        return $this->hasOne(Point::class, 'student_id', 'student_id');
    }
}
