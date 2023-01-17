export declare global {
  namespace Cypress {
    export interface Chainable<T = unknown> {
      logout(): Chainable<T>
      graphql(): Chainable<T>
    }
  }
}
