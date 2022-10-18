const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video:false,
    reporter: 'mocha-allure-reporter',
    specPattern: 'cypress/e2e/tests/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
