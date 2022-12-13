import { LoginPage } from "../pages/Login";
import { LoginTestData } from "./model";

describe('Login Scenarios', () => {
    beforeEach(() => {
        cy.fixture('login').as('login');
        cy.visitShop();
    });

    it('Succesfully login', () => {
        LoginPage.signInPageLinkElement.contains("Sign In").click();
        cy.get<LoginTestData>('@login').then((data) => {
            cy.url().should('contain', data.loginPageLink);
            LoginPage.emailTextFieldElement.type(data.registeredEmail);
            LoginPage.passwordTextFieldElement.type(data.validPassword);
            LoginPage.signInButtonElement.contains("Sign In").click();
            LoginPage.loginWelcomeMessageElement.should((message) => {
                expect(message).to.contain(data.welcomeMessage);
                // expect(message).to.have.string(data.welcomeMessage);
            });
        });



        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Login failed because the "Email" is empty', () => {

        LoginPage.signInPageLinkElement.contains("Sign In").click();
        cy.get<LoginTestData>('@login').then((data) => {
            cy.url().should('contain', data.loginPageLink);
            LoginPage.passwordTextFieldElement.type(data.validPassword);
            LoginPage.signInButtonElement.contains("Sign In").click();
            LoginPage.emailErrorMessageElement.should((message) => {
                expect(message).to.contain(data.emptyFieldErrorMessage);
            });
        });

        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Login failed because the "Password" is empty', () => {

        LoginPage.signInPageLinkElement.contains("Sign In").click();
        cy.get<LoginTestData>('@login').then((data) => {
            cy.url().should('contain', data.loginPageLink);
            LoginPage.emailTextFieldElement.type(data.registeredEmail);
            LoginPage.signInButtonElement.contains("Sign In").click();
            LoginPage.passwordErrorMessageElement.should((message) => {
                expect(message).to.contain(data.emptyFieldErrorMessage);
            });
        });

        cy.clearCookies();
        cy.clearLocalStorage();
    });

    //todo - to be continued
    it('Login failed because both fields are empty', () => {
        LoginPage.signInPageLinkElement.contains("Sign In").click();
        LoginPage.signInButtonElement.contains("Sign In").click();
        // cy.get('.cf-tweet-this').should('contain.text', 'Invalid Form Key. Please refresh the page.');
        cy.get<LoginTestData>('@login').then((data) => {
            LoginPage.emailErrorMessageElement.should((message) => {
                expect(message).to.contain(data.emptyFieldErrorMessage);
            });
            LoginPage.passwordErrorMessageElement.should((message) => {
                expect(message).to.contain(data.emptyFieldErrorMessage);
            });
        });
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Login failed because the "Email" is in invalid format', () => {
        LoginPage.signInPageLinkElement.contains("Sign In").click();
        cy.get<LoginTestData>('@login').then((data) => {
            cy.url().should('contain', data.loginPageLink);

            LoginPage.emailTextFieldElement.type(data.invalidEmail);
            LoginPage.passwordTextFieldElement.type(data.validPassword);
            LoginPage.signInButtonElement.contains("Sign In").click();
            LoginPage.emailErrorMessageElement.should((message) => {
                expect(message).to.contain(data.invalidEmailErrorMessage);
            });
        });

        cy.clearCookies();
        cy.clearLocalStorage();
    });

});


