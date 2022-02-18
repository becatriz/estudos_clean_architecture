module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<roorDir>/src/**/*.{ts.tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
