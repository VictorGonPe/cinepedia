// jest.config.ts
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';


export default {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|mjs|js|html)$': ['ts-jest', { tsconfig: 'tsconfig.spec.json' }],
    },
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    testMatch: ['**/*.spec.ts'],
};
