import Product from "./Product";

export default class Cart{

    products: Product[];
    counter: number;

    constructor(){
        this.products = [];
        this.counter = 0;
    }

    addProduct(product: Product){
        if (product.stock > 0){
            this.products.push(product);
            this.counter +=  1;
            //Reduces product stock in catalog and increases product counter in your cart
            product.stock -=1;
        }else{
            console.log(`Product ${product.name} is out of stock.`)
        }
    }

    


}