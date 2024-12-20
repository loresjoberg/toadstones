<?php

namespace App\Http\Controllers;

use App\Http\Requests\FeatureStoreRequest;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Feature;
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
        $feature = Feature::firstWhere('slug', $slug);

        return Inertia::render('Admin/EditFeature', ['feature' => $feature]);
    }

    /**
     * Display the user's profile form.
     */
    public function list(Request $request): Response
    {
        $features = Feature::all();
        return Inertia::render('Admin/FeatureList',['features' => $features]);
    }

    public function store(FeatureStoreRequest $request): RedirectResponse
    {

        $feature = $request->toArray();
        if ($request['medium'] === 'video') {
            $feature['mediaLocation'] = $request->file('video')
                ->storeAs('video', $request['slug'] . ".mp4", 'public');
        } elseif ($request['medium'] === 'image') {

            $path = $request->file('image')
                ->storeAs('images', $request['slug'] . ".png", 'public');
            $feature['mediaLocation'] = $path;
            Log::debug($path);
        }

        $feature['thumbLocation'] = $request->file('thumbnail')
            ->storeAs('thumbnails', $request['slug'] . "-thumb.png", 'public');

        unset($feature['video']);
        unset($feature['image']);
        unset($feature['thumbnail']);

        Log::debug('feature in', [$feature]);

        Feature::create($feature);

        return to_route('dashboard');
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
