const config = {
  printWidth: 120,
  singleQuote: true,
  overrides: [
    {
      files: "*.liquid",
      options: {
        singleQuote: false
      }
    }
  ],
  plugins: ["@shopify/prettier-plugin-liquid", "prettier-plugin-tailwindcss"]
};

export default config;
