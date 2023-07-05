module.exports = {
    preset: 'ts-jest/presets/default',
    testEnvironment: 'node',
    roots: ['<rootDir>/src/__tests__/integration'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};