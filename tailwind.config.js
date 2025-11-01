/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lato"', 'sans-serif'], // Font cho các đoạn văn bản
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease both',
        'float-heart': 'float-heart 10s infinite ease-in-out',
      },
      keyframes: {
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'float-heart': {
          '0%': {
            transform: 'translateY(100%) scale(0.8)',
            opacity: '0',
          },
          '50%': { opacity: '1' },
          '100%': {
            transform: 'translateY(-120%) scale(1.2)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}