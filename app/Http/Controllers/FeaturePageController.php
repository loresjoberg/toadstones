<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;


class FeaturePageController extends Controller
{
    public function show($slug): Response
    {
        $feature = Feature::where('slug', $slug)->get();
        Log::debug('FeaturePageController::show.$feature', [$feature]);
        return Inertia::render('Features/FeaturePage', ['feature' => $feature[0], 'features' => Feature::all()]);
    }

}
