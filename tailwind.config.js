/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        'light-bg': '#f8f9fa',
        'light-text': '#212529',
        'light-primary': '#4f46e5',
        'light-secondary': '#6c757d',
        'light-accent': '#e9ecef',
        'dark-bg': '#0d1117',
        'dark-text': '#c9d1d9',
        'dark-primary': '#58a6ff',
        'dark-secondary': '#8b949e',
        'dark-accent': '#161b22',
      },
    },
  },
  plugins: [],
};