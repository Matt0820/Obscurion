import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cinzel)", "Georgia", "serif"],
      },
      colors: {
        blood: {
          DEFAULT: "#8b1a1a",
          dark: "#5c0f0f",
        },
        bone: {
          DEFAULT: "#e8e4dc",
          dark: "#c4bfb3",
        },
        abyss: "#050505",
        shadow: "#0a0a0a",
        ash: "#2a2a2a",
      },
    },
  },
  plugins: [],
}

export default config
