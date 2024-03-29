module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react-refresh", "react", "@typescript-eslint"],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "*.html",
    "*.cjs",
    "*.config.ts",
    "*.d.ts",
    "env.ts",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    quotes: ["error", "double"],
    "arrow-body-style": ["error", "as-needed"],
    "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    curly: "error",
    "no-confusing-arrow": ["error", { allowParens: false }],
    "no-mixed-operators": "error",
    "no-unexpected-multiline": "error",
    "import/extensions": [
      "error",
      "always",
      { ts: "never", tsx: "never", js: "never", jsx: "never" },
    ],
    "import/order": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/no-unknown-property": ["error", { ignore: ["class"] }],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["arrow-function"],
        unnamedComponents: ["arrow-function"],
      },
    ],
    "react/jsx-no-useless-fragment": "warn",
    "no-unused-vars": "warn",
    "import/prefer-default-export": "warn",
    "import/no-unresolved": "off",
    "import/first": "off",
    "no-confusing-arrow": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "global-require": "off",
    "no-underscore-dangle": "off",
    //"i18next/no-literal-string": "warn",
    "react/no-array-index-key": "warn",
    "react/require-default-props": "warn",
  },
};
