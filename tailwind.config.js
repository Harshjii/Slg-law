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
          850: '#0F244F',
          800: '#15316B',
          700: '#1D448F',
          600: '#2A5FB8',
        },
        gold: {
          50: '#FDFBF7',
          100: '#FBF7EE',
          200: '#F4EBCE',
          300: '#E7D59E',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#B08B44',
          700: '#8E6E2E',
          800: '#695120',
        },
        legal: {
          dark: '#060E1D',       // Midnight navy base
          navy: '#0B1B3D',       // Logo primary deep navy blue
          darker: '#030812',     // Deepest midnight
          accent: '#C5A059',     // Logo metallic gold
          accentHover: '#D4AF37',// Bright vibrant gold
          accentLight: 'rgba(197, 160, 89, 0.12)', // Subtle gold glow
          border: '#1B3564',     // Refined navy border
          borderGold: 'rgba(197, 160, 89, 0.35)',
          cardBg: '#0B1B3D',     // Rich navy card background
          cardHover: '#0F244F',  // Elevated card hover state
          lightText: '#F8F6F0',  // Warm ivory text
          mutedText: '#94A3B8'   // Slate 400 for secondary text
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
