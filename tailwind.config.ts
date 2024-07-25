import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          "50": "#fef2f2",
          "100": "#ffe2e1",
          "200": "#ffcac8",
          "300": "#ffa5a2",
          "400": "#fd706c",
          "500": "#f6423d",
          "600": "#e3251f",
          "700": "#bf1b16",
          "800": "#9e1a16",
          "900": "#831c19",
          "950": "#470a08",
          DEFAULT: "#9e1a16",
        },
      },
      keyframes: {
        "slow-bounce": {
          "0%, 100%": {
            transform: "translateY(-10%)",
          },
          "50%": {
            transform: "none",
          },
        },
      },
      animation: {
        "slow-bounce": "slow-bounce 6.38s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
