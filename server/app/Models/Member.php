<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\MassAssignmentException;

class Member extends Model
{
    protected $table = 'members';
    protected $primaryKey = 'member_id';
    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [ 
        'member_id',
        'name', 
        'sex', 
        'birthday', 
        'email', 
        'phone', 
        'picture', 
        'account_id',
        'course_id',
        'nhom_id',
        'address',
        'position', 
        'created_by', 
        'modified_by', 
        'created_at', 
        'updated_at'
    ];
    public function account()
    {
        return $this->hasOne(User::class, 'member_id', 'member_id');
    }
}
