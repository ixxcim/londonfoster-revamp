/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const baseFont = 16;

function rem2px(input, fontSize = baseFont) {
    if (input == null) {
        return input;
    }
    switch (typeof input) {
        case 'object':
            if (Array.isArray(input)) {
                return input.map((val) => rem2px(val, fontSize));
            }
            const ret = {};
            for (const key in input) {
                ret[key] = rem2px(input[key], fontSize);
            }
            return ret;
        case 'string':
            return input.replace(
                /(\d*\.?\d+)rem$/,
                (_, val) => `${Math.round(parseFloat(val) * fontSize)}px`,
            );
        case 'function':
            return eval(input.toString().replace(
                /(\d*\.?\d+)rem/g,
                (_, val) => `${Math.round(parseFloat(val) * fontSize)}px`,
            ));
        default:
            return input;
    }
}

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		...rem2px(defaultTheme),
        screens: {
            'sm': '576px',
            // => @media (min-width: 576px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '992px',
            // => @media (min-width: 992px) { ... }

            'xl': '1200px',
            // => @media (min-width: 1200px) { ... }

            'xxl': '1400px',
            // => @media (min-width: 1400px) { ... }
        },
	},
	plugins: [],
}
