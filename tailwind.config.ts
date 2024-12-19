import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--background)",
        darkGrey: "var(--foreground)",
        green: "var(--green)",
        blue: "var(--blue-600)",
        red: "var(--red)",
      },
      backgroundImage: {
        "custom-gradient-cards": "linear-gradient(to bottom, #1A1A2E, #2E3095)",
        "landing-gradient": "linear-gradient(to bottom, #1E1E3F, #2E3095)",
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
