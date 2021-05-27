module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#051e29',
      secondary: '#0A4056',
      tertiary: '#bae5f7',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
