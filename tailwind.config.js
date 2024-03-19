/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        textPrimary: '#1E1E1E',
      },
      fontFamily: {
        textPoppins: "'Poppins', sans-serif",
      }
    },
  },
  plugins: [],
}

