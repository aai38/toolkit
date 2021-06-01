context('Menu Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-menu--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Menu', () => {
        cy.get('[data-cy=menu--standard]')
            .should('have.value', 'Test')
    })
})

context('Menu with two parts', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-menu--with-two-parts');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Menu', () => {
        cy.get('[data-cy=menu--with-two-parts]')
            .should('have.value', 'Test')
    })
})