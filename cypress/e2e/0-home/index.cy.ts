describe('Homepage', () => {
  it('should contain NextJS alt', () => {
    cy.visit('/')
    cy.get('img[alt="Next.js Logo"]').should('be.visible')
  })
})
