/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
