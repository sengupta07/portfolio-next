import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#161616',
        foreground: "#1E1E1F",
        topForeground: "#222223",
        linkHover: "#1B1B1C",
        textHover: "#C5C0C0",
        primaryTheme: "#F24E1E",
        tag:"#85E0BA"
      },
      borderRadius: {
        elements: '20px',
      },
      keyframes: {
        'infinite-scroll-ttb': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-100%)' },
        },
        'infinite-scroll-btt': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.8)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'infinite-scroll-rtl': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-ltr': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        'infinite-scroll-ttb': 'infinite-scroll-ttb 25s linear infinite',
        'infinite-scroll-btt': 'infinite-scroll-btt 25s linear infinite',
        'infinite-scroll-rtl': 'infinite-scroll-rtl 25s linear infinite',
        'infinite-scroll-ltr': 'infinite-scroll-ltr 25s linear infinite',
        fadeInUp: 'fadeInUp 3s ease-in forwards',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [],
} satisfies Config;
