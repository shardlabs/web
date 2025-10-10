// 1. Import utilities from `astro:content`
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { defineCollection, z } from 'astro:content';

// 3. Define your collection(s)
const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string().transform((date) => new Date(date)),
        draft: z.boolean().default(false),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
        author: z.string().default('Shard Team'),
        tags: z.array(z.string()).default([]),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = {
    blog,
    docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
