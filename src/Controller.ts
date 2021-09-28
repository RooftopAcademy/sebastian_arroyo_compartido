import { ElementFlags } from "../node_modules/typescript/lib/typescript";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import RegistrationPage from "./RegistrationPage";
import Page from "./Page";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import Store from "./Store";

export default class Controller{
    document:Document;
    currentPage: Page;
    store: Store;
    
    constructor(document:Document, store:Store){

        this.document = document;
        this.currentPage = new HomePage();
        this.store = store;
    }

    fetchStoreProducts(){
        this.store.fetchProductsFromApi();
    }

    private getMenuRoutes():Element[]{
        return Array.from(this.document.getElementsByClassName('js-route'));
    }

    private changePage(newPagePath: string){

        if(newPagePath == '/products'){
            this.currentPage = new ProductPage(this);
        }else if(newPagePath == '/cart'){
            this.currentPage = new CartPage();
        }else if(newPagePath == '/registration'){
            this.currentPage = new RegistrationPage();
        }else if(newPagePath == '/home'){
            this.currentPage = new HomePage();
        }else{
            this.currentPage = new ErrorPage();
        }
    }

    public renderHomePage(){
        let mainContainer: HTMLDivElement = <HTMLDivElement>this.document.getElementById('main-container');
        mainContainer.innerHTML = this.currentPage.render();
    }

    public renderPages(){
        let menuRoutes: Element[] = this.getMenuRoutes();
        let mainContainer: HTMLDivElement = <HTMLDivElement>this.document.getElementById('main-container');
        
        menuRoutes.forEach( navButton => {
            navButton.addEventListener('click', (e) => {

                e.preventDefault();
                let htmlLink = e.target as HTMLLinkElement;
                let dataId = htmlLink.dataset.id as string;
                this.changePage(dataId);
                
                mainContainer.innerHTML = this.currentPage.render();
                this.currentPage.loadEventBehavior();
            })
        })
    }


}