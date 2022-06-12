/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Georgia", "serif"],
      mono: ["Menlo", "Monaco", "Consolas", "monospace"],
    },
    fontSize: {
      '10xl': '10rem'
    }
  },
  plugins: [],
}
