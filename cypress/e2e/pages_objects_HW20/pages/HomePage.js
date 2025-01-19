class Homepage {
    get signInButton() {
        return cy.get('.header_signin');
    }
    openPage () {
        cy.visit ('/')
    }

    clickSignInButton() {
        this.signInButton.click();
    }

}
export default new HomePage();