describe('User Onboarding App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })

    // const nameInput = () => cy.get('input[name="name"]')
    // const emailInput = () => cy.get('input[name="email"]')
    // const passwordInput = () => cy.get('input[name="password"]')
    // const tosInput = () => cy.get('input[name="tos"]')
    // const submitBtn = () => cy.get('button[id=btn]')

    it('sanity checks', () => {
        expect(1).to.eql(1)
        
        
            // cy.get('input[name="email"]'
            //     .should('have.value', '')
            //     .type('georgio@gmail.com')
            //     .should('have.value', 'georgio@gmail.com')
    })
    it('testing form', () => {
        describe('Filling name', () => {
            cy.get('input[name="nameInput"]')
                .should('have.value', '')
                .type('gary')
                .should('have.value', 'gary')
                // .type('{backspace}')
                // .should('have.value', '')

        describe('filling email', () => {
            cy.get('input[name="tofu"]')
                .should('have.value', 'false')
                .click()
                .should('have.value', 'true')
        })
        
        describe('filling pass', () => {
            cy.get('input[name="mushrooms"]')
                .should('have.value', 'false')
                .click()
                .should('have.value', 'true')
        })

        describe('clicking checkbox', () => {
            cy.get('input[name="mozzarella"]')
                .should('have.value', 'false')
                .click()
                .should('have.value', 'true')
        })
        describe('submitting form', () => {
            cy.get('button[id=order-bottun]')
                .click()
            
        })

        describe('check if empty', () => {
            cy.get('input')
                .should('have.value', '')
        })
        
        
        
        
             
    });

    });

    
})