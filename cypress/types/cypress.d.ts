// @ts-ignore

declare global {
  namespace Cypress {
    interface Chainable<T = any> {
      logout(): Chainable<T>;
    }
  }
}
