import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js}',
    ],
    theme: {
        container: {
            center: true,
            padding: '12px',
            screens: {
                sm: '100%',
                md: '575px',
                lg: '767px',
                xl: '1176px',
            },
        },
        colors: {
            'black': '#000000',
            'white': '#FFFFFF',
        },
        extend: {
            fontSize: {
                '4xl': ['44px', '1.2'],
            },
        },
    },
    plugins: [forms, typography],
};

