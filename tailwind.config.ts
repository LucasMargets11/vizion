import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    'opacity-0','opacity-100','translate-y-4','translate-y-0','scale-95','scale-100'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem'
      }
    },
    extend: {
      colors: {
        base: {
          900: '#0B0E13'
        },
        brand: {
          DEFAULT: '#00D4FF'
        },
        accent: {
          DEFAULT: '#FF6B3D'
        }
      },
      fontFamily: {
        outfit: ['"Outfit"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif']
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: [forms]
} satisfies Config;
