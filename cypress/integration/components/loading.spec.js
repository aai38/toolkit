context('Loading Spinner', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-component-loading--spinner');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Spinner', () => {
        cy.get('[data-cy=loading--spinner]')
            .should('have.value', 'Test')
    })
})

context('Loading Bar', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-component-loading--bar');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Bar', () => {
        cy.get('[data-cy=loading--bar]')
            .should('have.value', 'Test')
    })
})