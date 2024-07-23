/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        myblue: '#3A5E91',
        darkblue: '#0F2848',
        myyellow: '#E7DF22'
      },
      fontFamily: {
        'poly': ['Poly', 'serif'],
        'josefin': ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

