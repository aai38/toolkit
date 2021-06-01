context('Datepicker Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-datepicker--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Datepicker', () => {
        cy.get('[data-cy=datepicker--standard]')
            .should('have.value', 'Test')
    })
})

context('Datepicker Range Picker', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-datepicker--range-picker');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Datepicker', () => {
        cy.get('[data-cy=datepicker--rangepicker]')
            .should('have.value', 'Test')
    })
})