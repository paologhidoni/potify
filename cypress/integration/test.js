describe('homepage',()=>{
    it('has the correct h1',()=>{
            cy.visit('/');
            cy.get('h1').contains('Potify!');
    })

    it('has a link to sign-up page',()=>{
        cy.visit('/');
        cy.get('div').find('a').contains('Sign Up').click();
        cy.url().should('include','/sign-up');
        cy.get('h1').contains('Sign up');
    })

    it('has a link to sign-in page',()=>{
        cy.visit('/');
        cy.get('div').find('a').contains('Sign In').click();
        cy.url().should('include','/sign-in')
        cy.get('h1').contains('Sign In')
    })
})

describe('Sign-up page',()=>{
    it('Has the correct h1',()=>{
            cy.visit('/sign-up');
            cy.get('h1').contains('Sign up');
    })

    it('redirects to profile page after signing up ',()=>{
        cy.visit('/sign-up');
        cy.get('form').find('input[name="username"]').type('randomUser');
        cy.get('form').find('input[name="email"]').type('randomUser@gmail.com');
        cy.get('form').find('input[name="password"]').type('randomUser123');
        cy.get('form').find('button').click()
        cy.url().should('include','/profile');
        cy.get('h1').contains('Profile');
    })

})

describe('Sign-in page',()=>{
    it('Has the correct h1',()=>{
            cy.visit('/sign-in');
            cy.get('h1').contains('Sign in');
    })

    it('redirects to profile page after signing in ',()=>{
        cy.visit('/sign-in');
        cy.get('form').find('input[name="email"]').type('randomUser@gmail.com');
        cy.get('form').find('input[name="password"]').type('randomUser123');
        cy.get('form').find('button').click()
        cy.url().should('include','/profile');
        cy.get('h1').contains('Profile');
    })

})

