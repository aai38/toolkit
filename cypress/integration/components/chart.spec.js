context('Linechart', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-chart--line');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Chart', () => {
        cy.get('[data-cy=chart--line]')
    })
})

context('Barchart', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-chart--bar');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Chart', () => {
        cy.get('[data-cy=chart--bar]')
    })
})

context('Doughnutchart', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-chart--doughnut');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Chart', () => {
        cy.get('[data-cy=chart--doughnut]')
    })
})

context('Radarchart', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-chart--radar');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Chart', () => {
        cy.get('[data-cy=chart--radar]')
    })
})

context('Piechart', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-chart--pie');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Chart', () => {
        cy.get('[data-cy=chart--pie]')
    })
})

context('Bubblechart', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-chart--bubble');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Chart', () => {
        cy.get('[data-cy=chart--bubble]')
    })
})

context('Polarareachart', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-chart--polar-area');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Chart', () => {
        cy.get('[data-cy=chart--polar-area]')
    })
})

context('Scatterchart', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=high-order-components-chart--scatter');
    })
    it('Test true!', () => {
        expect(true).to.equal(true)
    })
    it('Find Chart', () => {
        cy.get('[data-cy=chart--scatter]')
    })
})