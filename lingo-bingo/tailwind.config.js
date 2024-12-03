/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(88,204,2)',
        p: 'rgb(127,127,127)',
      },
      fontFamily: {
        sora: '"Rowdies", sans-serif',
        gummy: '"Sour Gummy", sans-serif',
        round: '"Varela Round", sans-serif'
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
}