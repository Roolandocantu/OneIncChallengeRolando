context('Before Each', () => {
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.title().should('eq', 'Practice Page')
  })
describe('Challenge Code', () => {
it('Confirm the number of curses that cost between $28 and $30', () => {
  cy.get('table tbody tr') 
  .filter(($row) => { 
    const value = parseFloat(cy.wrap($row).find('td:nth-child(3)').invoke('text')) 
    return value >= '28' && value <= '30' 
  })
  .should('have.length', 4) 

})
})
})