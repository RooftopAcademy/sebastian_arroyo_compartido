import PageRenderer from "../controller/PageRenderer";
import Page from "./Page";

export default class ErrorPage implements Page{
    content:string;
    controller : PageRenderer;

    constructor(controller : PageRenderer){
        this.content = "404 ERROR";
        this.controller = controller;
    }

    render():string{
        return this.content;
    }

    loadEventBehavior(){

    }
}