module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/test/javascript/jest.ts'],
    coverageDirectory: '<rootDir>/target/test-results/',
    globals: {
        'ts-jest': {
            stringifyContentPathRegex: '\\.html$',
            tsConfig: 'tsconfig.json',
            astTransformers: [require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')]
        }
    },
    coveragePathIgnorePatterns: [
        '<rootDir>/src/test/javascript'
    ],
    moduleNameMapper: {
        'app/(.*)': '<rootDir>/src/main/webapp/app/$1'
    },
    reporters: [
        'default',
        [ 'jest-junit', { output: './target/test-results/TESTS-results-jest.xml' } ]
    ],
    testResultsProcessor: 'jest-sonar-reporter',
    transformIgnorePatterns: ['node_modules/(?!@angular/common/locales)'],
    testMatch: ['**/*/src/test/javascript/spec/**/@(*.)@(spec.ts)'],
    rootDir: '../../../',
    testURL: "http://localhost/"
};
