/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./page/src/**/*.{html,js}",
    "./page/public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  plugins: [],
}
