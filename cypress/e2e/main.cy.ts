import { contains } from "cypress/types/jquery";
import { MainPage } from "../pages/Main";
import { HomeImageElementsList } from "./model";

let img: HTMLImageElement;

describe('Visit main page scenarios', () => {
    const viewportsToTest: Cypress.ViewportPreset[] = [
        "iphone-3",
        "ipad-2",
        "macbook-15",
    ];
    beforeEach('Visit main page', () => {
        cy.visitShop();
    });

    viewportsToTest.forEach((viewport) => {
        it('Hello', () => {
            cy.viewport(viewport);
        });

    });

});

describe.only('Visit main page scenarios 1', () => {
    beforeEach(() => {
        cy.visitShop();
    });

    it('All the header images are displaying', () => {
        cy.fixture<{ homeImageElements: HomeImageElementsList[] }>("main.json")
            .its("homeImageElements")
            .then((homeImageElements) => {
                homeImageElements.forEach((elements) => {
                    // cy.visitShop();
                    MainPage.setIstee = elements.isTee;
                    MainPage.setHomeImageLink = elements.imageLink;
                    MainPage.dynamicHomeImageLinkElement.should('be.visible')
                        .and(($img) => {
                            img = $img[0] as unknown as HTMLImageElement;
                            expect(img.naturalWidth).to.be.greaterThan(0);
                        });

                });
            });
    });

    it('All the header titles are displaying', () => {
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
    it.skip('All the header infos are displaying', () => {
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

    it('All the header button text are displaying', () => {
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