context('Table Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-table--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Table', () => {
        cy.get('[data-cy=table--standard]')
            .should('have.value', 'Test')
    })
})

context('Table with Paginator', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-table--with-paginator');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Table', () => {
        cy.get('[data-cy=table--with-paginator]')
            .should('have.value', 'Test')
    })
})

context('Table with Sort', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-table--with-sort');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Table', () => {
        cy.get('[data-cy=table--with-sort]')
            .should('have.value', 'Test')
    })
})