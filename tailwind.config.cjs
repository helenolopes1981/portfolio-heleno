/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#8B0000",
          dark: "#660000",
          light: "#A52A2A",
        },
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          soft: "#F5F5F5",
          medium: "#E0E0E0",
          dark: "#333333",
        },
      },
    },
  },
  plugins: [],
}
