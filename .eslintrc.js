module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
  },
  plugins: ['html'],
};
/* eslint-env jquery */ // hides $ jquery unknown error
// https://eslint.org/docs/user-guide/configuring
