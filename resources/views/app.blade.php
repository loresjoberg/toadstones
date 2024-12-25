<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta property="og:image" content={{'https://' . Request::httpHost() . '/storage/thumbnails/' . explode('/', Request::path())[1] . '.png'}}>
    <meta property="twitter:image" content={{'https://' . Request::httpHost() . '/storage/thumbnails/' . explode('/', Request::path())[1] . '.png'}}>
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>
<body class="font-sans antialiased">
@inertia
</body>
</html>
