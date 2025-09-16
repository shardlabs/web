# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js documentation website built with Fumadocs, a documentation framework. The project is branded as "Shard" and serves both documentation and blog content.

## Development Commands

- `npm run dev` / `yarn dev` / `pnpm dev` - Start development server with Turbo mode
- `npm run build` - Build production application
- `npm start` - Start production server
- `npm run postinstall` - Process MDX files (runs automatically after install)

The development server runs on http://localhost:3000.

## Architecture Overview

### Core Framework Stack
- **Next.js 15.5.2** - App Router with React 19
- **Fumadocs** - Documentation framework with MDX support
- **TypeScript** - Type safety with strict mode enabled
- **Tailwind CSS 4.x** - Styling framework

### Directory Structure
- `app/` - Next.js App Router pages and layouts
  - `(home)/` - Landing page route group
  - `docs/` - Documentation pages with `[[...slug]]` dynamic routing
  - `api/search/route.ts` - Search functionality endpoint
  - `layout.tsx` - Root layout with RootProvider
  - `global.css` - Global styles
- `lib/` - Core application logic
  - `source.ts` - Content source adapters for docs and blog
  - `layout.shared.tsx` - Shared layout configurations
- `content/` - MDX content files
  - `docs/` - Documentation pages
  - `blog/` - Blog posts with extended frontmatter
- `source.config.ts` - Fumadocs MDX configuration and schema definitions

### Content Management
The project uses Fumadocs MDX with two content collections:
- **docs**: Standard documentation with frontmatter schema
- **blogPosts**: Blog posts requiring `author` and `date` fields

Content is processed through `lib/source.ts` which creates loaders for:
- Documentation at `/docs` baseUrl
- Blog at `/blog` baseUrl

### Layout System
- Root layout provides RootProvider wrapper and Inter font
- Docs layout uses DocsLayout component with page tree navigation
- Shared options in `lib/layout.shared.tsx` include Shard branding, GitHub link, and disabled theme switching

### Search Integration
Built-in search functionality via Fumadocs with English language support and Orama search engine.

## Key Configuration Files
- `source.config.ts` - MDX collections and frontmatter schemas
- `next.config.mjs` - Next.js config with MDX and Turbopack support
- `tsconfig.json` - TypeScript config with path aliases (`@/*` and `@/.source`)
- `mdx-components.tsx` - Global MDX component overrides