import Page from "./Page";

export default class CartPage implements Page{
    content:string;

    constructor(){
        this.content = "Cart Page";
    }

    render():string{
        return this.content;
    }

    loadEventBehavior(){
        
    }
}