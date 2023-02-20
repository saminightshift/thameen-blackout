const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
 content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Metropolis', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: '32em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        '2xl': '96em',
        'sm-max': {max: '48em'},
        'sm-only': {min: '32em', max: '48em'},
        'md-only': {min: '48em', max: '64em'},
        'lg-only': {min: '64em', max: '80em'},
        'xl-only': {min: '80em', max: '96em'},
        '2xl-only': {min: '96em'},
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio'),
  ],
}