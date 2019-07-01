module.exports = {
  env: {
    browser: true,
    es6: true,
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
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "import/no-unresolved": [2, {
      commonjs: true
    }],
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "import/no-named-as-default": 0,
  },
  settings: {
    "import/resolver": "webpack"
  }
};
