module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
  preset: "ts-jest",
  // The default environment in Jest is a browser-like environment through jsdom.
  // testEnvironment: "node",
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest"
  },
  moduleNameMapper: {
    // in .vue file, map @/xxx to <rootDir>/src/xxx
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css)$": "identity-obj-proxy"
  },
  testRegex: "src/.*.spec\\.(ts|tsx|js)$"
};
