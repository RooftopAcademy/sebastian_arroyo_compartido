import Controller from "./Controller";
import Product from "./Product";
import Store from "./Store";
import productView from "./views/productView";

let store = new Store;
let controller = new Controller(document);
store.fetchProducts();
let catalog = store.catalog;
//console.log(catalog);
controller.renderPages();

function renderProducts(products: Product[], nodeHtml: Element) {
    products.forEach((p) => nodeHtml.insertAdjacentHTML("beforeend", productView(p)))
}

function renderProductList() {
    Array.from(document.getElementsByClassName("catalog"))
        .forEach((element) => {
            renderProducts(catalog.products, element);

        })
}