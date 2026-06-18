/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        sand: {
          50: "#FAF3E8",
          100: "#F0E6D0",
          200: "#E8D5B7",
          300: "#D4A574",
          400: "#C4956A",
          500: "#B07D4F",
          600: "#8B6340",
          700: "#6B4C30",
          800: "#3D2B1F",
          900: "#2D1810",
        },
        terracotta: {
          DEFAULT: "#B8634B",
          light: "#D4836B",
          dark: "#8B4533",
        },
        dusk: {
          DEFAULT: "#2C3E50",
          light: "#3D556E",
          dark: "#1A252F",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Noto Serif SC", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "scroll-hint": "scrollHint 2s ease-in-out infinite",
        "sand-drift": "sandDrift 8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scrollHint: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(10px)", opacity: "1" },
        },
        sandDrift: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" },
        },
      },
    },
  },
  plugins: [],
};
