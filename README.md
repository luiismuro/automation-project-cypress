# Test Automation - Cypress

I've created this test flow in order to enhance my automation skills in e2e tests using **Cypress** tool.
The automations include complete flows for:

## - User Signup
 
![ezgif-1e52d233f2f2e4](https://github.com/user-attachments/assets/1f60a3a6-8bce-410d-a3ee-c274ce6e83ce)

## - User Login

![ezgif-11a1c5fc335be7](https://github.com/user-attachments/assets/ec9c2540-e162-4b10-bb26-9e3fc04c5b28)

## - Product addition on cart

![ezgif-1c766207e0fa87](https://github.com/user-attachments/assets/8493d362-8c81-4abf-89a7-81249b6dd86a)

The tests are executed on **[automationexercise.com](https://automationexercise.com)**, simulating a real e-commerce for QA Practice.

## How to clone and execute locally
1. Clone this repository:
   git clone https://github.com/luiismuro/automation-project-cypress.git
2. Go to the respective folder on your terminal:
   cd automation-project-cypress
3. Install dependencies
- Node.js installed on your PC
- on your terminal, type: **npm install**
- open cypress GUI: **npx cypress open**
4. Click on the respective test to run. for instance: automation-login.cy.js / automation-signup.cy.js / automation-cart.cy.js

## Headless mode
to run an specific test without opening browser:
- **npx cypress run --spec "cypress/e2e/automation-login.cy.js"**
---

## 🧰 Technologies

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- JavaScript

---
Feel free to suggest improvements.

Thanks!
