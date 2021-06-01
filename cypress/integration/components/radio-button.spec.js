context('Radio Button Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-radio-button--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Radio Button', () => {
        cy.get('[data-cy=radio-button-standard]')
            .should('have.value', 'Test')
    })
})

context('Radio Button Disabled', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-radio-button--disabled');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Radio Button', () => {
        cy.get('[data-cy=radio-button-disabled]')
            .should('have.value', 'Test')
    })
})