context('Card Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-card--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Card', () => {
        cy.get('[data-cy=card-standard]')
            .should('have.value', 'Test')
    })
})

context('Card Without Picture', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-card--without-picture');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Card', () => {
        cy.get('[data-cy=card--without-picture]')
            .should('have.value', 'Test')
    })
})

context('Card Load Picture', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-card--load-picture');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Card', () => {
        cy.get('[data-cy=card--load-picture]')
            .should('have.value', 'Test')
    })
})