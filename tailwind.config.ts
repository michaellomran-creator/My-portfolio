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
        space: {
          950: "#04080F",
          900: "#060E18",
          850: "#081422",
          800: "#0B1C2D", // Deep Space Blue
          750: "#0E2338",
          700: "#132D48",
          600: "#1E3E61",
        },
        cyber: {
          cyan: "#00E5FF",
          "cyan-dim": "rgba(0, 229, 255, 0.15)",
          "cyan-glow": "rgba(0, 229, 255, 0.35)",
        },
        neon: {
          blue: "#1F6AE1",
          "blue-dim": "rgba(31, 106, 225, 0.15)",
          "blue-glow": "rgba(31, 106, 225, 0.35)",
        },
        glow: {
          purple: "#7B5CFF",
          "purple-dim": "rgba(123, 92, 255, 0.15)",
        },
        text: {
          primary: "#F5F9FF", // Soft White
          secondary: "#DCE3F0", // Light Gray
          muted: "#7A8CA5", // Steel Gray
          faint: "#415168",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(to right, rgba(31, 106, 225, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(31, 106, 225, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        "cyber-sm": "0 0 15px -3px rgba(0, 229, 255, 0.15)",
        "cyber-md": "0 0 25px -4px rgba(0, 229, 255, 0.25)",
        "neon-sm": "0 0 15px -3px rgba(31, 106, 225, 0.2)",
        "neon-md": "0 0 30px -4px rgba(31, 106, 225, 0.3)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
