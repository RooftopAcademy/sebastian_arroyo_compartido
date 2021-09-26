import Page from "./Page";

export default class RegistrationPage implements Page{
    content:string;

    constructor(){
        this.content = `
        <form>
            <ul class="registration-container">
                <li>
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" placeholder="Enter your first name here">
                </li>

                <li>
                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" placeholder="Enter your last name here">
                </li>

                <li>
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email here">
                </li>

                <li>
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" placeholder="Enter your phone here">
                </li>

                <li>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password here">
                </li>
                
                <li>
                    <button type="submit">Submit</button>
                </li>
            </ul>
        </form>`;
    }

    render():string{
        return this.content;
    }
}