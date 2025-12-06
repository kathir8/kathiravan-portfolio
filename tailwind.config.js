/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: '#6366f1', // Indigo 500
        secondary: '#1e293b', // Slate 800
        accent: '#38bdf8', // Sky 400
      }
    },
  },
  plugins: [],
}