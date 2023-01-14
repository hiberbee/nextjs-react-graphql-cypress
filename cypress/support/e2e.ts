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

import "@support/commands";
import { getSdk } from "@support/client";
import { parse, type OperationDefinitionNode } from "graphql";

const graphql = () => {
  return getSdk((query, variables) => {
    const operation = parse(query).definitions[0] as OperationDefinitionNode;
    cy.log("graphql", operation);
    cy.request({
      url: Cypress.env("API_URL") ?? [Cypress.config("baseUrl"), "/graphql"].join(),
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: { query, variables },
    })
      .then((response) => response.body)
      .as([operation.operation, operation.name?.value].join(":"));
    return Promise.resolve();
  });
};

export { graphql };
