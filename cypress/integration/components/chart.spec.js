context('Linechart', () => {
    beforeEach(() => {
        cy.loadStory('High Order Components/Chart', 'Line');
    })

    it('Find and Test Chart', () => {
        cy.get('[data-cy=chart--line]')
            .should('not.be.disabled')
            .and('be.visible')
    })
})

context('Barchart', () => {
    beforeEach(() => {
        cy.loadStory('High Order Components/Chart', 'Bar');
    })

    it('Find and Test Chart', () => {
        cy.get('[data-cy=chart--bar]')
            .should('not.be.disabled')
            .and('be.visible')
    })
})

context('Doughnutchart', () => {
    beforeEach(() => {
        cy.loadStory('High Order Components/Chart', 'Doughnut');
    })
    it('Find and Test Chart', () => {
        cy.get('[data-cy=chart--doughnut]')
            .should('not.be.disabled')
            .and('be.visible')
    })

})

context('Radarchart', () => {
    beforeEach(() => {
        cy.loadStory('High Order Components/Chart', 'Radar');
    })

    it('Find and Test Chart', () => {
        cy.get('[data-cy=chart--radar]')
            .should('not.be.disabled')
            .and('be.visible')
    })
})

context('Piechart', () => {
    beforeEach(() => {
        cy.loadStory('High Order Components/Chart', 'Pie');
    })
    it('Find and Test Chart', () => {
        cy.get('[data-cy=chart--pie]')
            .should('not.be.disabled')
            .and('be.visible')
    })
})

context('Bubblechart', () => {
    beforeEach(() => {
        cy.loadStory('High Order Components/Chart', 'Bubble');
    })
    it('Find and Test Chart', () => {
        cy.get('[data-cy=chart--bubble]')
            .should('not.be.disabled')
            .and('be.visible')
    })
})

context('Polarareachart', () => {
    beforeEach(() => {
        cy.loadStory('High Order Components/Chart', 'Polar Area');
    })
    it('Find and Test Chart', () => {
        cy.get('[data-cy=chart--polar-area]')
            .should('not.be.disabled')
            .and('be.visible')
    })
})

context('Scatterchart', () => {
    beforeEach(() => {
        cy.loadStory('High Order Components/Chart', 'Scatter');
    })
    it('Find and Test Chart', () => {
        cy.get('[data-cy=chart--scatter]')
            .should('not.be.disabled')
            .and('be.visible')
    })
})