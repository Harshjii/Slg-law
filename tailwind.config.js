/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#F9F8F5',
          200: '#F3EFE6',
          300: '#E8E0D0',
        },
        navy: {
          950: '#060E1D',
          900: '#0B1B3D',
          800: '#112959',
          700: '#1B3B7A',
          600: '#2A5298',
        },
        gold: {
          100: '#FBF7EE',
          200: '#F4EBCE',
          300: '#E7D59E',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#B08B44',
          700: '#8E6E2E',
        },
        legal: {
          dark: '#0B1B3D',       // Logo primary deep navy blue
          darker: '#060E1D',     // Deep midnight navy
          accent: '#C5A059',     // Logo metallic gold
          accentHover: '#B08B44',// Hover gold
          accentLight: '#FBF7EE',// Subtle gold cream
          border: '#E2D9C8',     // Warm refined border
          cardBg: '#FAFAF7'      // Crisp warm ivory card
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
