import Controller from "./Controller";
import Page from "./Page";

export default class ErrorPage implements Page{
    content:string;
    controller : Controller;

    constructor(controller : Controller){
        this.content = "404 ERROR";
        this.controller = controller;
    }

    render():string{
        return this.content;
    }

    loadEventBehavior(){

    }
}