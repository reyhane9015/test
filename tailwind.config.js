/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        lg: "16px",
        xl: "18px",
        "2xl": "22px",
        "3xl": "26px",
        "4xl": "32px",
        "5xl": "40px",
      },
      colors: {
        ...colors,
      },
    },
    screens: {
      xs: "345px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.2rem",
        xs: "0.2rem",
        sm: "0.5rem",
        md: "0.7rem",
        lg: "1rem",
        xl: "70px",
      },
    },
  },
  plugins: [],
};
