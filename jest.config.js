// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'node'
  ],
  roots: [
    '<rootDir>/src'
  ],
  'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
