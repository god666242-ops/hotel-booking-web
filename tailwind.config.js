/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 700: '#1e293b', 800: '#0f172a', 900: '#0b1220' },
        brand: { 50: '#eef2ff', 100: '#e0e7ff', 500: '#4f46e5', 600: '#4338ca', 700: '#3730a3' },
      },
      boxShadow: { card: '0 10px 30px -12px rgba(15,23,42,.18)' },
    },
  },
  plugins: [],
};
