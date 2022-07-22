/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background':'#181818',
        'menu':'#242424',
        'card':'#3D3D3D',
        '1text':'#FFFFFF',
        '2text':'#AAAAAA',
        'accent':'#64dd17',
        'error': '#ff0000'
      }
    },
  },
  plugins: [],
}
