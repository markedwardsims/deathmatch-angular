module.exports = {
  preset: "jest-preset-angular",
  roots: ['src'],
  setupTestFrameworkScriptFile: "<rootDir>/src/setup-jest.ts",
  moduleNameMapper: {
    '@interfaces/(.*)': '<rootDir>/src/app/interfaces/$1',
    '@components/(.*)': '<rootDir>/src/app/components/$1',
    '@pipes/(.*)': '<rootDir>/src/app/pipes/$1'
  }
};
