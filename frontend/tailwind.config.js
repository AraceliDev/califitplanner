const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        amulet: {
          50: '#f4f7f2',
          100: '#e6ebe0',
          200: '#ccd7c3',
          300: '#a7ba9b',
          400: '#819a72',
          500: '#5d7a4f',
          600: '#46603b',
          700: '#384d2f',
          800: '#2d3e27',
          900: '#263321',
          950: '#141c12',
        },
      },
      backgroundColor: {
        DEFAULT: '#e6ebe0', // amulet-100
      },
      textColor: {
        DEFAULT: '#141c12', // amulet-950
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};