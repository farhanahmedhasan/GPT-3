module.exports = {
  mode: 'jit',

  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      keyframes: true,
    },
  },

  darkMode: 'media',

  theme: {
    container: {
      center: true,
    },

    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },

    backgroundImage: {
      'gradient-primary-dark': 'radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%)',
    },

    backgroundColor: {
      transparent: 'transparent',
      primary: 'var(--color-bg-primary)',
    },

    textColor: {
      transparent: 'transparent',
      primary: 'var(--color-bg-primary)',
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
