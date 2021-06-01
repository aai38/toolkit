context('Slide Toggle Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-component-slide-toggle--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Slide Toggle', () => {
        cy.get('[data-cy=slide-toggle-standard]')
            .should('have.value', 'Test')
    })
})

context('Slide Toggle Disabled', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-component-slide-toggle--disabled');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Slide Toggle', () => {
        cy.get('[data-cy=slide-toggle-disabled]')
            .should('have.value', 'Test')
    })
})

context('Slide Toggle Checked', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-component-slide-toggle--checked');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Slide Toggle', () => {
        cy.get('[data-cy=slide-toggle-checked]')
            .should('have.value', 'Test')
    })
})