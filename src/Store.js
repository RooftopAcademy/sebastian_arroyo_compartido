class Store {
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
        //crear los objetos producto de ejemplo para agregar al la tienda virtual
        this._catalog.add(new Product);
    }
}
