const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qamid.tmweb.ru/",
    projectId: "t36hx5",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
