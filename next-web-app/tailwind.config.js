/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
