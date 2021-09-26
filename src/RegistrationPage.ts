import Page from "./Page";

export default class RegistrationPage implements Page{
    content:string;

    constructor(){
        this.content = "hello this is the Registration page";
    }

    render():string{
        return this.content;
    }
}