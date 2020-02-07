<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class todo extends Model
{
    public $timestamps = false;
    protected $fillable = ['todos', 'completed'];
    protected $primaryKey = 'TL_id';
}
