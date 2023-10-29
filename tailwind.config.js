/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./layout/*.liquid', './templates/*.liquid', './sections/*.liquid', './snippets/*.liquid'],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
    },
    extend: {},
  },
  plugins: [],
};
