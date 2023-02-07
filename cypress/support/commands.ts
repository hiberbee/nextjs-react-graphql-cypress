import { graphql } from "./e2e"
import "../types/cypress"
Cypress.Commands.add("logout", () => {
  cy.window().its("localStorage").invoke("removeItem", "jwt")
  cy.visit("/login")
})

Cypress.Commands.add("graphql", () => {
  graphql()
})
