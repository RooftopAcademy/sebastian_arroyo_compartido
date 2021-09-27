import Product from "./Product";

export default class Cart{

    products: Product[];

    constructor(){
        this.products = [];
    }

    add(product: Product){
        this.products.push(product);
    }

    findById(id: number){
        this.products.find((product) => {
            return product.id == id;
        })
    }
}