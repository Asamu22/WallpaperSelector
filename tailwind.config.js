/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FBB03B',
          secondary: '#FFA821',
        },
        accent: {
          pink: '#EC0C43',
        },
        neutral: {
          black: '#000000',
          lightGray: '#F8F8F8',
          gray: '#6B7280',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        clash: ['Clash Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
