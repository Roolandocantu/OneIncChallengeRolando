context('Before Each', () => {
    beforeEach(() => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.title().should('eq', 'Practice Page')
    })
describe('Challenge Code', () => {
        it('Fail the test if multiple checkboxes are selected', () => {
        cy.get('#checkBoxOption1')
        .as('checkboxes')
        .check()
        cy.get('#checkBoxOption2')
        .as('checkboxes')
        .check()
      .each(checkbox => {
        expect(checkbox[0].checked).to.equal(false)
      })
    })
})
})
