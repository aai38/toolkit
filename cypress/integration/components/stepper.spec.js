context('Stepper Vertical', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-component-stepper--vertical');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Stepper', () => {
        cy.get('[data-cy=stepper--vertical]')
            .should('have.value', 'Test')
    })
})

context('Stepper Horizontal', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-component-stepper--horizontal');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Stepper', () => {
        cy.get('[data-cy=stepper--horizontal]')
            .should('have.value', 'Test')
    })
})