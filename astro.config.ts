import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
    output: 'static',
    site: 'http://localhost:4321',
    integrations: [
        tailwind({
            applyBaseStyles: false
        }),
        sitemap(),
        mdx(),
        icon({
            include: {
                tabler: ['*']
            }
        })
    ],
    vite: {
        define: {
            'import.meta.env.BUILD_TIME': JSON.stringify(new Date().toISOString())
        }
    }
});
