context('Slider Standard', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-slider--standard');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Slider', () => {
        cy.get('[data-cy=slider--standard]')
            .should('have.value', 'Test')
    })
})

context('Slider Vertical Inverted Slider', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-slider--vertical-inverted-slider');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Slider', () => {
        cy.get('[data-cy=slider--standard]')
            .should('have.value', 'Test')
    })
})

context('Slider with Thumblabel', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-slider--slider-with-thumblabel');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Slider', () => {
        cy.get('[data-cy=slider--slider-with-thumblabel]')
            .should('have.value', 'Test')
    })
})