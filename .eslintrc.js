module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
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
  rules: {
    "one-var": 0,
    "one-var-declaration-per-line": 0,
    "new-cap": 0,
    "consistent-return": 0,
    "no-param-reassign": 0,
    "comma-dangle": 0,
    "curly": [
      "error",
      "multi-line"
    ],
    "import/no-unresolved": [2, {
      commonjs: true
    }],
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "import/no-named-as-default": 0,
  },
  settings: {
    "import/resolver": {webpack: {config: 'webpack.base.js'}}
  }
};
