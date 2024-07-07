/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-bg': '#f8f8f8',
        'fav': '#ef5350',
      },
      colors: {
        'main-color': '#2563eb',
        'fav': '#ef5350',
      }
    },
  },
  plugins: [],
}