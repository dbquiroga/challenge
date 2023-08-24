import { homeSaucePag } from "../support/pages/homeSaucePage";
import { inventoryPag } from "../support/pages/inventoryPage";
import tests from "../fixtures/sauceUsers.json";

describe("Challenge | Functionality Login", () => {
  beforeEach(() => {
    cy.visit("");
  });

  tests.forEach((test) => {
    it(test.name, () => {
      if (test.name === "TC5:should show username required") {
        homeSaucePag.typePassword(test.password);
      } else if (test.name === "TC6:should show password required") {
        homeSaucePag.typeUsername(test.username);
      } else {
        homeSaucePag.typeUsername(test.username);
        homeSaucePag.typePassword(test.password);
      }

      homeSaucePag.clickLogin();

      if (test.name === "TC1:login into to inventory page") {
        inventoryPag.get.titleSpan().should("have.text", test.expected);
      } else {
        homeSaucePag.get.errorMessage().should("have.text", test.expected);
      }
    });
  });
});
