import HomePage from "../pageView/HomePage";
import Page from "../pageView/Page";
import Store from "../classModel/Store";
import PageRouter from "./PageRouter";
import Catalog from "../classModel/Catalog";

export default class PageRenderer {
    document: Document;
    currentPage: Page;
    store: Store;
    pageRouter: PageRouter;

    constructor(document: Document, store: Store) {

        this.document = document;
        this.currentPage = new HomePage(this);
        this.store = store;
        this.pageRouter = new PageRouter();
    }

    async fetchStoreProducts() {
        await this.store.fetchProductsFromApi();
        //waits for the fetching to end to render Homepage when you first load the webpage
        this.renderHomePage();
    }

    private changePage(newPagePath: string) {
        this.currentPage = this.pageRouter.getPage(newPagePath, this)
    }

    public getProductsCatalog() : Catalog{
        return this.store.catalog;
    }

    private renderHomePage() {
        let mainContainer: HTMLDivElement = <HTMLDivElement>this.document.getElementById('main-container');
        mainContainer.innerHTML = this.currentPage.render();
        this.currentPage.loadEventBehavior();
    }

    public renderPages() {
        let mainContainer: HTMLDivElement = <HTMLDivElement>this.document.getElementById('main-container');
        window.addEventListener('hashchange', (e) => {
            const hashPath = window.location.hash;
            this.changePage(hashPath);
            mainContainer.innerHTML = this.currentPage.render();
            this.currentPage.loadEventBehavior();
        })
    }

    public updatePage(){
        let mainContainer: HTMLDivElement = <HTMLDivElement>this.document.getElementById('main-container');
        mainContainer.innerHTML = this.currentPage.render();
        this.currentPage.loadEventBehavior();
    }


}