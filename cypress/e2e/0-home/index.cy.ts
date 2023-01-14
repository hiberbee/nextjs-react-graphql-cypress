import { getSdk } from "@support/client";
import { graphql } from "@support/e2e";

describe("Homepage", () => {
  it("should contain NextJS alt", () => {
    cy.visit("/");

    graphql().companies({ input: { limit: 1 } });

    cy.get("@query:companies").then((result) => {
      expect(result).property("data").exist;
      expect(result).not.have.property("errors");
      expect(result.data["allCompanies"][0].id).length(36);
    });
  });
});
