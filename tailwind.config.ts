import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/lib/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/styles/**/*.{ts,tsx,js,jsx,css}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { left: "-50%" },
          "100%": { left: "125%" },
        },
      },
      animation: {
        shine: "shine 2s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
