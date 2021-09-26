import Page from "./Page";

export default class HomePage implements Page{
    content:string;

    constructor(){
        this.content = "hello this is the homepage";
    }

    render():string{
        return this.content;
    }
}