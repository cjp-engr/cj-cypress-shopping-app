export interface LoginTestData {
    registeredEmail: string;
    unregisteredEmail: string;
    validPassword: string;
    invalidEmail: string;
    invalidPassword: string;
    loginPageLink: string;
    welcomeMessage: string;
    emptyFieldErrorMessage: string;
    invalidEmailErrorMessage: string;
}

export interface MainTestData {

}

export interface HomeImageElementsList {
    isTee: boolean;
    imageLink: string;
    title: string;
    info: string;
    buttonLink: string;
}

export interface HotProductsElementsList {
    productImageLink: string;
    productName: string;
    productPrice: string;
}

