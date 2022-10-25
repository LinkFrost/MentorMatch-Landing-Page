/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mmYellow: "#F8D580",
        mmDarkYellow: "#CCAE69",
        mmDarkBlue: "#252B42",
      },
    },
  },
  plugins: [],
};
