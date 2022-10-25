/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mmYellow: "#F8D580",
        mmLightYellow: "#F9E1A7",
        mmDarkYellow: "#CCAE69",
        mmLightBlue: "#5EBFCC",
        mmDarkBlue: "#252B42",
        mmBlue: "#0A84FF",
      },
    },
  },
  plugins: [],
};
