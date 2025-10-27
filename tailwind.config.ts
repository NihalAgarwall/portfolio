import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'gold-light': '#F4E4C1',
        'gold-dark': '#9B7F2A',
        platinum: '#E5E4E2',
        noir: '#0B0B0F',
        'noir-soft': '#1A1A24',
        'noir-medium': '#151521',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        space: ['var(--font-space)'],
      },
      animation: {
        'spin-slow': 'rotate 40s linear infinite',
        'spin-reverse': 'rotate 50s linear infinite reverse',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
