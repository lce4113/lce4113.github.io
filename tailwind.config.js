/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'fadeOut': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0, display: "none" }
        },
        'slideIn': {
          '0%': { transform: "translateY(30px)" },
          '100%': { transform: "translateY(0px)" }
        },
        'dropdown': {
          '0%': { opacity: 0, transform: "translateY(-15px)" },
          '100%': { opacity: 1, transform: "translateY(0px)" }
        },
        'rotate': {
          '0%': { transform: "rotate(0deg)" },
          '100%': { transform: "rotate(180deg)" }
        },
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'fadeOut': 'fadeOut 0.5s ease-in-out',
        'slideIn': 'slideIn 0.5s',
        'dropdown': 'dropdown 0.3s',
        'rotate': 'rotate 0.5s',
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
