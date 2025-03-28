import rehypeExternalLinks from "rehype-external-links";

// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	// reserver for server rendered page
	adapter: cloudflare({
		imageService: "passthrough",
	}),
	markdown: {
		// rehypePlugins: [
		// 	[
		// 		rehypeExternalLinks,
		// 		{
		// 			content: { type: 'text', value: ' 🔗' }
		// 		}
		// 	],
		// ]
	},

	// output: 'server'
});
