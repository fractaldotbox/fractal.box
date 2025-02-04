import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      spacing: {
        'golden-lg': '61.8%',
        'golden-sm': '38.2%',
      },
      aspectRatio: {
        golden: '1.618 / 1',
      },
    },
  },
  plugins: [],
  // Enable all Tailwind features including @apply
  corePlugins: {
    preflight: true,
  },
} satisfies Config 