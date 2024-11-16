/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(149, 56, 226)',
        secondary: 'rgb(217, 217, 217)',
        main: 'rgb(241, 241, 241)',
        p: 'rgba(9, 8, 15, 0.6)',
        category_bg: 'rgba(9, 8, 15, 0.05)',
        section_bg: 'rgb(30, 30, 30)',
      },
      fontFamily: {
        sora: '"Sora", sans-serif'
      },
      backgroundImage: {
        banner: "url('./assets/banner.jpg')",
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}