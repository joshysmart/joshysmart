/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkBlack: "#151515",
        lightGreen: "#4EE1A0",
        darkGray: "#242424",
        lightGray: "#d9d9d9",
        pureWhite: "#FFFFFF"
      }
    },
  },
  plugins: [],
};
