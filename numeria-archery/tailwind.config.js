/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'academy-gold': '#F4B942',
        'academy-gold-dark': '#F59E0B',
        'sky-blue': '#87CEEB',
        'sky-blue-dark': '#5DADE2',
        'cloud-white': '#FFFEF7',
        'meadow-green': '#7CB342',
        'sunset-coral': '#FF8A65',
        'lavender-mist': '#B39DDB',
        'dark-text': '#1A1A1A',
        'success-green': '#4CAF50',
        'warning-orange': '#FF9800',
      },
      fontFamily: {
        'heading': ['Fredoka One', 'Arial Rounded', 'sans-serif'],
        'body': ['Nunito', 'Open Sans', 'sans-serif'],
      },
      animation: {
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'star-pop': 'star-pop 0.6s ease-out',
      },
      keyframes: {
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(244, 185, 66, 0.4)' },
          '50%': { boxShadow: '0 0 20px 10px rgba(244, 185, 66, 0.2)' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        'star-pop': {
          '0%': { transform: 'scale(0) rotate(0deg)' },
          '50%': { transform: 'scale(1.3) rotate(180deg)' },
          '100%': { transform: 'scale(1) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
