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
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        xl: '4rem',
        '2xl': '6rem',
      },
    },

    extend: {
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
      },

      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },

      backgroundColor: {
        transparent: 'transparent',
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
        quaternary: 'var(--color-bg-quaternary)',
        quinary: 'var(--color-bg-quinary)',
      },

      textColor: {
        transparent: 'transparent',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        tertiary: 'var(--text-tertiary)',
      },

      margin: {
        extra: 'var(--margin-extra)',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
