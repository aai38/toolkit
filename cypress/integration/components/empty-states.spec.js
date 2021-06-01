context('Empty States', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-empty-states--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Empy State', () => {
        cy.get('[data-cy=empty-states]')
            .should('have.value', 'Test')
    })
})