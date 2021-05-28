module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#0f2e36',
      secondary: '#28525d',
      tertiary: '#bacfd4',
      accent: '#582944',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#bacfd4',
      accent: '#0f2e36',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
