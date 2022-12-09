import { contains } from "cypress/types/jquery";
import { MainPage } from "../pages/Main";
import { HomeImageElementsList, HotProductsElementsList } from "./model";

let img: HTMLImageElement;

// describe('Visit main page scenarios', () => {
//     const viewportsToTest: Cypress.ViewportPreset[] = [
//         "iphone-3",
//         "ipad-2",
//         "macbook-15",
//     ];
//     beforeEach('Visit main page', () => {
//         cy.visitShop();
//     });

//     viewportsToTest.forEach((viewport) => {
//         it('Hello', () => {
//             cy.viewport(viewport);
//         });

//     });

// });

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

describe('Visit main page using mobile and check the "Add to Cart", "Wishlist icon" and "Compare icon" scenarios', () => {

    before(() => {
        cy.viewport('iphone-8');
        cy.visitShop();
    });

    it('The "Add to Cart" button is displayed successfully', () => {

    });

});