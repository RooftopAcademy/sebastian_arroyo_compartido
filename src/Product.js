export class Product {

    constructor(){
        this._name = String;

        this._id = Number;

        this._price = Number;

        this._stock = Number;

        this._image = String;
    }

    set name(n){
        this._name = n;
    }

    get name(){
        return this._name;
    }

    set id(id){
        this._id = id;
    }

    get id(){
        return this._id;
    }

    set price(p){
        this._price = p;
    }

    get price(){
        return this._price;
    }
    set stock(n){
        this._stock = n;
    }

    get stock(){
        return this._stock;
    }
    set image(s){
        this._image = s;
    }

    get image(){
        return this._image;
    }
}