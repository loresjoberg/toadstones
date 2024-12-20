<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Feature extends Model
{
    protected $fillable = ['title',
        'slug',
        'launch',
        'status',
        'section_id',
        'medium',
        'html',
        'mediaLocation',
        'thumbLocation',
        'isPopular'];

    public function section(): BelongsTo
    {
        return $this->belongsTo(Section::class);
    }

}
