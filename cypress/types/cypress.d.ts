
export declare global {
  declare namespace Cypress {
    export interface Chainable<T = unknown> {
      logout: () => Chainable<void>
    }
  }
}
