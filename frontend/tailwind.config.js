// tailwind.config.js
module.exports = {
  plugins: [require('@tailwindcss/ui')],
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./src/**/*.html', './components/**/*.jsx', './pages/**/*.jsx'],
  },
  theme: {
    extend: {
      colors: {
        // Add new colors here
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
