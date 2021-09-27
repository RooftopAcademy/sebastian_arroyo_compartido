import Cart from './Cart'
import Catalog  from './Catalog'
import Product from './Product'

export default class Store {

    catalog: Catalog;
    cart: Cart;
    
    constructor(){

        this.catalog = new Catalog;
        this.cart = new Cart;
    }

    
}
