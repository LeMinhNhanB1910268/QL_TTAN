<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Nhom extends Model
{
    protected $table = 'nhoms';
    protected $primaryKey = 'nhom_id';
    protected $fillable = [
        'name',
        'course_id',
        'description',
        'created_by',
        'modified_by',
        'created_at',
        'updated_at'
    ];

    public function getCourse()
    {
        return $this->hasOne(Course::class, 'course_id', 'course_id');
    }

    public function getStudent()
    {
        return $this->hasMany(Student::class, 'nhom_id', 'nhom_id');
    }
}
