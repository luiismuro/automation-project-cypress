describe('Register a new user', () => {
    it('Should register and login a new user successfuly.', () => {
    cy.visit('https://automationexercise.com')

    // click on signup/login
    cy.contains('Signup / Login').click()

    // Filling register data

    const nome = 'Usuário Cypress'
    const email = `teste_${Date.now()}@email.com` // email unico
    cy.get('input[data-qa="signup-name"]').type(nome)
    cy.get('input[data-qa="signup-email"]').type(email)
    cy.get('button[data-qa="signup-button"]').click()

    // Fill the full form register
    cy.get('#id_gender1').check()
    cy.get('#password').type('123456')
    cy.get('#days').select('10')
    cy.get('#months').select('March')
    cy.get('#years').select('1992')
    
    cy.get('#first_name').type('Luis')
    cy.get('#last_name').type('Muro')
    cy.get('#address1').type('Rua cypress, teste 123')
    cy.get('#country').select('Canada')
    cy.get('#state').type('AM')
    cy.get('#city').type('Manaus')
    cy.get('#zipcode').type('69000000')
    cy.get('#mobile_number').type('959949549')

// click to create account
cy.get('button[data-qa="create-account"]').click()

// Verifify if the account was created
cy.contains('Account Created!').should('be.visible')

// Continue to logged screen
cy.get('a[data-qa="continue-button"]').click()

// Confirm if login has occurred successfuly.
cy.contains(`Logged in as ${nome}`).should('be.visible')

    })
})