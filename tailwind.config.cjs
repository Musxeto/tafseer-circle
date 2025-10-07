/**
 * Tailwind config: custom theme based on the site's logo colors.
 * Provides a royal green + golden palette (no light/dark modes).
 */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Royal green palette (primary)
        royal: {
          50: '#f3faf4',
          100: '#daf5e5',
          200: '#b7ecc8',
          300: '#89e1a1',
          400: '#5bd67f',
          500: '#2fbd54',
          600: '#2b9d48',
          700: '#1f6d33',
          800: '#154826',
          900: '#0b2d17',
        },
        // Golden palette (accent)
        tafseerGold: {
          50: '#fff9ef',
          100: '#fff4dc',
          200: '#ffe8b2',
          300: '#ffd680',
          400: '#ffc24d',
          500: '#e6a80f',
          600: '#c58f0b',
          700: '#997007',
          800: '#6e5004',
          900: '#3f2b02',
        },
        // Secondary / logo green variations
        tafseerGreen: {
          50: '#f3fbf8',
          100: '#def7ee',
          200: '#bfeedd',
          300: '#96e1bf',
          400: '#62d3a2',
          500: '#2fb586',
          600: '#279a72',
          700: '#1c6c4b',
          800: '#134633',
          900: '#0b2b20',
        },
        // Small helpers
        tafseerAccent: '#8CC63E',
        cream: '#FFF8E1',
        taupe: '#5A4A2A',
      },
      fontFamily: {
        display: ['Noto Serif', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
