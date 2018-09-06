module.exports = {
  preset: "jest-preset-angular",
  globals: {
    "ts-jest": {
      "tsConfigFile": "tsconfig.json"
    },
    "__TRANSFORM_HTML__": true
  },
  roots: ['src'],
  setupTestFrameworkScriptFile: "<rootDir>/src/setup-jest.ts",
  moduleNameMapper: {
    '@interfaces/(.*)': '<rootDir>/src/app/interfaces/$1',
    '@components/(.*)': '<rootDir>/src/app/components/$1',
    '@pipes/(.*)': '<rootDir>/src/app/pipes/$1',
    '@actions/(.*)': '<rootDir>/src/app/actions/$1',
    '@reducers/(.*)': '<rootDir>/src/app/reducers/$1'
  },
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      lines: 80,
      functions: 80
    }
  },
  transformIgnorePatterns: [
    "node_modules/(?!@ngrx|angular2-ui-switch|ng-dynamic|lodash-es)"
  ]
};
