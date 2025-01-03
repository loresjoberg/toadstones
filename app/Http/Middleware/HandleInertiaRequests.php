<?php

namespace App\Http\Middleware;

use App\Models\Section;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $sections = Section::all();
        return [

            ...parent::share($request),
            'sections' => $sections,
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],
            'auth' => [
                'user' => $request->user(),
            ],
        ];
    }
}
