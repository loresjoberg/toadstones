<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;


class HomePageController extends Controller
{
    public function show(): Response
    {
        $features = Feature::all();
        return Inertia::render('HomePage',['features' => $features]);
    }

}
