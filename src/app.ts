import { Store } from './Store.js'
import {productView} from './views/productView.js'

let store = new Store;
store.fetchProducts();
let catalog = store.catalog;
//console.log(catalog);
renderProductList();

function renderProducts(products, nodeHtml){
    products.forEach((p) =>  nodeHtml.insertAdjacentHTML("beforeend",productView(p)) )
}

function renderProductList(){
    Array.from(document.getElementsByClassName("catalog"))
        .forEach((element) => {
            renderProducts(catalog.products, element);
            
})}