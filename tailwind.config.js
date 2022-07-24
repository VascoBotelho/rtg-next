/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      white: "#FFF",
      black: "#000",
      primary: {
        50: '#8095DE',
        100: '#7289DA',
        200: '#677BC4'
      },
      discord: {
        50: '#5865F2',
        100: '#4752C4',
      },
    },
  },
  plugins: [],
}
