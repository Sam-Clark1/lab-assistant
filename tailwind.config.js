/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#26a69a',
        'secondary':'#f50057',
        'primary-dark':'#1A746B'
      }
    },
  },
  plugins: [],
}
