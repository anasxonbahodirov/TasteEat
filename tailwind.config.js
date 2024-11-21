/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors:{
        'primary-blue': '#292E36',
        'secondary-blue': '#555555',
        'white-1':'#FFF8F5',
      }
    },
  },
  plugins: [],
}

