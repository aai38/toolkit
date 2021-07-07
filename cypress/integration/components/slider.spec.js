context('Slider Standard', () => {
    beforeEach(() => {
        cy.loadStory('Basic Components/Slider', 'Standard');
    })
    it('Find and Test Slider', () => {
        cy.get('[data-cy=slider]')
            .should('not.be.disabled')
            .and('be.visible')

    })
})

context('Slider Vertical Inverted', () => {
    beforeEach(() => {
        cy.loadStory('Basic Components/Slider', 'Vertical Inverted');
        cy.visit('iframe.html?id=basic-components-slider--vertical-inverted');
    })
    it('Find and Test Slider', () => {
        cy.get('[data-cy=slider]')
            .should('not.be.disabled')
            .and('be.visible')

    })
})

context('Slider with Thumblabel', () => {
    beforeEach(() => {
        cy.loadStory('Basic Components/Slider', 'With Thumblabel');
        cy.visit('iframe.html?id=basic-components-slider--with-thumblabel');
    })
    it('Find and Test Slider', () => {
        cy.get('[data-cy=slider]')
            .should('not.be.disabled')
            .and('be.visible')

    })
})