
module.exports = {
  setupFiles: ["<rootDir>/__test__/setup.js"],
  reporters: ['default', 'jest-junit'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx}',
    '!<rootDir>/__test__/**/*.(spec|test).{js,jsx}'
  ],
  moduleNameMapper: {
    '.+\\.(css|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@helpers/(.*)$': '<rootDir>/src/helpers/$1',
    '^@reducers/(.*)$': '<rootDir>/src/reducers/$1',
    '^@actions/(.*)$': '<rootDir>/src/actions/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/src/index.jsx',
    '<rootDir>/src/store/configureStore.js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
};
