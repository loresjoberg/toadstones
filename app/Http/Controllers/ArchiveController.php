<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use App\Models\Section;
use Inertia\Inertia;
use Inertia\Response;


class ArchiveController extends Controller
{
    public function index(): Response
    {
        $features = Feature::all();
        return Inertia::render('Archive/ArchivePage',['features' => $features]);
    }
    public function show($slug): Response
    {
        $section = Section::where('slug', $slug)->get()[0];
        $features = Feature::where('section_id', $section->id)->get();
        return Inertia::render('Archive/ArchivePage',['section' => $section, 'features' => $features]);
    }

}
