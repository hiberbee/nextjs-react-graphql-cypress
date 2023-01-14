Cypress.Commands.add("logout", () => {
  cy.window().its("localStorage").invoke("removeItem", "jwt");
  cy.visit("/login");
});
