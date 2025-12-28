/**
 * @type {import("prettier").Config}
 */
export default {
  semi: true,
  trailingComma: "all",
  arrowParens: "always",
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: ["*.md", "*.markdown"],
      options: {
        proseWrap: "preserve",
      },
    },
  ],
};
