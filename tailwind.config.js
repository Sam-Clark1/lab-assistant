/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#64dd17',
        'secondary':'#250c82',
        'primary-dark':'#1faa00'
      }
    },
  },
  plugins: [],
}
