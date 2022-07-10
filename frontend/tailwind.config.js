/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': '#12232E',
        'primary-font': '#F4F4F4',
        'dark-font': '#727272',
        'overlay': '#D2D2D2'
      }
    },
  },
  plugins: []
}