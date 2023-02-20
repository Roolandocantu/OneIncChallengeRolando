const { property } = require("lodash")

describe('Challenge Code', () => {
it('Test Headers', () => {
  //Test the Cat Fact API https://catfact.ninja/fact
    cy.request('https://catfact.ninja/fact').as('comments') 
    cy.get('@comments').its('headers').its('content-type')
        //Assert if a fact exists in the json response
    .should('include', 'application/json')
  })
  it('Test API Status', () => {
    //Test the Cat Fact API https://catfact.ninja/fact
      cy.request('https://catfact.ninja/fact').as('comments') 
      cy.get('@comments').its('status')
          //Assert if status is 200
      .should('equal', 200)
  
    })
    it('Test API length greater than 70', () => {
      //Test the Cat Fact API https://catfact.ninja/fact
        cy.request('https://catfact.ninja/fact').as('comments') 
        cy.get('@comments').its('body').its('fact')
            //Assert true if the length is greater than 70
        .should('have.length.greaterThan', 70)
    
      })
})

//Cypress does not have a cy.hover function which you can see at 
//https://docs.cypress.io/api/commands/hover#docusaurus_skipToContent_fallback https://github.com/cypress-io/cypress/issues/10
//So I used a workaround to make the hover acction and click on reload