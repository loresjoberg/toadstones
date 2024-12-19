<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use App\Models\Section;
use Inertia\Inertia;
use Inertia\Response;


class SearchController extends Controller
{
    public function show($query): Response
    {
        $features = Feature::where('title', 'LIKE', '%'.$query.'%')->orWhere('html', 'LIKE', '%'.$query.'%')->get();
        return Inertia::render('SearchPage',['query' => $query, 'features' => $features]);
    }

}
