// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

import react from '@astrojs/react';
import starlightThemeBlack from 'starlight-theme-black';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://shard.sh',
    output: 'static',
    integrations: [
        starlight({
            title: 'Shard',
            logo: {
                src: './src/assets/icon.svg',
            },
            head: [
                {
                    tag: 'script',
                    attrs: {
                        src: '/js/script.js',
                        'data-website-id': 'dfid_Y8Ni6eBgNDS55m1LIsWER',
                        'data-domain': 'shard.sh',
                        defer: true,
                    },
                },
                {
                    tag: 'link',
                    attrs: {
                        rel: 'stylesheet',
                        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
                    },
                },
            ],
            sidebar: [
                { label: 'Start Here', items: [{ slug: 'docs' }] },
                {
                    label: 'Using Shard',
                    autogenerate: { directory: 'docs/how-to' },
                },
                {
                    label: 'Billing',
                    autogenerate: { directory: 'docs/billing' },
                },
                {
                    label: 'Policy',
                    autogenerate: { directory: 'docs/policy' },
                },
            ],
            disable404Route: true,
            plugins: [
                starlightThemeBlack({
                    navLinks: [
                        {
                            // optional
                            label: 'Blog',
                            link: '/blog',
                        },
                        {
                            // optional
                            label: 'Docs',
                            link: '/docs',
                        },
                        {
                            label: 'App',
                            link: 'https://app.shard.sh',
                        },
                    ],
                    footerText: '',
                }),
            ],
            customCss: ['./src/styles/docs.css'],
        }),
        react(),
        mdx(),
    ],
});
