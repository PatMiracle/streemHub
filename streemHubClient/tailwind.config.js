/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple500: '#8B0CFF',
        purple600: '#8B0CFFaa',
      },
    },
  },
  plugins: [],
}
