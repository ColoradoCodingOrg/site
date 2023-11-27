/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans'], // 'Rubik' is the font name
      },
      backgroundImage: {
        'contours': "url('/public/contours.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
