/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F2C67', // Professional Navy
        secondary: '#2563EB', // Bright Blue
        soft: '#F8FAFC',
        text: '#1E293B',
        accent: '#3B82F6', // Blue accent
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
      },
    }
  },
  plugins: [],
}
