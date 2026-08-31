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
        // Single accent, sampled from Pranav's own paintings: crimson is the
        // one vivid hue that recurs across the Vader, Doctor Strange and red
        // painting pieces. 600 is lifted verbatim from the Vader artwork.
        // 400 is the text-safe step (about 6:1 on ink-950); 500 is for fills
        // and large display type only.
        signal: {
          300: "#FFA3B5",
          400: "#FF5C7C",
          500: "#F0234F",
          600: "#C41C54",
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
