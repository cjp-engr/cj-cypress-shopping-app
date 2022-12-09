class Main {

    private homeImageLink: string;
    private isTee: boolean;
    private homeImageTitle: string = ".block-promo > .content > .title";
    private homeImageInfo: string = ".block-promo > .content > .info";
    private homeImageButtonLink: string = ".block-promo > .content > .more";

    set setHomeImageLink(link: string) {
        this.homeImageLink = link;
    }

    set setIstee(isTee: boolean) {
        this.isTee = isTee;
    }

    get dynamicHomeImageLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        if (!this.isTee) {
            return cy.get(`.block-promo > img[src="${this.homeImageLink}"]`);
        } else {
            return cy.get(`.block-promo > .image > img[src="${this.homeImageLink}"]`);
        }

    }

    get homeImageTitleElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homeImageTitle);
    }

    get homeImageInfoElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homeImageInfo);
    }

    get homeImageButtonLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homeImageButtonLink);
    }

}
export const MainPage = new Main();