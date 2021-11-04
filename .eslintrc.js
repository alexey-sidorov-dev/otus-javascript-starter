module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-base",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "max-len": ["error", { ignoreComments: true, code: 120 }],
    "no-param-reassign": ["error", { props: false }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-use-before-define": ["error", { functions: true, classes: true }],
  },
  plugins: ["jest"],
};
