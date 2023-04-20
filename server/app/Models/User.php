<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
// use Laravel\Passport\HasApiTokens;
class User extends Authenticatable
{
    use HasApiTokens,Notifiable;
    protected $table = 'accounts';
    protected $primaryKey = 'account_id';
    protected $fillable = [
        'username', 
        'password', 
        'member_id', 
        'role', 
        'name', 
        'sex', 
        'birthday', 
        'email', 
        'phone', 
        'picture', 
        'course_id',
        'nhom_id',
        'address',
        'position', 
        'created_by', 
        'modified_by', 
        'created_at', 
        'updated_at'
    ];
    protected $hidden = [
        'password'
    ];
    // public function member()
    // {
    //     return $this->hasOne(Member::class, 'account_id', 'account_id');
    // }
}
