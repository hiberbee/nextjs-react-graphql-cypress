import { graphql } from "@support/e2e"

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("should valid response", () => {
    graphql.companies({ input: { limit: 1 } })
    cy.get("@query:companies").then((result: { data: unknown }) => {
      const data = result.data as Query
      console.log(data)
      expect(result).property("data").exist
      expect(result).not.have.property("errors")
      expect(data.allCompanies).length.greaterThan(0)
    })
  })
})
