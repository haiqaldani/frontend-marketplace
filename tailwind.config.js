const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // ringColor: {
    //   'blue-default': '#3B82F6',
    // },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'gray-soft': '#f7f7f7',
        'blue-bwa': '#3252DF',
        'red-diskon': '#FF498B',
        // gray: colors.gray,
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
