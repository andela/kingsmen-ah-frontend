module.exports = {
  plugins: [
    'cypress',
    'chai-friendly'
  ],
  env: {
    'cypress/globals': true
  },
  'extends': [
    'plugin:cypress/recommended'
  ],
  rules: {
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2
  }
}
