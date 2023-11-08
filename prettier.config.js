const config = {
  printWidth: 120,
  singleQuote: true,
  overrides: [
    {
      files: '*.liquid',
      options: {
        singleQuote: true,
      },
    },
  ],
  plugins: ['@shopify/prettier-plugin-liquid', 'prettier-plugin-tailwindcss'],
};

export default config;
