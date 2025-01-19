class SignInForm {
    get emailField() {
        return cy.get('#signinEmail');
    }

    get passwordField() {
        return cy.get('#signinPassword');
    }

    get loginButton() {
        return cy.get('.modal-footer .btn-primary');
    }

    get wrongCredsErrorMessage() {
        return cy.contains('.alert-danger', 'Wrong email or password');
    }

    enterEmail(email) {
        this.emailField.type(email);
    }

    enterPassword(password) {
        this.passwordField.type(password);
    }

    submitForm() {
        this.loginButton.click();
    }

    verifyFieldErrorByText(text) {
        cy.contains('.invalid-feedback p', text).should('be.visible');
    }

    logInWithCredentials(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.loginButton.click();
    }
}

export default new SignInForm();