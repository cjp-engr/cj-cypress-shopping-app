class Signup {
    private createCustomerTextHeader: string = "";
    private createAccountLink: string = "";
    private firstNameTextField: string = "";
    private lastNameTextField: string = "";
    private newsLetterCheckBox: string = "";
    private emailTextField: string = "";
    private passwordTextField: string = "";
    private passwordStrengthIndicator: string = "";
    private confirmPasswordTextField: string = "";
    private createAnAccountButton = "";
    private firstNameErrorMessage: string = "";
    private lastNameErrorMessage: string = "";
    private emailErrorMessage: string = "";
    private passwordErrorMessage: string = "";
    private confirmPasswordErrorMessage: string = "";

    get createCustomerTextHeaderElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.createCustomerTextHeader);
    }

    get createAccountLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.createAccountLink);
    }

    get firstNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstNameTextField);
    }

    get lastNameTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.lastNameTextField);
    }

    get newsLetterCheckBoxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.newsLetterCheckBox);
    }

    get emailTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.emailTextField);
    }

    get passwordTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.passwordTextField);
    }

    get passwordStrengthIndicatorElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.passwordStrengthIndicator);
    }

    get confirmPasswordTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.confirmPasswordTextField);
    }

    get createAnAccountButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.createAnAccountButton);
    }

    get firstNameErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstNameErrorMessage);
    }

    get lastNameErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.lastNameErrorMessage);
    }

    get emailErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.emailErrorMessage);
    }

    get passwordErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.passwordErrorMessage);
    }

    get confirmPasswordErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.confirmPasswordErrorMessage);
    }

}

export const SignupPage = new Signup();