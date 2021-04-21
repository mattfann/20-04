describe('Battle starting page', function(){
    it('shows a prompt to enter player names', function(){
        cy.visit('/')
        cy.contains("Name Your Players");
    })
    it('shows that the input boxes are visible', function() {
        cy.get('form').should('be.visible')
    })
    it('shows that the submit button is visible', function() {
        cy.contains("Let's Play")
    })
    it('shows the correct names after submission', function() {
        cy.get('input[id="p1name"]').type("hello");
        cy.get('input[id="p2name"]').type("bye");
        cy.get('input[id="submit"]').click();
        cy.url().should('include', '/gamepage')
    })
    it('hp of player one reduces by 10 after hit', function() {
        cy.get('input[id="submitp1attack"]').click();
        cy.contains("hello's Health 90")
        cy.url().should('include', '/attack1')
    })
    it('hp of player two reduces by 10 after hit', function() {
        cy.visit('/')
        cy.get('input[id="p1name"]').type("hello");
        cy.get('input[id="p2name"]').type("bye");
        cy.get('input[id="submit"]').click();
        cy.get('input[id="submitp2attack"]').click();
        cy.url().should('include', '/attack2')
        cy.contains("bye's Health 90")
    })
})
