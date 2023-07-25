import type {Config} from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#F5F5F7',
      'white-dim': '#a1a1a6',
      borders: '#1C1C1E',
      accent: '#0A84FF',
    },
  },
  plugins: [],
} satisfies Config;
