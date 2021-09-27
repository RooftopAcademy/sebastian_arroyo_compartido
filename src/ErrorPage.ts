import Page from "./Page";

export default class ErrorPage implements Page{
    content:string;

    constructor(){
        this.content = "404 ERROR";
    }

    render():string{
        return this.content;
    }

    loadEventBehavior(){

    }
}