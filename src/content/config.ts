import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const pages = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		path: z.string(),
		title: z.string(),
		description: z.string().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
	}),
});

const photo_gallery = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		path: z.string(),
		title: z.string(),
		description: z.string().optional(),
		thumbnail: z.string().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		photos: z.array(z.object({
			title: z.string(),
			photo: z.string()	
		})),
	}),
});

export const collections = { blog, pages, photo_gallery };
