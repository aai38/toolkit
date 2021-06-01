context('Accordion Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-accordion--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Accordion', () => {
        cy.get('[data-cy=accordion--standard]')
            .should('have.value', 'Test')
    })
})

context('Accordion Multi', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-accordion--multi');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Accordion', () => {
        cy.get('[data-cy=accordion--multi]')
            .should('have.value', 'Test')
    })
})