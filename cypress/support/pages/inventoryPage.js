class InventoryPage {
  get = {
    titleSpan: () => cy.get(".title"),
    inventoryContainer: () => cy.get("#inventory_container"),
    titleProducts: () => cy.get('[id$="_title_link"]'),
    addButtonCard: () => cy.get('[id^="add-to-cart-sauce-labs"]'),
    removeButtonCard: () => cy.get('[id^="remove-sauce-labs-"]'),
    shoppingCardBadge: () => cy.get(".shopping_cart_badge"),
    inventoryItemName: () => cy.get(".inventory_item_name"),
    inventoryItemDesc: () => cy.get(".inventory_item_desc"),
    inventoryItemPrice: () => cy.get(".inventory_item_price"),
    itemImgLink: () => cy.get('[id^="item_"]'),
  };

    addProducToCart(productName) {
    cy.contains('[id$="_title_link"]', productName)
      .parent()
      .next()
      .find('[id^="add-to-cart-sauce-labs"]')
      .click();
  }

  seeProduct(productName) {
    cy.contains('[id$="_title_link"]', productName)
      .parent()
      .parent()
      .parent()
      .find('[id^="item_"]')
      .find("img")
      .click();
  }
}
export const inventoryPag = new InventoryPage();
