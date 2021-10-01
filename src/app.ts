import Controller from "./Controller";
import Store from "./Store";
let store:Store = new Store;
let controller = new Controller(document, store);
//console.log(catalog);
controller.fetchStoreProducts();
controller.renderHomePage();
controller.renderPages();
