import Page from "./Page";

export default class ErrorPage implements Page{
    content:string;

    constructor(){
        this.content = "hello this is the Errorpage";
    }

    render():string{
        return this.content;
    }

    loadEventBehavior(){

    }
}