// tailwind.config.js
module.exports = {
  plugins: [require('@tailwindcss/typography')],
  purge: {
    content: ['./src/**/*.html', './components/**/*.tsx', './pages/**/*.tsx'],
  },
  theme: {
    extend: {
      colors: {
        tinyblue: {
          100: '#E5E7FF',
          200: '#b9beff',
          300: '#969eff',
          400: '#737dff',
          500: '#505dff',
          600: '#404acc',
          700: '#303899',
          800: '#202566',
          900: '#101333',
        },
      },
      height: {
        hero: '568px',
        lgHero: '768px',
      },
      minWidth: {
        '1/4vw': '25vw',
        '1/2vw': '50vw',
        '3/4vw': '75vw',
        '1/1vw': '75vw',
      },
    },
  },
};
