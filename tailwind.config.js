/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Great Vibes"', 'cursive'], // Font cho các tiêu đề
        sans: ['"Lato"', 'sans-serif'], // Font cho các đoạn văn bản
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}