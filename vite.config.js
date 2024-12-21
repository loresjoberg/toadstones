import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
        eslint(),
    ],
});
