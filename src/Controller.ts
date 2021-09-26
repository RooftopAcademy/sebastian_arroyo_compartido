import { ElementFlags } from "../node_modules/typescript/lib/typescript";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Page from "./Page";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";

export default class Controller{
    document:Document;
    currentPage: Page;

    constructor(document:Document){
        this.document = document;
        this.currentPage = new HomePage();
    }

    private getMenuRoutes():Element[]{
        return Array.from(this.document.getElementsByClassName('js-route'));
    }

    private changePage(newPagePath: string){

        if(newPagePath == 'file:///Products'){
            this.currentPage = new ProductPage();
        }else if(newPagePath == 'file:///Register'){
            this.currentPage = new CartPage();
        }else if(newPagePath == 'file:///Login'){
            this.currentPage = new LoginPage();
        }else if(newPagePath == 'file:///Home'){
            this.currentPage = new HomePage();
        }else{
            this.currentPage = new ErrorPage();
        }
    }

    public renderPages(){
        let menuRoutes: Element[] = this.getMenuRoutes();
        let mainContainer: HTMLDivElement = <HTMLDivElement>this.document.getElementById('main-container');

        menuRoutes.forEach( navButton => {
            navButton.addEventListener('click', (e) => {

                e.preventDefault();
                let htmlLink = e.target as HTMLLinkElement;
                if (htmlLink.href){
                    console.log(htmlLink.href);
                    this.changePage(htmlLink.href);
                }else{
                    this.changePage('Error')
                }
                mainContainer.innerHTML = this.currentPage.render();
            })
        })
    }


}