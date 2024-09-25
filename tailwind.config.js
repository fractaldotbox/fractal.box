/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./case-study-source/**/*.{js,ts,jsx,tsx,mdx}",
    "./page-container/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    'avatar',
    { pattern: /round/ },
    { pattern: /flex/ },
    { pattern: /bg-/ },
    { pattern: /w-/ },
    { pattern: /p-/ }
  ],
  plugins: [
    require('daisyui')
  ],
}