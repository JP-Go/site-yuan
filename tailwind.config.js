/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "components/*.js"],
  theme: {
    extend: {
      colors: {
        "yun-gray": "#36383A",
        "yun-white": "#ffffff",
        "yun-yellow": "#FCCE0B",
      },
      boxShadow: {
        btn: "2px 2px 0px 1px",
        card: "0px 0px 4px 0px",
      },
    },
  },
  plugins: [],
};
