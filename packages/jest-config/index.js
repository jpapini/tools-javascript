module.exports = {
    rootDir: '.',
    collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
    coverageDirectory: '<rootDir>/coverage',
    testMatch: ['<rootDir>/src/**/*.spec.{js,jsx,ts,tsx}'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
};
