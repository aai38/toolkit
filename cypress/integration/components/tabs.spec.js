context('Tabs Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-tabs--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Tabs', () => {
        cy.get('[data-cy=tabs--standard]')
            .should('have.value', 'Test')
    })
})

context('Tabs More Tabs', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-tabs--more-tabs');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Tabs', () => {
        cy.get('[data-cy=tabs--more-tabs]')
            .should('have.value', 'Test')
    })
})