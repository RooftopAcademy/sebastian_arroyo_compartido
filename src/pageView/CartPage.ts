import PageRenderer from "../pageController/PageRenderer";
import Page from "./Page";

export default class CartPage implements Page{
    content:string;
    controller : PageRenderer;

    constructor(controller : PageRenderer){
        this.content = "Cart Page";
        
        this.controller = controller
    }

    render():string{
        return this.content;
    }

    loadEventBehavior(){
        
    }
}