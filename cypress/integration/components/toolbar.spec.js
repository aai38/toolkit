context('Toolbar Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-toolbar--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Toolbar', () => {
        cy.get('[data-cy=toolbar--standard]')
            .should('have.value', 'Test')
    })
})

context('Toolbar Two Icons', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-toolbar--two-icons');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Toolbar', () => {
        cy.get('[data-cy=toolbar--two-icons]')
            .should('have.value', 'Test')
    })
})

context('Toolbar with Menu and Content', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-toolbar--with-menu-and-content');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Toolbar', () => {
        cy.get('[data-cy=toolbar--with-menu-and-content]')
            .should('have.value', 'Test')
    })
})