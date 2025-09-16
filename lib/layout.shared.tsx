import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
    return {
        nav: {
            title: (
                <>
                    <svg
                        id="Layer_2"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 33 44.7"
                        style={{ width: '24px', height: '24px' }}
                    >
                        <g id="Layer_1-2">
                            <polygon
                                style={{ fill: '#fff' }}
                                points="16.4 0 0 30.8 18.9 12 18.9 4.5 16.4 0"
                            />
                            <polygon
                                style={{ fill: '#fff' }}
                                points="21.5 9.2 21.5 22.6 25.9 17.4 21.5 9.2"
                            />
                            <polygon
                                style={{ fill: '#fff' }}
                                points="18.8 16.4 18.9 25.5 7.7 37.3 2 32.7 18.8 16.4"
                            />
                            <polygon
                                style={{ fill: '#fff' }}
                                points="27.2 20.3 9.8 39 16.8 44.7 18.9 43 18.9 35.2 29.6 24.6 27.2 20.3"
                            />
                            <polygon
                                style={{ fill: '#fff' }}
                                points="30.9 26.8 33 30.8 21.5 40.9 21.5 36.2 30.9 26.8"
                            />
                        </g>
                    </svg>
                    Shard
                </>
            ),
        },
        // see https://fumadocs.dev/docs/ui/navigation/links
        links: [],
        githubUrl: 'https://github.com/shardlabs/web',
        themeSwitch: {
            enabled: false,
        },
    };
}
