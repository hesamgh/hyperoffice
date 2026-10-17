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
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#93c5fd",
          400: "#6ea8ff",
          500: "#6380ff",
          600: "#4f63f5",
          700: "#4355d8",
          800: "#3746ae",
          900: "#2f3b8f",
          950: "#1e2560",
        },
        surface: {
          DEFAULT: "#09090f",
          card: "#12121a",
          elevated: "#1a1a26",
          border: "#2a2a3e",
        },
      },
      fontFamily: {
        sans: ["Tahoma", "var(--font-iran-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,128,255,0.32), transparent)",
      },
      boxShadow: {
        neon: "0 0 24px rgba(99, 128, 255, 0.38), 0 0 40px rgba(99, 128, 255, 0.12)",
        "neon-sm":
          "0 0 14px rgba(99, 128, 255, 0.3), 0 0 24px rgba(99, 128, 255, 0.1)",
        "neon-card":
          "0 0 0 1px rgba(99, 128, 255, 0.1) inset, 0 0 32px rgba(99, 128, 255, 0.14), 0 20px 50px rgba(0, 0, 0, 0.4)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
    },
  },
  plugins: [],
};

export default config;
