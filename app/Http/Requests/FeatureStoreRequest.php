<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;

class FeatureStoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'lowercase', 'alpha_dash:ascii', 'max:255', 'unique:features'],
//            'launch' => ['required', 'string', 'max:255','date_format:yyyy-mm-dd h:i:s'],
            'launch' => ['required', 'string', 'max:255'],
            'status' => ['required', 'string', 'lowercase', 'alpha_dash:ascii', 'max:255'],
            'section_id' => ['required', 'integer', 'numeric'],
            'medium' => ['required', 'string', 'lowercase', 'max:255'],
            'html' => ['string', 'nullable'],
            'image' => ['file', 'image', 'nullable'],
            'video' => ['file', 'mimetypes:video/mpeg', 'nullable'],
            'thumbnail' => ['file', 'image'],
            'isPopular' => ['required', 'boolean', 'max:255'],
        ];


    }
}
