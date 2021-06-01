context('Standard Button', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-button--standard');
    })
    it('Find Standard Button', () => {
        cy.get('[data-cy=button--standard]')
    })
})

context('Primary Flat Button', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-button--primary-flat');
    })
    it('Find Flat Button', () => {
        cy.get('[data-cy=button--flat]')
    })
})

context('Accent Stroke Button', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-button--accent-stroke');
    })
    it('Find Stroke Button', () => {
        cy.get('[data-cy=button--stroke]')
    })
})

context('Disabled Button', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=basic-components-button--disabled');
    })
    it('Find Disabled Button', () => {
        cy.get('[data-cy=button--disabled]')
    })
})