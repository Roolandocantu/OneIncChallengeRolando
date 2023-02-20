context('Before Each', () => {
    beforeEach(() => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.title().should('eq', 'Practice Page')
    })
describe('Challenge Code', () => {
        it('Confirm your name', () => {
          //Using the Confirm button with the cypress event window:confirm (clicking on confirm button)
          cy.get('#name').type('Rolando')
          cy.get('#confirmbtn').click()
          cy.on('window:confirm', (stub) => {
            expect(stub).to.equal('Hello Rolando, Are you sure you want to confirm?');
          });

          //Using the alert button with the cypress event window:alert (clicking on alert button)
          cy.get('#name').type('Rolando')
          cy.get('#alertbtn').click()
          cy.on('window:alert', (stub) => {
            expect(stub).to.equal('Hello Rolando, share this practice page and share your knowledge');
          });

})
})
})
