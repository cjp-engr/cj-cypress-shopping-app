import { contains } from "cypress/types/jquery";
import { MainPage } from "../pages/Main";
import { HomeImageElementsList, HotProductsElementsList } from "./model";

let img: HTMLImageElement;

describe('Visit main page and check all the header images elements scenarios', () => {
    before(() => {
        cy.visitShop();
    });

    it('All the header images are displayed successfully', () => {

        cy.fixture<{ homeImageElements: HomeImageElementsList[] }>("main.json")
            .its("homeImageElements")
            .then((homeImageElements) => {
                homeImageElements.forEach((elements) => {
                    // cy.visitShop();
                    MainPage.setIsteeHomeImage = elements.isTee;
                    MainPage.setHomeImageLink = elements.imageLink;
                    MainPage.dynamicHomeImageLinkElement.should('be.visible')
                        .and(($img) => {
                            img = $img[0] as unknown as HTMLImageElement;
                            expect(img.naturalWidth).to.be.greaterThan(0);
                        });

                });
            });
    });

    it('All the header titles are displayed successfully', () => {
        cy.fixture<{ homeImageElements: HomeImageElementsList[] }>("main.json")
            .its("homeImageElements")
            .then((homeImageElements) => {

                MainPage.homeImageTitleElement.should((title) => {
                    homeImageElements.forEach((elements) => {
                        expect(title).to.contain(elements.title);
                    });

                });


            });
    });

    //todo: still encountering an issue
    it.skip('All the header infos are displayed successfully', () => {
        cy.fixture<{ homeImageElements: HomeImageElementsList[] }>("main.json")
            .its("homeImageElements")
            .then((homeImageElements) => {

                homeImageElements.forEach((elements) => {
                    MainPage.homeImageInfoElement.should((info) => {
                        expect(info).to.contain(elements.info);


                    });
                });
            });
    });

    it('All the header button text are displayed successfully', () => {
        cy.fixture<{ homeImageElements: HomeImageElementsList[] }>("main.json")
            .its("homeImageElements")
            .then((homeImageElements) => {

                homeImageElements.forEach((elements) => {
                    MainPage.homeImageButtonLinkElement.should((text) => {
                        expect(text).to.contain(elements.buttonLink);
                    });
                });
            });
    });

});

describe('Visit main page and check all the hot products elements scenarios', () => {

    before(() => {
        cy.visitShop();
    });

    it('All the hot products are displayed successfully', () => {
        cy.fixture<{ hotProductsElements: HotProductsElementsList[] }>("main.json")
            .its("hotProductsElements")
            .then((hotProductsElements) => {
                hotProductsElements.forEach((elements) => {
                    // cy.visitShop();
                    MainPage.setHotProductImagesLink = elements.productImageLink;
                    MainPage.dynamicHotProductImagesElement.should('be.visible')
                        .and(($img) => {
                            img = $img[0] as unknown as HTMLImageElement;
                            expect(img.naturalWidth).to.be.greaterThan(0);
                        });

                });
            });
    });

    it('All the hot products names are displayed successfully', () => {
        cy.fixture<{ hotProductsElements: HotProductsElementsList[] }>("main.json")
            .its("hotProductsElements")
            .then((hotProductsElements) => {
                hotProductsElements.forEach((elements) => {
                    // cy.visitShop();
                    MainPage.hotProductNamesElement.should((name) => {
                        expect(name).to.contain(elements.productName);
                    })

                });
            });
    });

    it('All the hot products prices are displayed successfully', () => {
        cy.fixture<{ hotProductsElements: HotProductsElementsList[] }>("main.json")
            .its("hotProductsElements")
            .then((hotProductsElements) => {
                hotProductsElements.forEach((elements) => {
                    // cy.visitShop();
                    MainPage.hotProductPricesElement.should((price) => {
                        expect(price).to.contain(elements.productPrice);
                    })

                });
            });
    });

});

