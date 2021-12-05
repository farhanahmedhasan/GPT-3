module.exports = {
  mode: 'jit',
  purge: ['./index.html', './public/**/*.html', './public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
