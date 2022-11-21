/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts,css}'],
  theme: {
    colors: {
      'background-color': '#202023',
      'accent-color': '#313134',
      'text-color': '#EDEDED',
      'teal-color': '#4FD1C5'
    },
    extend: {
      fontFamily: {
        sans: ['uncut-sans', ...defaultTheme.fontFamily.sans],
        serif: ['sprat', ...defaultTheme.fontFamily.serif]
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};