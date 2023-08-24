import { inventoryPag } from "../support/pages/inventoryPage";
import { products } from "../fixtures/products.json";
/// <reference types="cypress" />

describe("Funcionalidad añadir un producto al carrito de compras", () => {
  beforeEach("", () => {
    cy.login();
    cy.url().should("include", "inventory");
  });

  it("TC7: Usuario añade un producto del PLP al Shopping-Cart exitosamente.", () => {
    inventoryPag.addProducToCart(products.name);

    inventoryPag.get.removeButtonCard().should("contain", "Remove");
    inventoryPag.get
      .shoppingCardBadge()
      .should("exist")
      .should("have.text", "1")
      .click();
    cy.url().should("include", "cart");

    inventoryPag.get.inventoryItemName().should("contain", products.name);
    inventoryPag.get
      .inventoryItemDesc()
      .should(
        "contain",
        "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
      );
    inventoryPag.get.inventoryItemPrice().should("contain", "29.99");
  });
  it("TC8: Usuario añade un producto del Product detail Page al Shopping-Cart exitosamente.", () => {
    inventoryPag.seeProduct(products.name);
    cy.url().should("include", "item");

    inventoryPag.get.addButtonCard().click();
    inventoryPag.get.removeButtonCard().should("contain", "Remove");
    inventoryPag.get
      .shoppingCardBadge()
      .should("exist")
      .should("have.text", "1")
      .click();

    inventoryPag.get.inventoryItemName().should("contain", products.name);
    cy.log(products.itemDescription);

    inventoryPag.get
      .inventoryItemDesc()
      .should(
        "contain",
        "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
      );
    inventoryPag.get.inventoryItemPrice().should("contain", "29.99");
  });
});
