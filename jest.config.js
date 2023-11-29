module.exports = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    testEnvironment: 'jsdom'
  };