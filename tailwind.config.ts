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
          50: "#fdf4f3",
          100: "#fce8e6",
          200: "#f9d4d1",
          300: "#f3b1ab",
          400: "#ea857d",
          500: "#dc5d54",
          600: "#c94139",
          700: "#a9332c",
          800: "#8c2d27",
          900: "#752b27",
          950: "#3f1210",
        },
        gold: {
          50: "#fdfbe9",
          100: "#fcf7c5",
          200: "#f9ec8e",
          300: "#f5db4d",
          400: "#f0c81e",
          500: "#e0b011",
          600: "#c1890c",
          700: "#9a620d",
          800: "#7f4e13",
          900: "#6c4016",
          950: "#3f2109",
        },
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "serif"],
        body: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
