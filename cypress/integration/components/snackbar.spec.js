context('Snackbar Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-snackbar--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Snackbar', () => {
        cy.get('[data-cy=snackbar--standard]')
            .should('have.value', 'Test')
    })
})

context('Snackbar Time Limited', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-snackbar--time-limited');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Snackbar', () => {
        cy.get('[data-cy=snackbar--time-limited]')
            .should('have.value', 'Test')
    })
})