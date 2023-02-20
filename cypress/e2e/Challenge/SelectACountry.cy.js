context('Before Each', () => {
    beforeEach(() => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.title().should('eq', 'Practice Page')
    })
describe('Challenge Code', () => {
        it('Select a country', () => {
        cy.get('#autocomplete').type('Uni')
        /*Cypress._.times(6, () => {
          cy.get('#autocomplete').type('{downArrow}')
        })
        */
       //Enter the word “Uni” and select United Stated (USA).
        cy.get('#autocomplete')
        .type('{downArrow}')
        .type('{downArrow}')
        .type('{downArrow}')
        .type('Uni')
        .type('{downArrow}')
        .type('{downArrow}')
        .type('{downArrow}')
        .type('{downArrow}')
        .type('{enter}')
    })
    //I needed to add the below code since the page behaviour in the dropdown was not running correctly, you can unccoment the Cypress._.times to validate.
})
})
