/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        NotoThai: ["Noto Sans Thai", "sans-serif"],
      }
    },
  },
  plugins: [],
}
