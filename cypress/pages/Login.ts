class Login {

    private signInPageLink: string = ".header > .links > .authorization-link > a[href*='account/login/']";
    private emailTextField: string = "input#email";
    private passwordTextField: string = ".field:nth-child(3) #pass";
    private signInButton: string = ".block-content:nth-child(2) > #login-form > .fieldset >.actions-toolbar > .primary > button#send2";
    private loginWelcomeMessage: string = ".header:nth-child(2) .logged-in";
    private emailErrorMessage: string = "#email-error";
    private passwordErrorMessage: string = "#pass-error";

    get signInPageLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.signInPageLink);
    }

    get emailTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.emailTextField);
    }

    get passwordTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.passwordTextField);
    }

    get signInButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.signInButton);
    }

    get loginWelcomeMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.loginWelcomeMessage);
    }

    get emailErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.emailErrorMessage);
    }

    get passwordErrorMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.passwordErrorMessage);
    }
}
export const LoginPage = new Login();