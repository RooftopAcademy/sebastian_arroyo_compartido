import Product from "./Product";

export default class Catalog{

    products : Product[];

    constructor(){
        this.products = [];
    }

    add(product: Product){
        this.products.push(product);
    }

    //If it doesnt find a product that matches the id , returns an empty product (null object)
    findById(id: number) : Product{
        let product:Product | undefined = this.products.find((product) => product.id == id);
        return product != undefined ? product : new Product();
    }

    public exportRandomSliderProducts(n: number) : Product[]{
        let sliderProducts : Product[] = [];
        for (let i = 0; i < n; i++) {
            //adds random products from the catalog n times
            sliderProducts.push(this.products[Math.floor(Math.random()*this.products.length)])
        }
        console.log(sliderProducts);
        return sliderProducts;
    }

}