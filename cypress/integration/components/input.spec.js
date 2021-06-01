context('Input Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-input--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Input', () => {
        cy.get('[data-cy=input--standard]')
            .should('have.value', 'Test')
    })
})

context('Input with Value', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=example-input--with-value');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Input', () => {
        cy.get('[data-cy=input--with-value]')
            .should('have.value', 'Test')
    })
})