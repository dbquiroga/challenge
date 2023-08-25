import { inventoryPag } from "../support/pages/inventoryPage";
import { products } from "../fixtures/products.json";
/// <reference types="cypress" />

describe("Challenge | Functionality add a product to the shopping cart", () => {
  beforeEach("", () => {
    cy.login();
    cy.url().should("include", "inventory");
  });

  it("TC7: User adds a product from the Product List Page to the Shopping-Cart successfully", () => {
    inventoryPag.addProducToCart(products.name);

    inventoryPag.get("removeButtonCard").should("contain", "Remove");
    inventoryPag
      .get("shoppingCardBadge")
      .should("exist")
      .should("have.text", "1")
      .click();
    cy.url().should("include", "cart");

    inventoryPag.get("inventoryItemName").should("contain", products.name);
    inventoryPag
      .get("inventoryItemDesc")
      .should("contain", products.itemDescription);
    inventoryPag
      .get("inventoryItemPrice")
      .should("contain", products.itemPrice);
  });

  it("TC8: User adds a product from the Product Detail Page to the Shopping-Cart successfully", () => {
    inventoryPag.seeProduct(products.name);
    cy.url().should("include", "item");

    inventoryPag.get("addButtonCard").click();
    inventoryPag.get("removeButtonCard").should("contain", "Remove");
    inventoryPag
      .get("shoppingCardBadge")
      .should("exist")
      .should("have.text", "1")
      .click();

    inventoryPag.get("inventoryItemName").should("contain", products.name);
    inventoryPag
      .get("inventoryItemDesc")
      .should("contain", products.itemDescription);
    inventoryPag
      .get("inventoryItemPrice")
      .should("contain", products.itemPrice);
  });
});
