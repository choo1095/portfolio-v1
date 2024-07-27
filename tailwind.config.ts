import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-raleway)",
        "sans-serif": "var(--font-crimson-text)",
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slow-bounce": "slow-bounce 6.38s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),

    plugin(function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      const newUtilities = {
        ".filter-primary-900": {
          filter:
            "invert(20%) sepia(43%) saturate(2757%) hue-rotate(339deg) brightness(85%) contrast(100%)",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
} satisfies Config;

export default config;
