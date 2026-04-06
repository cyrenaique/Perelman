import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#0a2e1a",
        },
        gold: {
          50: "#fefffe",
          100: "#f0faf2",
          200: "#d1e8d5",
          300: "#a7d5b0",
          400: "#6bc27d",
          500: "#3aab52",
          600: "#2d9243",
          700: "#247636",
          800: "#1d5e2b",
          900: "#164d23",
          950: "#0d3318",
        },
        chalk: {
          50: "#fafffe",
          100: "#f5faf6",
          200: "#e8f0ea",
          300: "#d6e0d8",
          400: "#a8b0aa",
        },
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "'Times New Roman'", "serif"],
        body: ["system-ui", "-apple-system", "sans-serif"],
        math: ["'Cambria Math'", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
