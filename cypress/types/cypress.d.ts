export declare global {
  namespace Cypress {
    interface Chainable<T = unknown> {
      logout(): Chainable<T>
      graphql(): Chainable<T>
    }
  }
}
