import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      base: "1rem",
      mmdp: "1.125rem",
      smh3: "1.5rem",
      sm: "2.5rem",
      md: "4.5rem",
      lg: "5.5rem",
      smh2: "2rem",
      mdh2: "3rem",
    },
    extend: {
      colors: {
        darkBlack: "#151515",
        lightGreen: "#4EE1A0",
        darkGray: "#242424",
        lightGray: "#d9d9d9",
        pureWhite: "#FFFFFF",
        overlay: "#151515aa",
      },
    },
  },

  plugins: [],
} satisfies Config;
