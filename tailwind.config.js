/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: "#f8f7f7",
        whiteShadow500: "#ffffffae",
      }
    },
  },
  plugins: [],
};
