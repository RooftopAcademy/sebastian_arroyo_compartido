class Catalog{

    constructor(){
        this._products = [];
    }

    get products(){
        return this._products;
    }

    add(product){
        this._products.push(product);
    }

    findById(id){
        this._products.find((product) => {
            return product.id == id;
        })
    }
}