/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./layout/*.liquid', './templates/*.liquid', './sections/*.liquid', './snippets/*.liquid'],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
    },
    fontFamily: {
      body: 'var(--font-body-family)',
      heading: 'var(--font-heading-family)',
    },
    fontWeight: {
      body: 'var(--font-body-weight)',
      bold: 'var(--font-body-weight-bold)',
      heading: 'var(--font-heading-weight)',
    },
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },
  },
  plugins: [],
};
