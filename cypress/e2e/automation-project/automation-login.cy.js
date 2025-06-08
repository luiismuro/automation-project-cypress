describe('Login a new user', () => {
    it('Should login an existing user', () => {
    cy.visit('https://automationexercise.com')

// Clicking on signup/login option
        cy.contains('Signup / Login').click()
    
// Executing Login
        const email = 'teste12345678@teste.com'
        const password = '12345678'

        cy.get('input[data-qa="login-email"]').type(email)
        cy.get('input[data-qa="login-password"]').type(password)
        cy.get('button[data-qa="login-button"]').click()

    })

})