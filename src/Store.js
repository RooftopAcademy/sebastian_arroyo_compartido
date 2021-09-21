import { Cart } from './Cart.js'
import { Catalog } from './Catalog.js'
import { Product } from './Product'

export class Store {
    constructor(){
        this._user = new User;

        this._catalog = new Catalog;

        this._cart = new Cart;

    }

    get catalog(){
        return this._catalog;
    }

    get cart(){
        return this._cart;
    }

    fetchProducts(){
        let products = [
            {
            id: 1,
            image: '',
            name: 'Alienware m15',
            stock: '7',
            price: '999.99'
            },
            {
            id: 2,
            image: 'assets/img/alienware3.png',
            name: 'Alienware R4',
            stock: '3',
            price: '1399.89'
            },
            {
            id: 3,
            image: 'assets/img/alienware2.png',
            name: 'Alienware 17',
            stock: '0',
            price: '1299.89'
            },
            {
            id: 4,
            image: 'assets/img/alienware2.png',
            name: 'Alienware 17',
            stock: '11',
            price: '1299.89'
            },
            {
            id: 5,
            image: 'assets/img/alienware2.png',
            name: 'Alienware 17',
            stock: '8',
            price: '1299.89'
            },
            {
            id: 6,
            image: 'assets/img/alienware2.png',
            name: 'Alienware 17',
            stock: '2',
            price: '1299.89'
            },
        ]
        products.forEach((p) => {
            let product = new Product;
            product.id = p.id;
            product.name = p.name; 
            product.price = p.price;
            product.stock = p.stock;
            product.image = p.image;

            this._catalog.add(product);
        })
    }
}
