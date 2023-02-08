// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import { getSdk } from "@support/graphql"
import { parse, type OperationDefinitionNode } from "graphql"

export interface Response<T extends keyof Query> {
  data: { [K in T]: Query[T] }
  errors: Maybe<{ name: string }[]>
}

const graphql = getSdk((query, variables) => {
  const operation = parse(query).definitions[0] as OperationDefinitionNode
  cy.log("graphql", operation)
  const alias = [operation.operation, operation.name?.value].join(":")
  cy.request({
    url: Cypress.env("API_URL") ?? "/graphql",
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: { query, variables },
  })
    .then((response) => response.body)
    .as(alias)
  return Promise.resolve()
})

export { graphql }
