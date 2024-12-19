<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;


class FeatureController extends Controller
{
    public function show($slug): Response
    {
        $feature = Feature::where('slug', $slug)->get();
        return Inertia::render('Features/FeaturePage',['feature' => $feature[0]]);
    }

}
