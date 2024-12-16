describe ('authorization',() => {
    cy.visit('https://crocobet.com/')


    it('test',() => {
       cy.get('.autocomplete="username').type('testfrontmg')
       
       cy.get('.placeholder="Password"').type('$Heropicks1@')
       cy.get("username").type('username')

    })

})