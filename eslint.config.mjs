import pluginJs from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import globals from "globals";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: {perfectionist},
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],
    },
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
