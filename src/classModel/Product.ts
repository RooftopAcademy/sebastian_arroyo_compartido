export default class Product {

    name: string;
    id: number;
    price: number;
    stock: number;
    image: string;
    /*constructor(public name: string = "", public id: number = 0, public price: number = 0, public image: string = "", public stock: number = 0) {
    }*/
    constructor(){
        this.name = "";
        this.id = 0;
        this.price = 0;
        this.stock = 0;
        this.image = "";

    }

    public hasStock() : boolean{
        return this.stock > 0;
    }
}