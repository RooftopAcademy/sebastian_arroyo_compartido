import PageRenderer from "./controller/PageRenderer";
import Store from "./classModel/Store";
let store:Store = new Store;
let pageRenderer = new PageRenderer(document, store);
//console.log(catalog);
pageRenderer.fetchStoreProducts();
pageRenderer.renderHomePage();
pageRenderer.renderPages();
