import CartPage from "../pageView/CartPage"
import PageRenderer from "./PageRenderer"
import ErrorPage from "../pageView/ErrorPage"
import HomePage from "../pageView/HomePage"
import Page from "../pageView/Page"
import ProductPage from "../pageView/ProductPage"
import RegistrationPage from "../pageView/RegistrationPage"

export default class PageRouter {
    private paths:any

    constructor() {
        this.paths = {
            "": HomePage,
            "#/home": HomePage,
            "#/products": ProductPage,
            "#/cart": CartPage,
            "#/registration": RegistrationPage,
            "#/404": ErrorPage
        }
    }

    getPage(path: string, controller:PageRenderer): Page {
        return new (this.paths[path])(controller);
    }
}