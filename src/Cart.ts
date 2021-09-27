import Product from "./Product";

export default class Cart{

    products: number[];
    counter: number;

    constructor(){
        this.products = [];
        this.counter = 0;
    }

    add(productId: number){
        this.products.push(productId);
        this.counter = this.counter + 1;
    }

    


}