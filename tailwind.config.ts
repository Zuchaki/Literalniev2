import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        custom: "0 0 0 2px",
      },
      fontSize: {
        "heading-2xl": ["76px", { lineHeight: "83.6px", fontWeight: 600 }],
        "heading-xl": ["64px", { lineHeight: "70.4px", fontWeight: 600 }],
        "heading-l": ["54px", { lineHeight: "59.4px", fontWeight: 600 }],
        "heading-m": ["48px", { lineHeight: "52.8px", fontWeight: 600 }],
        "heading-s": ["40px", { lineHeight: "44px", fontWeight: 600 }],
        "heading-xs": ["32px", { lineHeight: "41.6px", fontWeight: 600 }],
        "heading-2xs": ["24px", { lineHeight: "33.6px", fontWeight: 600 }],
        "heading-3xs": ["20px", { lineHeight: "30px", fontWeight: 500 }],
        "body-l": ["18px", { lineHeight: "27px", fontWeight: 400 }],
        "body-m": ["16px", { lineHeight: "25.6px", fontWeight: 400 }],
        "body-s": ["14px", { lineHeight: "18.2px", fontWeight: 400 }],
        caption: ["12px", { lineHeight: "13.2px", fontWeight: 500 }],
        "button-text": ["16px", { lineHeight: "16px", fontWeight: 500 }],
        "ui-text": ["16px", { lineHeight: "16px", fontWeight: 400 }],
      },
      // Primary Colors
      // Primary Colors
      // Primary Colors
      colors: {
        primary: {
          100: "#F5F8FD",
          200: "#D7E7F7",
          300: "#BAD6F2",
          400: "#9CC4EC",
          500: "#7FB3E6",
          600: "#6292D0",
          700: "#4D78AE",
          800: "#3B5C8C",
          900: "#2A406A",
          1000: "#193448",
        },
        // Neutral Colors
        neutral: {
          100: "#F4F4F4",
          200: "#E0E0E0",
          300: "#CCCCCC",
          400: "#B8B8B8",
          500: "#A3A3A3",
          600: "#8F8F8F",
          700: "#7A7A7A",
          800: "#666666",
          900: "#515151",
          1000: "#3D3D3D",
        },
        // Secondary Colors
        secondary: {
          100: "#FFE8F0",
          200: "#FFC2DB",
          300: "#FF9CC6",
          400: "#FF77B1",
          500: "#FF519C",
          600: "#FF2C87",
          700: "#E61E7A",
          800: "#C01870",
          900: "#A01466",
          1000: "#8B104B",
        },
      },

      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
      },
    },
  },
  plugins: [],
};
export default config;
