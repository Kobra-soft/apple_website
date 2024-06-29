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
      fontFamily: {
        "sf-pro-ut": ["SF Pro Text UT", "sans-serif"],
        "sf-pro-thin": ["SF Pro Text Thin", "sans-serif"],
        "sf-pro-light": ["SF Pro Text Light", "sans-serif"],
        "sf-pro": ["SF Pro Text", "sans-serif"],
      },
    },
    variants: {},
    plugins: [],
  },
};
