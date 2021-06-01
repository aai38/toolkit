context('Expansion Panel Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-expansion-panel--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Expansion Panel', () => {
        cy.get('[data-cy=expansion-panel--standard]')
            .should('have.value', 'Test')
    })
})

context('Expansion Panel Selfaware', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-expansion-panel--selfaware');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find  Expansion Panel', () => {
        cy.get('[data-cy=expansion-panel--selfaware]')
            .should('have.value', 'Test')
    })
})

context('Expansion Panel Disabled', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-expansion-panel--disabled');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Expansion Panel', () => {
        cy.get('[data-cy=expansion-panel--disabled]')
            .should('have.value', 'Test')
    })
})