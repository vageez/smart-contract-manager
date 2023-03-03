const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      tablet: { max: '639px' },
      // => @media (max-width: 640px) { ... }

      laptop: { max: '1024px' },
      // => @media (max-width: 1024px) { ... }

      desktop: { max: '1280px' },
      xldesktop: { min: '1281px' },
      // => @media (max-width: 1280px) { ... }
    },
    extend: {
      colors: {
        mainbg: '#021017',
        gradientbg: '#219FD7',
        color1: '#072532',
        yellow: '#FCBC54',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
    fontFamily: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
