class InventoryPage {
  selectors = {
    titleSpan: ".title",
    inventoryContainer: "#inventory_container",
    titleProducts: '[id$="_title_link"]',
    addButtonCard: '[id^="add-to-cart-sauce-labs"]',
    removeButtonCard: '[id^="remove-sauce-labs-"]',
    shoppingCardBadge: ".shopping_cart_badge",
    inventoryItemName: ".inventory_item_name",
    inventoryItemDesc: ".inventory_item_desc",
    inventoryItemPrice: ".inventory_item_price",
    itemImgLink: '[id^="item_"] img',
  };

  get(selectorKey) {
    return cy.get(this.selectors[selectorKey]);
  }

  addProducToCart(productName) {
    cy.contains(this.selectors.titleProducts, productName)
      .parent()
      .next()
      .find(this.selectors.addButtonCard)
      .click();
  }

  seeProduct(productName) {
    cy.contains(this.selectors.titleProducts, productName)
      .parent()
      .parent()
      .parent()
      .find(this.selectors.itemImgLink)
      .click();
  }
}
export const inventoryPag = new InventoryPage();
