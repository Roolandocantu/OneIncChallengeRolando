context('Before Each', () => {
  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.title().should('eq', 'Practice Page')
  })
describe('Challenge Code', () => {
it('Footer Validation', () => {
  //Go to the footer
  cy.scrollTo('bottom')
  //Assert that the background is #eee
  cy.get('#gf-BIG').should('have.css', 'background-color', 'rgb(238, 238, 238)')//the #eeeeee color is the same as rgb(238, 238, 238), as cypress does not allow Hex values, I searched for the RGB value and use instead of the #eeeeee
  //Assert that it contains four columns.
  cy.get('.gf-t tbody tr td').should('have.length', 4)
  //Assert if there are the following Social Media items Facebook Twitter Google+ Youtube
  cy.get('.gf-t tbody tr td:nth-child(4) ul li')
  .eq(1).should('contain', 'Facebook')
  cy.get('.gf-t tbody tr td:nth-child(4) ul li')
  .eq(2).should('contain', 'Twitter')
  cy.get('.gf-t tbody tr td:nth-child(4) ul li')
  .eq(3).should('contain', 'Google+')
  cy.get('.gf-t tbody tr td:nth-child(4) ul li')
  .eq(4).should('contain', 'Youtube')
})
})
})
//Cypress does not have a cy.hover function which you can see at 
//https://docs.cypress.io/api/commands/hover#docusaurus_skipToContent_fallback https://github.com/cypress-io/cypress/issues/10
//So I used a workaround to make the hover acction and click on reload