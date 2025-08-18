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
          black: '#0A0A0A',
          white: '#FFFFFF'
        },
        brand: {
          blue: '#5A83FF',
          mint: '#00DC9F',
          primary: '#5A83FF',
          secondary: '#00DC9F'
        }
      },
      fontFamily: {
        headings: ['"Outfit"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      },
      backdropBlur: { xs: '2px' }
    }
  },
  plugins: [forms]
} satisfies Config;
