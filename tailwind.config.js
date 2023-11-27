/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '767px',
      lg: '979px',
      xl: '1200px',
    },
    // spacing: {

    // }
    // colors: {

    // },
    // fontFamily: {

    // },
    extend: {},
  },
  plugins: [],
}

