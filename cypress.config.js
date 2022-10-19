const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video:false,
    experimentalStudio: true,
    baseUrl: 'https://example.cypress.io/todo',
    reporter: 'mocha-allure-reporter',
    specPattern: 'cypress/e2e/tests/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
