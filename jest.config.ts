import type { Config } from 'jest';
const config: Config = {
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        /* ts-jest config goes here in Jest */
      },
    ],
  },
  testMatch: ['**/test/**/*.test.ts'],
  moduleDirectories: ['node_modules'],
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-test': {
      tsConfig: 'tsconfig.json',
      useESM: true,
    },
    Logger: {},
    Utilities: {},
  },
};
export default config;
