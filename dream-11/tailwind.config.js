/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(231, 254, 41)',
        secondary: 'rgba(19, 19, 19, 0.7)',
        nav_bg: 'rgb(249, 247, 243)',
        footer_text: 'rgba(209, 201, 201, 0.637)',
      },
      fontFamily: {
        sora: '"Sora", sans-serif'
      },
    },
  },
  plugins: [],
}