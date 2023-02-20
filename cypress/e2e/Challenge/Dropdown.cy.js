context('Before Each', () => {
    beforeEach(() => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.title().should('eq', 'Practice Page')
    })
describe('Challenge Code', () => {
        it('Select option 2 then Option 3 in a dropdown', () => {
          //Select option 2 
        cy.get('#dropdown-class-example').select('option2')
        //Select option 3 
        cy.get('#dropdown-class-example').select('option3')

    })
})
})
