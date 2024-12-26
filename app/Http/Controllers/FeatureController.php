<?php

namespace App\Http\Controllers;

use App\Http\Requests\FeatureStoreRequest;
use App\Models\Feature;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class FeatureController extends Controller
{

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
        $this->storeFiles($request);

        Log::debug('store::$request->all()', [$request->all()]);
        Feature::create($request->all());

        return to_route('dashboard');
    }


    public function update(Request $request, $slug): RedirectResponse
    {
        Log::debug('update::$request->get(\'medium\')', [$request->get('medium')]);
        Log::debug('update::$slug', [$slug]);

        $feature = $request->toArray();
        Log::debug('feature', [$feature]);
        if (!empty($feature['launch'])) {
            $feature['launch'] =  date('Y-m-d H:i:s', strtotime(str_replace('-', '/', $feature['launch'])));
        }

        $feature = $this->storeFiles($request);

        $currentFeature = $this->getFeatureBySlug($slug);
        foreach ($currentFeature->getAttributes() as $index => $attribute) {
            if (isset($feature[$index])) {
                $currentFeature->$index = $feature[$index];
            }
        }

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
    public function storeFiles(Request $request): array
    {
        Log::debug('storeFiles::$request->file("image"))',[$request->file("image")]);
        $feature = $request->toArray();

        if (isset($feature['medium']) && $feature['medium'] === 'video' && $request->file('video')) {
            $feature['mediaLocation'] = $request->file('video')
                ->storeAs('video', $request['slug'] . ".mp4", 'public');
        }

        if (isset($feature['medium']) && $feature['medium'] === 'image' && $request->file('image')) {
            $path = $request->file('image')
                ->storeAs('images', $request['slug'] . ".png", 'public');
            $feature['mediaLocation'] = $path;
            Log::debug($path);
        }

        if ($request->file('thumbnail')) {
            Log::debug('have thumbnail');
            Log::debug($request['slug']);
            $result = $feature['thumbLocation'] = $request->file('thumbnail')
                ->storeAs('thumbnails', $request['slug'] . "-thumb.png", 'public');
            Log::debug($result);

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
