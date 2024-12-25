<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- TODO: Make this work better -->
    @if (str_contains(Request::path(), 'p/'))
        <meta property="og:image"
              content={{'https://' . Request::httpHost() . '/storage/thumbnails/' . explode('/', Request::path())[1] . '-thumb.png'}}>
        <meta property="twitter:image"
              content={{'https://' . Request::httpHost() . '/storage/thumbnails/' . explode('/', Request::path())[1] . '-thumb.png'}}>
    @else
        <meta property="og:image"
              content={{'https://' . Request::httpHost() . '/storage/ui/bad-gods-logo.png'}}>
        <meta property="twitter:image"
              content={{'https://' . Request::httpHost() . '/storage/ui/bad-gods-logo.png'}}>
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
    @endif
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>
<body class="font-sans antialiased">
@inertia
</body>
</html>
