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

    async fetchProductsFromApi() {
        const jsonUrl = 'https://my-json-server.typicode.com/RooftopAcademy/sebastian_arroyo_compartido/products';
        try {
            const response = await fetch(jsonUrl);
            const products: Product[] = await response.json(); //Promise<any>
            this.catalog.products = products;
        } catch (err) {
            console.log('Fetch failed ', err);
        }

    }

    exportProducts() {
        this.catalog.products.forEach(p => p.qtyRequested=0)
        return this.catalog.products
    }
}
