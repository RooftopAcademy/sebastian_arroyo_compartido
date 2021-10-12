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

    findById(id: number) : Product{
        let product:Product | undefined = this.products.find((product) => product.id == id);
        return product != undefined ? product : new Product();
    }

    removeCartProduct(id:number){
        let productToRemove : Product = this.findById(id);
        this.counter = this.counter - productToRemove.qtyRequested;

        this.products = this.products.filter((product) => {
            return product.id != id;
        })
        this.productsId.delete(id);

    }

    getProducts(){
        return this.products;
    }

    


}