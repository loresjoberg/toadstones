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

class TestController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function testGet($request = ''): RedirectResponse
    {
        Log::debug('testGet');
        Log::debug($request);
        return Redirect::to('/admin/dashboard');
    }

    public function testPost(Request $request): RedirectResponse
    {
        Log::debug('testPost');
        Log::debug($request);
        return Redirect::to('/admin/dashboard');
    }

    public function testPut(Request $request): RedirectResponse
    {
        Log::debug('testPut');
        Log::debug($request);
        return Redirect::to('/admin/dashboard');
    }
}
