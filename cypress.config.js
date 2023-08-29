const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "frqpqd",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    watchForFileChanges: false,
    video: true,

    env: {
      user: {
        correctUser: "standard_user",
        correctPass: "secret_sauce",
      },

      endpoint: {
        inventory: "/inventory.html",
        cart: "/cart.html",
        checkoutOne: "/checkout-step-one.html",
        checkoutTwo: "/checkout-step-two.html",
        checkoutAll: "/checkout-complete.html",
        product: "/inventory-item.html",
      },
    },
  },
});
