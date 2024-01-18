const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'http://lojaebac.ebaconline.art.br/',
      // implementa uma url base, sendo necessário complementá-la 
      // no cy.visit('complemento da url')

  },
});
 