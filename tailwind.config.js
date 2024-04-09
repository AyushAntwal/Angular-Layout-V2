/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css,scss}",
  ],
  darkMode: ['variant', [
    '@media (prefers-color-scheme: dark) { &:not(.light *) }', '&:is(.dark *)',]],
  prefix: 'tw-',
  theme: {
    extend: {},
    colors: {
      "primary": "#003d5bff",
      "secondary": "#30638eff",
      "tertiary": "#00798cff",
      "accent": "#edae49ff",
      "dark": "#424242",
      "light": "#f5f5f5",
      "danger": "#d1495bff",
      "success": "#2b9348ff",
      "warning": "#ff9f1cff",
      "info": "#6cb2ebff",
      "white": "#ffffff",
      "black": "#000000",
      "transparent": "transparent",
      "current": "currentColor"
    },
  },
  plugins: [],
}

