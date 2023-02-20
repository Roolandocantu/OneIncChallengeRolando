context('Before Each', () => {
    beforeEach(() => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.title().should('eq', 'Practice Page')
    })
describe('Challenge Code', () => {
        it('Assert that the label reads “Suggestion Class Example” (The test should fail)', () => {
        cy.get('div[id="select-class-example"] fieldset legend').should('have.text', 'Suggession Class Example1')

    })
})
})
