

class Mainx {
    private storeLogo: string = "[aria-label='store logo'] > img";
    private searchLogo: string = "[data-role='minisearch-label']";
    private searchTextField: string = "#search";
    private cartLogo: string = ".showcart";
    private yogaImage: string = ".home-main > img[src='https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-main.jpg']";
    private homePantsImage: string = ".home-pants > img[src='https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-pants.jpg']";
    private homeTShirtsImage: string = ".home-t-shirts > .image >  img[src='https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-t-shirts.png']";
    private homeErinImage: string = ".home-erin > img[src='https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-erin.jpg']";
    private homePerformanceImage: string = ".home-performance > img[src='https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-performance.jpg']";
    private homeEcoImage: string = ".home-eco > img[src='https://magento.softwaretestingboard.com/pub/media/wysiwyg/home/home-eco.jpg']";
    private hotSellersText: string = "";
    private hotSellersSubText: string = "";

    private allHotProductImages: string = ".product-image-photo";
    private allHotProductNames: string = ".product-item-link";
    private allHotProductPrices: string = ".price";
    private wishListIcons: string = "a[title='Add to Wish List]";
    private allAddToCartButtons: string = "a[title='Add to Compare']";

    private ratingResults: string = "";
    private extraSmallSizes: string = "";
    private smallSizes: string = "";
    private mediumSizes: string = "";
    private largeSizes: string = "";
    private extraLargeSizes: string = "";

    //---men product colors
    private greyColor: string = "";
    private greenColor: string = "";
    private blackColor: string = "";

    //women product colors
    private blueColor: string = "";
    private orangeColor: string = "";
    private purpleColor: string = "";
    private whiteColor: string = "";
    private yellowColor: string = "";

    private homeImageLink: string;


    get storeLogoElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.storeLogo);
    }

    get searchLogoElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.searchLogo);
    }

    get searchTextFieldElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.searchTextField);
    }

    get cartLogoElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cartLogo);
    }

    get yogaImageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.yogaImage);
    }

    get homePantsImageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homePantsImage);
    }

    get homeTShirtsImageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homeTShirtsImage);
    }

    get homeErinImageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homeErinImage);
    }

    get homePerformanceImageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homePerformanceImage);
    }

    get homeEcoImageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.homeEcoImage);
    }

    get allHotProductImagesElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.allHotProductImages);
    }

    get allHotProductNamesElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.allHotProductNames);
    }

    get allHotProductPricesElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.allHotProductPrices);
    }

    get wishListIconsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.wishListIcons);
    }

    get allAddToCartButtonsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.allAddToCartButtons);
    }

    set setHomeImageLink(link: string) {
        this.homeImageLink = link;
    }

    get dynamicHomeImageLinkElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`.block-promo > img[src="${this.homeImageLink}"]`);
    }

}

export const MainPage = new Mainx();