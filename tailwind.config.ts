import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#111111",
        "surface-2": "#1a1a1a",
        border: "#2a2a2a",
        "text-primary": "#e5e5e5",
        "text-muted": "#737373",
        accent: "#22c55e",
      },
    },
  },
  plugins: [],
};
export default config;
