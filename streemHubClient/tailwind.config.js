/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple500: '#8B0CFF',
        purple600: '#8B0CFFaa',
        purple700: '#300259',
        inputBg: '#d9d9d9',
      },
      screens: {
        lg: '992px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
}
