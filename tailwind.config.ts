import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Near-black neutral ramp — the canvas everything sits on.
        ink: {
          950: "#08080B",
          900: "#0B0B10",
          850: "#101017",
          800: "#15151E",
          700: "#1D1D28",
          600: "#282835",
        },
        // Foreground ramp.
        fg: {
          DEFAULT: "#ECECF1",
          muted: "#9E9EAE",
          faint: "#6B6B7B",
        },
        // Single accent: iris.
        iris: {
          200: "#D6CEFF",
          300: "#B4A5FF",
          400: "#9781FF",
          500: "#7C5CF5",
          600: "#6743DD",
          700: "#5233B4",
        },
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
        mono: ["JetBrains Mono Variable", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        snug: "-0.03em",
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
