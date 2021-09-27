import Page from "./Page";

export default class LoginPage implements Page{
    content:string;

    constructor(){
        this.content = "hello this is the  Login page";
    }

    render():string{
        return this.content;
    }
}