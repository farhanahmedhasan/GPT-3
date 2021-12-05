module.exports = {
  // mode: 'jit',
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      keyframes: true,
    },
  },

  darkMode: 'class',

  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },

      backgroundColor: {
        transparent: 'transparent',
        primary: 'var(--color-bg-primary)',
      },

      textColor: {
        transparent: 'transparent',
        primary: 'var(--text-primary)',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
