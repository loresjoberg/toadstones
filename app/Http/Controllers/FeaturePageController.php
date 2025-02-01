<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;


class FeaturePageController extends Controller
{
    public function show($slug): Response
    {
        $features = Feature::where('slug', $slug)->where('launch', '<', Carbon::now())->get();
        return Inertia::render('Features/FeaturePage', ['feature' => $features[0], 'features' => $features]);
    }

}
