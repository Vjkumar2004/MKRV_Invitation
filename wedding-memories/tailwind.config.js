/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepred: {
          500: '#8B0A1A',
          600: '#7A0817',
          700: '#650513',
        },
        gold: {
          300: '#F4D78A',
          400: '#E7C366',
          500: '#CFA43E',
        },
        roseveil: '#FFF6F7',
      },
      fontFamily: {
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      boxShadow: {
        glow: '0 10px 30px rgba(123, 10, 26, 0.18)',
        soft: '0 6px 20px rgba(0,0,0,0.06)'
      },
      keyframes: {
        petalFloat: {
          '0%': { transform: 'translate3d(var(--sx,0), -10%, 0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '50%': { transform: 'translate3d(calc(var(--sx,0) + 8px), 55%, 0) rotate(180deg)', opacity: '0.9' },
          '100%': { transform: 'translate3d(calc(var(--sx,0) - 8px), 110%, 0) rotate(360deg)', opacity: '0' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(0.6)', opacity: '0.2' },
          '50%': { transform: 'scale(1)', opacity: '0.8' }
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'petal-float': 'petalFloat 12s infinite linear',
        sparkle: 'sparkle 3s ease-in-out infinite',
        drift: 'drift 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
