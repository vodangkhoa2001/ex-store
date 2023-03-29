/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        secondary: "#DB4444",
      },
    },
  },
  plugins: [],
};
