context('Checkbox Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-checkbox--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Checkbox', () => {
        cy.get('[data-cy=checkbox--standard]')
            .should('have.value', 'Test')
    })
})

context('Checkbox Checked', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-checkbox--checked');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Checkbox', () => {
        cy.get('[data-cy=checkbox--checked]')
            .should('have.value', 'Test')
    })
})

context('Checkbox Disabled', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-checkbox--disabled');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Checkbox', () => {
        cy.get('[data-cy=checkbox--disabled]')
            .should('have.value', 'Test')
    })
})