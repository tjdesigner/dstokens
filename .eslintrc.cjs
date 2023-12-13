module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended",
    "plugin:import/recommended",
    "prettier",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-import",
    "eslint-plugin-import-helpers",
    "sonarjs",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          ["module", "/^@vr/"],
          ["/^@elements/", "/^@components/", "/^@compositions/", "/^@pages/"],
          ["/^@config/", "/^@utils/"],
          ["/^@context/", "/^@hooks/"],
          ["/^@api/", "/^@models/", "/^@errors/"],
          ["/^@src/"],
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "@typescript-eslint/no-var-requires": "off",
    "global-require": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Za-z]",
          match: false,
        },
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-duplicate-string": "off",
    "sonarjs/cognitive-complexity": ["warn", 15],
    "sonarjs/no-duplicate-string": "off",
  },
};
