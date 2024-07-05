import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode variant
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        silver: "#F5F7FA",
        "light-grey": "#89939E",
        grey: "#717171",
        "dark-grey": "#4D4D4D",
        black: "#263238",
        info: "#2194F3",
        secondary: "#263238",
        primary: "#4CAF4F",
        shade2: "#388E3B",
        tint5: "#E8F5E9",
        "grey-900": "#18191F",
        // Dark mode colors
        dark: {
          silver: "#1E1E1E",
          "light-grey": "#6B7280",
          grey: "#9CA3AF",
          "dark-grey": "#D1D5DB",
          black: "#F9FAFB",
          secondary: "#E5E7EB",
          primary: "#34D399",
          shade2: "#10B981",
          tint5: "#064E3B",
          "grey-900": "#F3F4F6",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};

export default config;