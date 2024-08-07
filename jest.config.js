// import type { Config } from 'jest';

// const config: Config = {
//   verbose: true,
//   clearMocks: true,
//   preset: 'ts-jest',
//   collectCoverage: true,
//   coverageDirectory: "coverage",
//   coverageProvider: "v8",
//   testEnvironment: "jsdom",
//   transform: {
//     '^.+\\.(ts|tsx)$': 'ts-jest',
//     '^.+\\.(js|jsx)$': 'babel-jest',
//   },
//   moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
//   transformIgnorePatterns: ['/node_modules/'],
//   setupFilesAfterEnv: ['./jest.setup.ts'],
// };

// export default config;


module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transformIgnorePatterns: ['/node_modules/(?!your-module-to-transform).+\\.js$'],

};
