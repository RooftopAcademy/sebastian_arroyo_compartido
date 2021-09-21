import { Store } from '../src/Store.js'
import {productView} from '../src/views/productView.js'

let store = new Store;
store.fetchProducts();
let catalog = store.catalog;
//console.log(catalog);
renderProductList();

function productsToHtml(products){
    return products.map((p) => productView(p))
}

function renderProductList(){
    Array.from(document.getElementsByClassName("catalog"))
        .forEach((element) => {
            element.innerHTML = productsToHtml(catalog.products)
        })
}