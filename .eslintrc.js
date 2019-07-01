module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      "modules": true
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "import/no-unresolved": [2, {
      commonjs: true
    }]
  },
  settings: {
    "import/resolver": "webpack"
  }
};
