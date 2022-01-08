// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("./jest.config");

config.testMatch = ["**/*.test.ts"];
config.coverageThreshold = {
  global: { branches: 0, functions: 0, lines: 0, statements: 0 },
};

module.exports = config;
