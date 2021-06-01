


  context('Input', () => {
    beforeEach(() => {
          cy.visit('iframe.html?id=example-input--standard');
    })
    it('Test true!', () => {
      expect(true).to.equal(true)
    })
    it('Find Input', () => {
      cy.get('[data-cy=test]')
          .should('have.value', 'Test')
    })
  })

  context('Card', () => {
    beforeEach(() => {
          cy.visit('iframe.html?id=example-card--standard');
    })
    it('Test False!', () => {
      expect(true).to.equal(false)
    })

  })
