context('Dialog Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-dialog--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Dialog', () => {
        cy.get('[data-cy=dialog--standard]')
            .should('have.value', 'Test')
    })
})

context('Dialog Two Buttons', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-dialog--two-buttons');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Dialog', () => {
        cy.get('[data-cy=dialog--two-buttons]')
            .should('have.value', 'Test')
    })
})