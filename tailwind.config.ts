import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1D4ED8',
        'brand-gray': '#6B7280',
        'off-white':'#FDFDFD'
      },
      boxShadow: {
        custom: '0 0px 1px #000',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      screens: {
        'sm': '640px',
        'md': '800px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      gridTemplateColumns: {
        'layout': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [
  ],
  darkMode: 'class',
} satisfies Config;

