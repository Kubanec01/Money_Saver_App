/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: "#f8f7f7",
        customWhite300: "#fffffff7",
        darkSHadow: "#ffffff63",
        whiteShadow500: "#ffffffae",
        spaceBlue: "#a7b4fb",
        spaceNeonBlue: "#7387fa",
        warningOrange: "#ef8940",
        spaceWhite: "#eceefa",
        spaceGray: "#6b72803d",
        neonPurple: "#8f3aff",
        errorColor: "#ff1f1f",
      },
    },
  },
  plugins: [],
};
