context('Calendar', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-calendar--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Calendar', () => {
        cy.get('[data-cy=calendar]')
            .should('have.value', 'Test')
    })
})