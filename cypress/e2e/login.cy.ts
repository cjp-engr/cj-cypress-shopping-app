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
            LoginPage.emailTextFieldElement.type(data.validPassword);
        });
        LoginPage.signInButtonElement.contains("Sign In").click();
        LoginPage.loginWelcomeMessageElement.should((message) => {
            expect(message).to.equal('Welcome, CJ CJ!');
        });


        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Login failed because the email is empty', () => {

        LoginPage.signInPageLinkElement.contains("Sign In").click();
        cy.get<LoginTestData>('@login').then((data) => {
            cy.url().should('contain', data.loginPageLink);
            LoginPage.emailTextFieldElement.type(data.validPassword);
        });
        LoginPage.signInButtonElement.contains("Sign In").click();
        //todo error message for email
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Login failed because the password is empty', () => {

        LoginPage.signInPageLinkElement.contains("Sign In").click();
        cy.get<LoginTestData>('@login').then((data) => {
            cy.url().should('contain', data.loginPageLink);
            LoginPage.emailTextFieldElement.type(data.registeredEmail);
        });
        LoginPage.signInButtonElement.contains("Sign In").click();
        //todo error message for password
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Login failed because both fields are empty', () => {
        LoginPage.signInPageLinkElement.contains("Sign In").click();
        LoginPage.signInButtonElement.contains("Sign In").click();
        //todo error message for email & password
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('Login failed because the email is in invalid format', () => {
        LoginPage.signInPageLinkElement.contains("Sign In").click();
        cy.get<LoginTestData>('@login').then((data) => {
            cy.url().should('contain', data.loginPageLink);
            // todo for invalid email format
            LoginPage.emailTextFieldElement.type(data.validPassword);
        });
        LoginPage.signInButtonElement.contains("Sign In").click();
        LoginPage.loginWelcomeMessageElement.should((message) => {
            expect(message).to.equal('Welcome, CJ CJ!');
        });


        cy.clearCookies();
        cy.clearLocalStorage();
    });

});


