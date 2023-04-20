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
        'nhom_id',
        'target',
        'address',
        'created_by',
        'modified_by',
        'created_at',
        'updated_at'
    ];
    public function points()
    {
        return $this->hasMany(Point::class, 'student_id', 'student_id');
        return $this->hasOne(Nhom::class, 'nhom_id', 'nhom_id');
    }
    public function nhom()
    {
        return $this->hasOne(Nhom::class, 'nhom_id', 'nhom_id');
    }
    public function tuitionfee()
    {
        return $this->hasOne(TuitionFee::class, 'student_id', 'student_id');
    }
    public function review()
    {
        return $this->hasMany(Review::class, 'student_id', 'student_id');
    }
}
