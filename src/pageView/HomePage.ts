import PageRenderer from "../controller/PageRenderer";
import Page from "./Page";

export default class HomePage implements Page{
    content:string;
    controller : PageRenderer;

    constructor(controller:PageRenderer){
        this.content = "HomePage";
        this.controller = controller;
    }

    render():string{
        return this.content;
    }
    loadEventBehavior(){
        
    }
}