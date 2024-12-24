import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'

import '../css/app.css';
import '../css/font-face.css';
import './bootstrap';


import { createInertiaApp } from '@inertiajs/react';
import { Anchor, createTheme, MantineProvider, MantineThemeOverride } from '@mantine/core';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME as string || 'Laravel';

const theme = createTheme({
    breakpoints: {
        xs: '30em',
        sm: '37.5em',
        md: '56.25em',
        lg: '75em',
        xl: '90em',
    },
    fontFamily: 'PT Sans, sans-serif',
    colors: {
        'primary': ['#DCE7E9', '#B9CFD3', '#96B6BC', '#739EA6', '#5E8095', '#4A6185', '#354374', '#43577F', '#3C4D7A', '#354374'],
        'secondary': ['#DED4E4', '#C8B8D2', '#B29BC1', '#9C7FAF', '#8A6EA2', '#775C96', '#654B89', '#523F80', '#3F3277', '#2C266E'],
        'highlight': ['#F8F7EE', '#F1F0DE', '#EAE8CD', '#E3E1BD', '#DCD9AC', '#D5D29C', '#CECA8B', '#B7B47C', '#A09D6C', '#89875D']
    },
    components: {
        Anchor: Anchor.extend({
            defaultProps: {
                underline: 'hover',
            },
        }),
    },
} as MantineThemeOverride);


void createInertiaApp({
    title: (title) => {
        if (title === appName) {
            return title;
        }
        return `${title} | ${appName}`
    },
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx')
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<MantineProvider theme={theme}><App {...props} /></MantineProvider>);
    },
    progress: {
        color: '#4B5563'
    }
});
