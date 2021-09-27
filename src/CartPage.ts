import Page from "./Page";

export default class CartPage implements Page{
    content:string;

    constructor(){
        this.content = "hello this is the cart page";
    }

    render():string{
        return this.content;
    }

    loadEventBehavior(){
        
    }
}