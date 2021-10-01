import Controller from "./Controller";
import Page from "./Page";

export default class HomePage implements Page{
    content:string;
    controller : Controller;

    constructor(controller:Controller){
        this.content = "HomePage";
        this.controller = controller;
    }

    render():string{
        return this.content;
    }
    loadEventBehavior(){
        
    }
}