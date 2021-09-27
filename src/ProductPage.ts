import Page from "./Page";

export default class ProductPage implements Page{
    content:string;

    constructor(){
        this.content = "hello this is the Products page";
    }

    render():string{
        return this.content;
    }
}