import Cart from './Cart'
import Catalog from './Catalog'
import Product from './Product'

async function resolveHttpCall<T>(request: RequestInfo): Promise<T> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
}
export default class Store {

    catalog: Catalog;
    cart: Cart;

    constructor() {

        this.catalog = new Catalog;
        this.cart = new Cart;
    }

    async fetchProductsFromApi() {
        try {
            const products = await resolveHttpCall<Product[]>('https://my-json-server.typicode.com/RooftopAcademy/sebastian_arroyo_compartido/products');
            this.catalog.products = products;
        } catch (err) {
            console.log('Fetch failed ', err);
        }

    }


    exportProducts() {
        return this.catalog.products
    }
}
