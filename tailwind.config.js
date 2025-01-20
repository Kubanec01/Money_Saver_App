/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: "#f8f7f7",
        customWhite300: "#fffffff7",
        whiteShadow500: "#ffffffae",
        spaceBlue: "#a7b4fb",
        spaceWhite: "#eceefa",
      },
    },
  },
  plugins: [],
};
