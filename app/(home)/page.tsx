import { ArrowRight, BarChart3, Database, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="fixed inset-0 bg-black text-white overflow-hidden flex items-center justify-center z-50">
            {/* Background Grid */}
            <div className="fixed inset-0 bg-black">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 px-6 w-full">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Glowing Orb with SVG Logo */}
                    <div className="relative mb-12 flex items-center justify-center">
                        <svg
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            id="Layer_2"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 33 44.7"
                            style={{ width: '64px', height: '64px' }}
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
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                        Shard
                    </h1>

                    <p className="text-xl md:text-2xl mb-4 text-gray-300 max-w-3xl mx-auto">
                        Data can be fun.
                    </p>

                    <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
                        Explore live information, create custom workflows, and
                        build lightweight automations — all in one place.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Link
                            href="https://app.shard.sh"
                            className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Open App
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/docs"
                            className="px-8 py-4 border border-cyan-400/30 rounded-lg font-semibold hover:border-cyan-400/60 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Documentation
                        </Link>
                    </div>

                    {/* Floating Data Windows Preview */}
                    <div className="relative max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 opacity-60">
                            <div className="bg-gray-900/80 border border-cyan-400/30 rounded-lg p-4 ">
                                <div className="flex items-center gap-2 mb-2">
                                    <Terminal className="w-4 h-4 text-cyan-400" />
                                    <span className="text-sm text-cyan-400">
                                        Live Feed
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-2 bg-gray-700 rounded w-3/4" />
                                    <div className="h-2 bg-gray-700 rounded w-1/2" />
                                    <div className="h-2 bg-cyan-400/50 rounded w-2/3" />
                                </div>
                            </div>

                            <div className="bg-gray-900/80 border border-purple-400/30 rounded-lg p-4 ">
                                <div className="flex items-center gap-2 mb-2">
                                    <Database className="w-4 h-4 text-purple-400" />
                                    <span className="text-sm text-purple-400">
                                        Custom Table
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-2 bg-gray-700 rounded w-full" />
                                    <div className="h-2 bg-purple-400/50 rounded w-4/5" />
                                    <div className="h-2 bg-gray-700 rounded w-3/5" />
                                </div>
                            </div>

                            <div className="bg-gray-900/80 border border-green-400/30 rounded-lg p-4 ">
                                <div className="flex items-center gap-2 mb-2">
                                    <BarChart3 className="w-4 h-4 text-green-400" />
                                    <span className="text-sm text-green-400">
                                        Visualization
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex gap-1">
                                        <div className="h-8 bg-green-400/50 rounded w-2" />
                                        <div className="h-6 bg-green-400/30 rounded w-2" />
                                        <div className="h-10 bg-green-400/70 rounded w-2" />
                                        <div className="h-4 bg-green-400/40 rounded w-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
