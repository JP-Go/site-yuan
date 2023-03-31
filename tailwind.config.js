/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#232323",
        "yuan-yellow": "#eca900",
        secondary: "#e6e6e6",
        primary: "#3a3a3a"
      }
    },
  },
  plugins: [],
}

