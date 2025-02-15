<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;


class HomePageController extends Controller
{
    public function show(): Response
    {
        $features = Feature::where('launch', '<', Carbon::now())->get();
        return Inertia::render('HomePage', ['features' => $features]);
    }

}
