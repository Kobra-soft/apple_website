/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868B",
          100: "#94928D",
          200: "#AFAFAF",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
    plugins: [],
  },
};
