context('Before Each', () => {
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.title().should('eq', 'Practice Page')
  })
describe('Challenge Code', () => {
it('Mouse over', () => {
  //Go over the “Mouse Hover” button
  cy.get('#mousehover').trigger('mouseover')
  //Click “Reload” in the tooltip
  cy.get('body > div:nth-child(6) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2)').should('not.be.visible')
  cy.get('body > div:nth-child(6) > div:nth-child(1) > fieldset:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2)').click({force: true})
  //Once the page reloads, make sure the element “Total Amount Collected: 296” is present.
  cy.get('.totalAmount').should('have.text', ' Total Amount Collected: 296 ')
  //. Fail the test if not.
  cy.get('.totalAmount').should('have.text', ' Total Amount Collected: 255 ')

})
})
})
//Cypress does not have a cy.hover function which you can see at 
//https://docs.cypress.io/api/commands/hover#docusaurus_skipToContent_fallback https://github.com/cypress-io/cypress/issues/10
//So I used a workaround to make the hover acction and click on reload