/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bottom: "0 2px rgb(234, 179, 8)",
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
      minWidth: {
        "1/2": "50%",
      },
      maxHeight: {
        "40rem": "40rem",
      },
    },
  },
  plugins: [],
};