describe.only('Visit main page using mobile and check the "Add to Cart", "Wishlist icon" and "Compare icon" scenarios', () => {
    let expectedLen: number = 6;
    const viewportsToTest: Cypress.ViewportPreset[] = [
        "iphone-3",
        "iphone-8",
        "samsung-s10"
    ];
    beforeEach(() => {
        cy.visitShop();
    });
    viewportsToTest.forEach((viewport) => {
        it(`The "Add to Cart" buttons are displayed successfully - ${viewport}`, () => {
            cy.viewport(viewport);
            for (let i = 1; i <= expectedLen; i++) {
                MainPage.sethotProductItemsIndex = i;
                MainPage.dynamicHotProductItemsElement.scrollIntoView();
            }
            MainPage.addToCartButtonsElement
                .should('have.length', expectedLen)
                .and('contain.text', 'Add to Cart');
        });
    });

    viewportsToTest.forEach((viewport) => {
        it(`The "Wishlist icon" buttons are displayed successfully - ${viewport}`, () => {
            cy.viewport(viewport);
            for (let i = 1; i <= expectedLen; i++) {
                MainPage.sethotProductItemsIndex = i;
                MainPage.dynamicHotProductItemsElement.scrollIntoView();
            }
            MainPage.wishListIconsElement.should('have.length', expectedLen);
        });
    });

    viewportsToTest.forEach((viewport) => {
        it(`The "Compare icon" buttons are displayed successfully  - ${viewport}`, () => {
            cy.viewport(viewport);
            for (let i = 1; i <= expectedLen; i++) {
                MainPage.sethotProductItemsIndex = i;
                MainPage.dynamicHotProductItemsElement.scrollIntoView();
            }
            MainPage.addToCompareButtonsElement.should('have.length', expectedLen);
        });
    });

});

describe('Visit main page using desktop/laptop and check the "Add to Cart", "Wishlist icon" and "Compare icon" scenarios', () => {
    //https://stackoverflow.com/questions/69951125/cypress-how-do-you-locate-element-on-hover
    let expectedLen: number = 6;
    const viewportsToTest: Cypress.ViewportPreset[] = [
        "macbook-16",
        "macbook-15",
        "macbook-13"
    ];
    beforeEach(() => {
        cy.visitShop();
    });
    viewportsToTest.forEach((viewport) => {
        it(`The "Add to Cart" buttons are displayed successfully - ${viewport}`, () => {
            for (let i = 1; i <= expectedLen; i++) {
                MainPage.sethotProductItemsIndex = i;
                MainPage.dynamicHotProductItemsElement.scrollIntoView();
                MainPage.dynamicHotProductItemsElement
                    .realHover()
                    .wait(1000)
                    .then(() => {
                        MainPage.dynamicAddToCartButtonsElement
                            .should('contain.text', 'Add to Cart')
                            .and('be.visible');
                    });
            }
        });
    });

    viewportsToTest.forEach((viewport) => {
        it.skip(`The "Wishlist icon" buttons are displayed successfully - ${viewport}`, () => {
            for (let i = 1; i <= expectedLen; i++) {
                MainPage.sethotProductItemsIndex = i;
                MainPage.dynamicHotProductItemsElement.scrollIntoView();
                MainPage.dynamicHotProductItemsElement
                    .realHover()
                    .wait(1000)
                    .then(() => {
                        MainPage.dynamicWishListIconsElement
                            //todo
                            // .should('be.visible');
                            .should('exist');
                    });
            }
        });
    });

    viewportsToTest.forEach((viewport) => {
        it.skip(`The "Compare icon" buttons are displayed successfully - ${viewport}`, () => {
            for (let i = 1; i <= expectedLen; i++) {
                MainPage.sethotProductItemsIndex = i;
                MainPage.dynamicHotProductItemsElement.scrollIntoView();
                MainPage.dynamicHotProductItemsElement
                    .realHover()
                    .then(() => {
                        MainPage.dynamicAddToCompareButtonsElement
                            //.should('be.visible');
                            //todo
                            .should('exist');
                    });
            }
        });
    });

});