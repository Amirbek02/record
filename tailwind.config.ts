import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        white: "var(--background)",
        darkGrey: "var(--dark-gray)",
        green: "var(--green)",
        blue: { 600: "var(--blue-600)", 700: "var(--blue-700)" },
        red: "var(--red)",
      },
      backgroundImage: {
        "custom-gradient-cards": "linear-gradient(to bottom, #1A1A25, #2E3095)",
        "landing-gradient": "linear-gradient(to top, #0F0F2F, #2E3095)",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
