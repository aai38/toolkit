context('Button Toggle Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-button-toggle--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Button Toggle', () => {
        cy.get('[data-cy=button-toggle--standard]')
            .should('have.value', 'Test')
    })
})

context('Button Toggle Legacy', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-button-toggle--legacy');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Button Toggle', () => {
        cy.get('[data-cy=button-toggle--legacy]')
            .should('have.value', 'Test')
    })
})