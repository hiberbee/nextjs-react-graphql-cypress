describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("should valid response", () => {
    cy.graphql()
      .then((api) => api.companies({ input: { limit: 1 } }))
      .then((result) => {
        console.log(result.data.allCompanies?.[0]?.employees?.[0].address)
        expect(result).property("data").exist
        expect(result).not.have.property("errors")
        expect(result.data.allCompanies).length.greaterThan(0)
      })
  })
})
