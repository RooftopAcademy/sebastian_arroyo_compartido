import Product from "./Product";

export default class Cart{

    products: Product[];
    counter: number;
    productsId: Set<number>;

    constructor(){
        this.products = [];
        this.counter = 0;
        this.productsId = new Set();
    }

    private pushProduct(product:Product){
        
        if(!this.productsId.has(product.id)){
            this.products.push(product);
        }
        product.qtyRequested += 1;
        this.productsId.add(product.id);
    }

    addProduct(product: Product){
        if (product.stock > 0){
            this.counter += 1;
            product.stock -= 1;
            this.pushProduct(product);
        }else{
            console.log(`Product ${product.name} is out of stock.`)
        }
    }

    getProducts(){
        return this.products;
    }

    


}