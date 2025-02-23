import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({

		author: reference("author"),
	}),
});

const client = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/client" }),
	schema: z.object({
		title: z.string(),
		logoClass: z.string(),
		logoSrc: z.string().optional(),
		order: z.number().optional(),
	}),
	// schema: z.object({
	// 	author: reference("author"),
	// }),
});

console.log('clients', client)

export const collections = { blog, client };
