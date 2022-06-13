/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      width: {
        '15': '3.8rem'
      },
      height: {
        '15': '3.8rem'
      },
      fontSize: {
        '10xl': '10rem'
      }
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Georgia", "serif"],
      mono: ["Inconsolata", "monospace"],
    }
  },
  plugins: [],
}
