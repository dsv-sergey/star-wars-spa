/** @type {import('ts-jest').JestConfigWithTsJest} */
/* eslint-disable */
const path = require("path");
module.exports = {
    testEnvironment: "jsdom",
    preset: "ts-jest",
    transform: {
        "^.+\\.ts?$": "ts-jest",
        '^.+\\.css$': path.resolve(__dirname, './cssTransform.js'),
    },
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    moduleDirectories: ['node_modules', 'src'],
};