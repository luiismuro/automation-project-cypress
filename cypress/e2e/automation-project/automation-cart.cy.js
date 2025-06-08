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

// Clicking on the cart menu    
        cy.contains('Products').click()

// Wait until products load
        cy.get('.features_items').should('be.visible')        
        
// Locate the product specifically and hover the mouse
        cy.contains('Frozen Tops For Kids')
        .scrollIntoView()
        .should('be.visible')
        .parents('.product-image-wrapper')
        .trigger('mouseover')

// Click to add product on the cart
        cy.contains('Frozen Tops For Kids')
        .parents('.product-image-wrapper')
        .find('.product-overlay a')
        .click({ force: true })
        
// Click to continue shopping and add another product on the cart
        cy.contains('Continue Shopping')
        .should('be.visible')      
        .click()
        
        cy.contains('Green Side Placket Detail T-Shirt')
        .scrollIntoView()
        .should('be.visible')
        .parents('.product-image-wrapper')
        .trigger('mouseover')

        cy.contains('Green Side Placket Detail T-Shirt')
        .parents('.product-image-wrapper')
        .find('.product-overlay a')
        .click({ force: true})

    })
})


