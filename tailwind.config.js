module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        josefinsans:['Josefin Sans', 'sans-serif'],
        loraserif:['Lora serif'],
      },
      color:{
          'grey':'#ececec',
          'blueshade':'#9fd3c7',
          'darkblue':'#385170',
          'blackshade':'#142d4c',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
