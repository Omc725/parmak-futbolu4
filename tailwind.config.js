/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      animation: {
        'score-pop': 'score-pop 0.5s ease-in-out',
      },
      keyframes: {
        'score-pop': {
          '0%': {
            transform: 'scale(1)',
            textShadow: 'none',
          },
          '50%': {
            transform: 'scale(1.4)',
            color: '#f1c40f',
            textShadow: '0 0 10px #f1c40f',
          },
          '100%': {
            transform: 'scale(1)',
            textShadow: 'none',
          },
        },
      },
    },
  },
  plugins: [],
}