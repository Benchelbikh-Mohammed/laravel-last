<?php

namespace App;

use App\Scopes\RoleScope;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected static function booted()
    {
        static::addGlobalScope(new RoleScope);
    }

    public function posts()
    {

        return $this->hasMany(Post::class);
    }
}
