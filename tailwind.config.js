/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dc143c'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

