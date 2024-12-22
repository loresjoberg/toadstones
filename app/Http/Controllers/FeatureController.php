<?php

namespace App\Http\Controllers;

use App\Http\Requests\FeatureStoreRequest;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Feature;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class FeatureController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function add(): Response
    {
        return Inertia::render('Admin/NewFeature');
    }


    public function edit($slug): Response
    {
        $feature = $this->getFeatureBySlug($slug);

        return Inertia::render('Admin/EditFeature', ['feature' => $feature]);
    }

    public function confirmDelete($slug): Response
    {
        $feature = $this->getFeatureBySlug($slug);

        return Inertia::render('Admin/ConfirmDeleteFeature', ['feature' => $feature]);
    }

    /**
     * Display the user's profile form.
     */
    public function list(Request $request): Response
    {
        $features = Feature::all();
        return Inertia::render('Admin/ListFeatures', ['features' => $features]);
    }

    public function store(FeatureStoreRequest $request): RedirectResponse
    {

        Log::debug('store');

        $feature = $request->toArray();
        $feature = $this->storeFiles($request, $feature);

        Log::debug('feature in', [$feature]);

        Feature::create($feature);

        return to_route('dashboard');
    }


    public function update(Request $request): RedirectResponse
    {
        Log::debug('FeatureController::update');

        $feature = $request->toArray();
        $feature = $this->storeFiles($request, $feature);

        Log::debug('new feature', $feature);

        $currentFeature = $this->getFeatureBySlug($feature['slug']);
        foreach ($currentFeature->getAttributes() as $index => $attribute) {
            Log::debug('index', [$index]);
            Log::debug('attribute', [$attribute]);
            if (isset($feature[$index])) {
                Log::debug('new attribute', [$feature[$index]]);
                $currentFeature->$index = $feature[$index];
            } else {
                Log::debug('no new attribute');

            }
        }
        Log::debug('filled', [$currentFeature]);

        $currentFeature->save();

        return to_route('dashboard');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $feature = $this->getFeatureBySlug($request['slug']);

        $feature->delete();

        return to_route('dashboard');
    }

    /**
     * @param FeatureStoreRequest $request
     * @param array $feature
     * @return array
     */
    public function storeFiles(Request $request, array $feature): array
    {
        if ($feature['medium'] === 'video' && $request->file('video')) {
            $feature['mediaLocation'] = $request->file('video')
                ->storeAs('video', $request['slug'] . ".mp4", 'public');
        }

        if ($feature['medium'] === 'image' && $request->file('image')) {
            $path = $request->file('image')
                ->storeAs('images', $request['slug'] . ".png", 'public');
            $feature['mediaLocation'] = $path;
            Log::debug($path);
        }

        if ($request->file('thumbnail')) {
            $feature['thumbLocation'] = $request->file('thumbnail')
                ->storeAs('thumbnails', $request['slug'] . "-thumb.png", 'public');
        }


        unset($feature['video']);
        unset($feature['image']);
        unset($feature['thumbnail']);
        return $feature;
    }

    /**
     * @param $slug
     * @return Feature
     */
    public function getFeatureBySlug($slug): Feature
    {
        return Feature::firstWhere('slug', $slug);
    }
}
