import { defineConfig } from 'astro/config';
// https://astro.build/config
import react from '@astrojs/react';
// https://astro.build/config
import tailwind from '@astrojs/tailwind';
import{ vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
// https://astro.build/config
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [vanillaExtractPlugin()],
    },
    integrations: [tailwind(), react()],
    output: 'static',
    adapter: vercel(),
});
