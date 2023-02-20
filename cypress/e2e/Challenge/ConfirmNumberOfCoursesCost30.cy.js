context('Before Each', () => {
    beforeEach(() => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.title().should('eq', 'Practice Page')
    })
describe('Challenge Code', () => {
  it('Confirm the number of curses that cost $30', () => {
    //Filter all the curses that cost $30
    cy.get('table tbody tr:has(td:nth-child(3):contains("30"))')

    //Make sure that are only two elements.
    cy.get('table tbody tr')
    .then(($tr) => {
      return $tr
      .filter(':has(td:nth-child(3):contains("30"))')
    }).should('have.length', 2)
})
})
})