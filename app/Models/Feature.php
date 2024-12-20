<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 *
 *
 * @property int $id
 * @property string $title
 * @property string $slug
 * @property string $launch
 * @property string $status
 * @property string|null $thumbLocation
 * @property int $section_id
 * @property string $medium
 * @property string|null $html
 * @property string|null $mediaLocation
 * @property int $isPopular
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Section $section
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature whereHtml($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature whereIsPopular($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature whereLaunch($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature whereMediaLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature whereMedium($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature whereSectionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature whereThumbLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Feature whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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
