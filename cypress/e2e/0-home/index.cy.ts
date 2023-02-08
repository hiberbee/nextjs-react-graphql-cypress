import { graphql } from "@support/e2e"

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("should valid response", () => {
    graphql.companies({ input: { limit: 1 } })
    cy.get<GraphqlResponse<"allCompanies">>("@query:companies").then((result) => {
      console.log(result)
      expect(result).property("data").exist
      expect(result).not.have.property("errors")
      expect(result.data.allCompanies).length.greaterThan(0)
    })
  })
})
