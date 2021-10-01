import Cart from "./Cart"
import CartPage from "./CartPage"
import Controller from "./Controller"
import ErrorPage from "./ErrorPage"
import HomePage from "./HomePage"
import Page from "./Page"
import ProductPage from "./ProductPage"
import RegistrationPage from "./RegistrationPage"

export default class PageRouter {
    private paths:any

    constructor() {
        this.paths = {
            "": HomePage,
            "/home": HomePage,
            "/products": ProductPage,
            "/cart": CartPage,
            "/registration": RegistrationPage,
            "/404": ErrorPage
        }
    }

    getPage(path: string, controller:Controller): any {
        console.log(this.paths[path]);
        return new (this.paths[path])(controller);
    }
}