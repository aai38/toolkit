context('Chips Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-component-chips--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Chips', () => {
        cy.get('[data-cy=chips--standard]')
            .should('have.value', 'Test')
    })
})

context('Chips Colored Removable', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-component-chips--colored-removable');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Chips', () => {
        cy.get('[data-cy=chips--colored-removalbe]')
            .should('have.value', 'Test')
    })
})