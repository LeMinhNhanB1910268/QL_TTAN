<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TuitionFee extends Model
{
    protected $table = 'tuitionfees';
    protected $primaryKey = 'tuitionfee_id';
    protected $fillable = [
        'student_id',
        'status',
        'member_id',
        'created_by',
        'modified_by',
        'created_at',
        'updated_at'
    ];
}
