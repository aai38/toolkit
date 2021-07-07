context('Empty States', () => {
    beforeEach(() => {
        cy.loadStory('High Order Components/Empty States', 'Standard');
    })
    it('Find and Test Empty State', () => {
        cy.get('[data-cy=empty-states]')
            .should('not.be.disabled')
            .and('be.visible')

    })

    it('Find and Test Empty State Button', () => {
        cy.get('[data-cy=empty-states-button]')
            .should('not.be.disabled')
            .and('be.visible')

    })

    it('Find and Test Empty State Label', () => {
        cy.get('[data-cy=empty-states-label]')
            .should('not.be.disabled')
            .and('be.visible')

    })

    it('Find and Test Empty State Icon', () => {
        cy.get('[data-cy=empty-states-icon]')
            .should('not.be.disabled')
            .and('be.visible')

    })
})