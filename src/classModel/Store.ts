import Cart from './Cart'
import Catalog from './Catalog'
import Product from './Product'
export default class Store {

    catalog: Catalog;
    cart: Cart;

    constructor() {

        this.catalog = new Catalog;
        this.cart = new Cart;
    }

    /*async fetchProductsFromApi() {
        const jsonUrl = 'https://my-json-server.typicode.com/RooftopAcademy/sebastian_arroyo_compartido/db';
        try {
            const response = await fetch(jsonUrl);
            const products: Product[] = await response.json(); //Promise<any>
            products.forEach(p => p.qtyRequested=0);
            this.catalog.products = products;
            console.log("Product Data Fetched");
        } catch (err) {
            console.log('Fetch failed ', err);
        }
    }*/

    async fetchProductsFromApi() {
        const jsonUrl = 'http://localhost:3000/products';
        try {
            const response = await fetch(jsonUrl);
            const products: Product[] = await response.json(); //Promise<any>
            products.forEach(p => p.qtyRequested=0);
            this.catalog.products = products;
            console.log("Product Data Fetched");
        } catch (err) {
            console.log('Fetch failed ', err);
        }
    }

    /*async fetchProductsFromApi() {
        const jsonUrl = 'http://localhost:3000/products';
        try {
            let products: Product[] = []
            await fetch(jsonUrl).then(res => res.json().then(json => products = json));
            products.forEach(p => p.qtyRequested=0)
            this.catalog.products = products;
            console.log("Product Data Fetched");
        } catch (err) {
            console.log('Fetch failed ', err);
        }
    }*/

    exportProducts() {
        return this.catalog.products
    }
}
