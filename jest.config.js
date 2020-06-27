module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
  preset: "ts-jest",
  // The default environment in Jest is a browser-like environment through jsdom.
  // testEnvironment: "node",
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest"
  },
  testRegex: "src/.*.spec\\.(ts|tsx|js)$"
};
