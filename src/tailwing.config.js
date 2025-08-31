/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '8xl': '6rem',   // 96px
        '9xl': '8rem',   // 128px
        '10xl': '10rem', // 160px (if you want really big)
      },
    },
  },
  plugins: [],
}
