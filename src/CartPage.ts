import Controller from "./Controller";
import Page from "./Page";

export default class CartPage implements Page{
    content:string;
    controller : Controller;

    constructor(controller : Controller){
        this.content = "Cart Page";
        this.controller = controller
    }

    render():string{
        return this.content;
    }

    loadEventBehavior(){
        
    }
}