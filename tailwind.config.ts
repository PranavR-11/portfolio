import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Near-black neutral ramp. Grounded on Raycast's canvas (#07080a):
        // monochrome-dominant, near-zero chroma in the greys.
        ink: {
          950: "#08080A",
          900: "#0C0D10",
          850: "#111216",
          800: "#16171C",
          700: "#1E2027",
          600: "#2A2C34",
        },
        fg: {
          DEFAULT: "#F4F4F6",
          muted: "#9B9BA5",
          faint: "#6C6C78",
        },
        // Single accent. Warm signal orange against cool near-black: high
        // contrast, and deliberately not the default AI violet/blue glow.
        signal: {
          300: "#FFB273",
          400: "#FF9440",
          500: "#F5822E",
          600: "#D2681C",
        },
      },
      fontFamily: {
        sans: ["Geist Variable", "Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono Variable", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        snug: "-0.03em",
      },
      maxWidth: {
        content: "76rem",
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
