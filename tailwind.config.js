/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        inovation: "#2e303d",
        "primary-dark": "#232323",
        "yuan-yellow": "#eca900",
        "humanized-collection": "f2f2f2",
        "humanized-button": "#383838",
        secondary: "#e6e6e6",
        primary: "#3a3a3a",
      },
      backgroundColor: {
        primary: "#2e303d",
        "yuan-yellow": "#eca900",
        secondary: "#ffffff",
      },
      outlineColor: {
        "yuan-yellow": "#eca900",
      },
      borderColor: {
        primary: "#2e303d",
      },
    },
  },
  plugins: [],
};
