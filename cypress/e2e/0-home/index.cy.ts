import { graphql, Response } from "../../support/e2e";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should contain NextJS alt", () => {
    graphql().companies({ input: { limit: 1 } });
    cy.get<Response<"allCompanies">>("@query:companies").then((result) => {
      console.log(result.data.allCompanies?.[0]?.employees?.[0].address);
      expect(result).property("data").exist;
      expect(result).not.have.property("errors");
      expect(result.data.allCompanies).length.greaterThan(0);
    });
  });
});
