module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    backgroundColor: theme => ({
      'base': '#5547b6',
      'secondary': '#f9f9f9',
      'disabled': '#d8d8d8',
      'third': "#e6e3f5",
      'green': '#15a192'
    }),
    borderColor: {
      'green': '#15a192',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
