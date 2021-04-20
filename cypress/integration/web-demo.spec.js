describe('web demo', function(){
    it('shows a greeting', function(){
        cy.visit('/')
        cy.contains('hi, mse-2103-a!')
        cy.contains("What's your name?")
    })
})