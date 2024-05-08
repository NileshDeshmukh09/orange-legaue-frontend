/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'almarai': ['Almarai'],
      },

      colors : {
        primary : {
          yellow : '#FFD60C',
          orange : '#F15D27',
        },
        accent : {
          black : '#1D1D1D',
          white : '#FFFFFF',
          purple : '#6B79EF',
          green : '#35AB80',
          pink : '#FF5797',
          grey : '#4A4A4A'

        }

      }
    },
  },
  plugins: [],
}