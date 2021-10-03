import HomePage from "../pageView/HomePage";
import Page from "../pageView/Page";
import Store from "../classModel/Store";
import PageRouter from "./PageRouter";

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

    fetchStoreProducts() {
        this.store.fetchProductsFromApi();
    }

    private getMenuRoutes(): Element[] {
        return Array.from(this.document.getElementsByClassName('js-route'));
    }

    private changePage(newPagePath: string) {
        this.currentPage = this.pageRouter.getPage(newPagePath, this)
    }

    public renderHomePage() {
        let mainContainer: HTMLDivElement = <HTMLDivElement>this.document.getElementById('main-container');
        mainContainer.innerHTML = this.currentPage.render();
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


}