context('Select Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-select--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Select', () => {
        cy.get('[data-cy=select--standard]')
            .should('have.value', 'Test')
    })
})

context('Select Selection Required', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-select--selection-required');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Select', () => {
        cy.get('[data-cy=select--selection-required]')
            .should('have.value', 'Test')
    })
})