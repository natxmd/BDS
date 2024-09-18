/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orangeB': "#E6472A",
        'purpleB': "#5227FF",
        'whiteB': "#E7EBFF",
        'greenB': "#DDFFA3",
        'blackB': "#313131",
      },
      fontFamily: {
        'Nunito': 'Nunito',
      },
      screens: {
        'phone': '380px',
        'tablet': '580px',
        'lgAux': '980px',
        'lgAux2': '1000px',
        'desktop': '1400px'
      },
    },
  },
  plugins: [],
}