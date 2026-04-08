import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#063ff9",
        secondary: "#ff2e93",
        tertiary: "#ffeb3b",
        background: "#f5f6f8",
        surface: "#f5f6f8",
        "on-background": "#1A1D27",
        "on-surface": "#1A1D27",
        "on-surface-variant": "#6B7280",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "surface-container": "rgba(255, 255, 255, 0.6)",
        "surface-container-low": "rgba(255, 255, 255, 0.7)",
        "surface-container-high": "rgba(255, 255, 255, 0.8)",
        "surface-container-highest": "rgba(255, 255, 255, 0.9)",
        "primary-fixed": "#dee0ff",
        accent: "#00C2FF",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
        label: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
    },
  },
  plugins: [],
};

export default config;
