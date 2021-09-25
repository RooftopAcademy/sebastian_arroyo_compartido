import Product from "./Product";
import Store from "./Store";
import productView from "./views/productView";

let store = new Store;
store.fetchProducts();
let catalog = store.catalog;
//console.log(catalog);
renderProductList();

function renderProducts(products: Product[], nodeHtml: Element) {
    products.forEach((p) => nodeHtml.insertAdjacentHTML("beforeend", productView(p)))
}

function renderProductList() {
    Array.from(document.getElementsByClassName("catalog"))
        .forEach((element) => {
            renderProducts(catalog.products, element);

        })
}