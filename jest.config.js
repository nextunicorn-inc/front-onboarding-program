const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // '^@/graphql/(.*)$': '<rootDir>/graphql/$1',
    '^@/graphql': '<rootDir>/graphql/',
  },
};

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  return {
    ...nextJestConfig,
    moduleNameMapper: {
      '\\.svg': '<rootDir>/__mocks__/svg.js',

      ...nextJestConfig.moduleNameMapper,
    },
  };
};

module.exports = jestConfig;
