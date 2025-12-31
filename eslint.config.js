import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "jsx-a11y/anchor-is-valid": "warn", // Downgraded to warn for legacy code
    },
  },
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/.astro/**", "**/packages/**"],
  },
);
