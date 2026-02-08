import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const BlogSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
})

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		BlogSchema.extend({
			heroImage: image().optional(),
		}),
});

export const collections = { blog };
