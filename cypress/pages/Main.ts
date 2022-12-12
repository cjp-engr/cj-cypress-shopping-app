class Main {

    //-----Start Home images properties-----//
    private homeImageLink: string;
    private isTeeHomeImage: boolean;
    private homeImageTitle: string = ".block-promo > .content > .title";
    private homeImageInfo: string = ".block-promo > .content > .info";
    private homeImageButtonLink: string = ".block-promo > .content > .more";
    //-----End Home images properties-----//

    //-----Start All Hot Products properties-----//
    private hotProductImagesLink: string;
    private hotProductItemIndex: number;
    private hotProductNames: string = ".product-item-link";
    private hotProductPrices: string = ".price";
    //Note: These elements will only display in mobile view
    private wishListIcons: string = "a[title='Add to Wish List']";
    private addToCartButtons: string = "button[title='Add to Cart']";
    private addToCompareButtons: string = "a[title='Add to Compare']";
    //-----End All Hot Products properties-----//

    //-----Start Home images properties-----//
    set setHomeImageLink(link: string) {
        this.homeImageLink = link;
    }

    set setIsteeHomeImage(isTee: boolean) {
        this.isTeeHomeImage = isTee;
    }

    get dynamicHomeImageLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        if (!this.isTeeHomeImage) {
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

    //-----End Home images properties-----//

    //-----Start All Hot Products properties-----//

    set sethotProductItemsIndex(index: number) {
        this.hotProductItemIndex = index;
    }

    get dynamicHotProductItemsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`.product-item:nth-child(${this.hotProductItemIndex})`);
    }

    get dynamicAddToCartButtonsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`.product-item:nth-child(${this.hotProductItemIndex}) ${this.addToCartButtons}`);
    }

    get dynamicWishListIconsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`.product-item:nth-child(${this.hotProductItemIndex}) ${this.wishListIcons}`);
    }

    get dynamicAddToCompareButtonsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`.product-item:nth-child(${this.hotProductItemIndex}) ${this.addToCompareButtons}`);
    }

    set setHotProductImagesLink(link: string) {
        this.hotProductImagesLink = link;
    }

    get dynamicHotProductImagesElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`.product-image-photo[src="${this.hotProductImagesLink}"]`);
    }

    get hotProductNamesElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.hotProductNames);
    }

    get hotProductPricesElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.hotProductPrices);
    }

    get wishListIconsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.wishListIcons);
    }

    get addToCartButtonsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.addToCartButtons);
    }

    get addToCompareButtonsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.addToCompareButtons);
    }

    //-----End All Hot Products properties-----//

}
export const MainPage = new Main();