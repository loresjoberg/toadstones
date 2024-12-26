<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

class Feature extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'launch',
        'status',
        'section_id',
        'medium',
        'html',
        'mediaLocation',
        'thumbLocation',
        'isPopular'
    ];

    protected $appends = ['section_title', 'section_slug'];

    public function section(): BelongsTo
    {
        return $this->belongsTo(Section::class);
    }

    public function getSectionTitleAttribute()
    {
        return $this->section->title;
    }

    public function getSectionSlugAttribute()
    {
        return $this->section->slug;
    }

    public function setLaunchAttribute( $value): void
    {
        $this->attributes['launch'] = (new Carbon($value))->format('Y-m-d H:i:s');

    }

}
