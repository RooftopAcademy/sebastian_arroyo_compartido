import Page from "./Page";

export default class HomePage implements Page{
    content:string;

    constructor(){
        this.content = "HomePage";
    }

    render():string{
        return this.content;
    }
    loadEventBehavior(){
        
    }
}