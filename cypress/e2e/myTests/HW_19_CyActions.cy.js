describe('HW_19_Validations', () => {
    beforeEach(() => {
    cy.visit('/');
    cy.contains ('Sign up'). click();
    });
    const formSelectors = {
        nameField: '#signupName',
        lastNameField: '#signupLastName',
        emailField: '#signupEmail',
        passwordField: '#signupPassword',
        repeatPassword: '#signupRepeatPassword',
        errorMessage: '.invalid-feedback p',
        // registerButton: '.button.btn.btn-primary'

    }

    it('Name is required', () => {
        
        cy.get (formSelectors.nameField).focus();
        cy.get (formSelectors.nameField).blur();
        cy.get (formSelectors.errorMessage).should ('have.text','Name required').and ('be.visible');
    });
    it('Name is invalid', () => {
        
        cy.get (formSelectors.nameField).type ('00000000000');
        cy.get (formSelectors.nameField).blur();
        cy.get (formSelectors.errorMessage).should ('have.text','Name is invalid').and ('be.visible');
    });
    it('Wrong Name field length', () => {
        
        cy.get (formSelectors.nameField).type ('ertyuiopoiuytyuioiuytyuioiuyuioiuyuioiu');
        cy.get (formSelectors.nameField).blur();
        cy.get (formSelectors.errorMessage).should ('have.text','Name has to be from 2 to 20 characters long').and ('be.visible');
    });

    it('Red border and error message check', () => {
        
        cy.get (formSelectors.nameField).type ('00000');
        cy.get (formSelectors.nameField).blur();
        cy.get (formSelectors.nameField).should ('have.css','border-color', 'rgb(220, 53, 69)').and ('be.visible');
        cy.get (formSelectors.errorMessage).should ('have.css','color', 'rgb(220, 53, 69)').and ('be.visible');
    });
    
    it('Last name is required', () => {
        
        cy.get (formSelectors.nameField).focus().type ('Yana');
        cy.get (formSelectors.lastNameField).focus().blur ();
        cy.get (formSelectors.errorMessage).should ('have.text','Last name required').and ('be.visible');
    });
    it('Last name is invalid', () => {
        
        cy.get (formSelectors.nameField).focus().type ('Yana');
        cy.get (formSelectors.lastNameField).focus().type ('Репей').blur();
        cy.get (formSelectors.errorMessage).should ('have.text','Last name is invalid').and ('be.visible');
    });
    it ('Wrong Last name field length', () => {
        
        cy.get (formSelectors.nameField).focus().type ('Yana');
        cy.get (formSelectors.lastNameField).focus().type ('RepeyRepeyRepeyRepeyRepeyRepey').blur();
        cy.get (formSelectors.errorMessage).should ('have.text','Last name has to be from 2 to 20 characters long').and ('be.visible');
    });
    it('Red border and error message check', () => {
        
        cy.get (formSelectors.nameField).focus().type ('Yana');
        cy.get (formSelectors.lastNameField).focus().type ('______').blur();
        cy.get (formSelectors.lastNameField).should ('have.css','border-color', 'rgb(220, 53, 69)').and ('be.visible');
        cy.get (formSelectors.errorMessage).should ('have.css','color', 'rgb(220, 53, 69)').and ('be.visible');
    });
    
    it('Email is required', () => {
        
        cy.get (formSelectors.nameField).focus().type ('Yana');
        cy.get (formSelectors.lastNameField).focus().type ('Repey');
        cy.get (formSelectors.emailField).focus().blur();
        cy.get (formSelectors.errorMessage).should ('have.text','Email required').and ('be.visible');
    });
    it('Email is incorrect', () => {
        
        cy.get (formSelectors.nameField).focus().type ('Yana');
        cy.get (formSelectors.lastNameField).focus().type ('Repey');
        cy.get (formSelectors.emailField).focus().type('1111').blur();
        cy.get (formSelectors.errorMessage).should ('have.text','Email is incorrect').and ('be.visible');
    });
    
    it('Red border and error message check', () => {
        
        cy.get (formSelectors.nameField).focus().type ('Yana');
        cy.get (formSelectors.lastNameField).focus().type ('Repey');
        cy.get (formSelectors.emailField).focus().type('1111').blur();
        cy.get (formSelectors.emailField).should ('have.css','border-color', 'rgb(220, 53, 69)').and ('be.visible');
        cy.get (formSelectors.errorMessage).should ('have.css','color', 'rgb(220, 53, 69)').and ('be.visible');
    });
    it('Password is required', () => {
        
        cy.get (formSelectors.nameField).focus().type ('Yana');
        cy.get (formSelectors.lastNameField).focus().type ('Repey');
        cy.get (formSelectors.emailField).focus().type('1@gmail.com');
        cy.get (formSelectors.passwordField).focus().blur();
        cy.get (formSelectors.errorMessage).should ('have.text','Password required').and ('be.visible');
    });
    it('Password is invalid', () => {
        
        cy.get (formSelectors.nameField).focus().type ('Yana');
        cy.get (formSelectors.lastNameField).focus().type ('Repey');
        cy.get (formSelectors.emailField).focus().type('1@gmail.com');
        cy.get (formSelectors.passwordField).focus().type('1234').blur ();
        cy.get (formSelectors.errorMessage).should ('have.text','Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').and ('be.visible');
    });
    it('Border and text color', () => {
        
        cy.get (formSelectors.nameField).focus().type ('Yana');
        cy.get (formSelectors.lastNameField).focus().type ('Repey');
        cy.get (formSelectors.emailField).focus().type('1@gmail.com');
        cy.get (formSelectors.passwordField).focus().type('0000').blur();
        cy.get (formSelectors.passwordField).should ('have.css','border-color', 'rgb(220, 53, 69)').and ('be.visible');
        cy.get (formSelectors.errorMessage).should ('have.css','color', 'rgb(220, 53, 69)').and ('be.visible');
    });

    it('Passwords do not match', () => {
        
        cy.get (formSelectors.nameField).focus().type ('Yana');
        cy.get (formSelectors.lastNameField).focus().type ('Repey');
        cy.get (formSelectors.emailField).focus().type('1@gmail.com');
        cy.get (formSelectors.passwordField).focus().type('Hillel2025');
        cy.get (formSelectors.repeatPassword).focus().type('Hillel2024').blur();
        cy.get (formSelectors.errorMessage).should ('have.text','Passwords do not match').and ('be.visible');

});
    it('Re-enter password required', () => {
        
        cy.get (formSelectors.nameField).focus().type ('Yana');
        cy.get (formSelectors.lastNameField).focus().type ('Repey');
        cy.get (formSelectors.emailField).focus().type('1@gmail.com');
        cy.get (formSelectors.passwordField).focus().type('Hillel2025');
        cy.get (formSelectors.repeatPassword).focus().blur();
        cy.get (formSelectors.errorMessage).should ('have.text','Re-enter password required').and ('be.visible');
});
    it('Re-enter password error color', () => {
        
        cy.get (formSelectors.nameField).focus().type ('Yana');
        cy.get (formSelectors.lastNameField).focus().type ('Repey');
        cy.get (formSelectors.emailField).focus().type('1@gmail.com');
        cy.get (formSelectors.passwordField).focus().type('Hillel2025');
        cy.get (formSelectors.repeatPassword).focus().blur();
        cy.get (formSelectors.repeatPassword).should ('have.css','border-color', 'rgb(220, 53, 69)').and ('be.visible');
        cy.get (formSelectors.errorMessage).should ('have.css','color', 'rgb(220, 53, 69)').and ('be.visible');


});
    it('Register button is active, user is created ', () => {
       cy.get (formSelectors.nameField).focus().type ('Yana');
       cy.get (formSelectors.lastNameField).focus().type ('Repey');
       cy.get (formSelectors.emailField).focus().type('1@gmail.com');
       cy.get (formSelectors.passwordField).focus().type('Hillel2025');
       cy.get (formSelectors.repeatPassword).focus().type('Hillel2025');
       cy.contains('Register').click();
});

    it('Register button is disabled, user is not created ', () => {
       cy.get (formSelectors.nameField).focus().type ('Yana');
       cy.get (formSelectors.lastNameField).focus().type ('Repey');
       cy.get (formSelectors.emailField).focus().type('1@gmail.com');
       cy.get (formSelectors.passwordField).focus().type('Hillel2025');
       cy.get (formSelectors.repeatPassword).focus().type('Hillel2024');
       cy.contains('Register').should('have.attr','disabled');
});
});