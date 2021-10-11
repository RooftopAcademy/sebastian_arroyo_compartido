import PageRenderer from "../pageController/PageRenderer";
import Page from "./Page";

export default class RegistrationPage implements Page {
    content: string;
    controller: PageRenderer;

    constructor(controller: PageRenderer) {
        this.content = `
        <form action = "/" method = "GET" id = "form" class="form d-flex">
            <ul class="registration-container">
                <li>
                    <label for="first-name">First Name</label>
                    <input type="text" id="First-name" placeholder="Enter your first name here" required>
                </li>

                <li>
                    <label for="last-name">Last Name</label>
                    <input type="text" id="Last-name" placeholder="Enter your last name here" required>
                </li>

                <li>
                    <label for="email">Email</label>
                    <input type="email" id="Email" placeholder="Enter your email here" required>
                </li>

                <li>
                    <label for="phone">Phone</label>
                    <input type="tel" id="Phone" placeholder="Enter your phone here" required>
                </li>

                <li>
                    <label for="password">Password</label>
                    <input type="password" id="Password" placeholder="Enter your password here" required>
                </li>

                <li>
                    <label for="repeatPassword">Repeat Password</label>
                    <input type="password" id="repeatPassword" placeholder="Enter your password here" required>
                </li>
                
                <li>
                    <button type="submit">Submit</button>
                </li>
            </ul>
            <div id= "formError" class = "formError">

            <div>
        </form>`;
        this.controller = controller;
    }

    render(): string {
        return this.content;
    }

    private validateFormInput(input: HTMLInputElement[], messages: string[]) {
        input.forEach(inputString => {
            if (inputString.value.length >= 30) {
                messages.push(inputString.id + " must be less than 30 characters");
            } else if (inputString.value.length <= 6) {
                messages.push(inputString.id + " must be longer than 6 characters");
            }
        })
    }

    private validatePasswordInput(pass1: string, pass2: string, messages: string[]) {
        if (pass1 != pass2) {
            messages.push("Passwords must match");
        } else if (pass1 == "password" || pass2 == "password") {
            messages.push("Password cant be 'password'");
        }
    }

    loadEventBehavior(): void {
        let firstName = document.getElementById("First-name");
        let lastName = document.getElementById("Last-name");
        let email = document.getElementById("Email");
        let phone = document.getElementById("Phone");
        let password = document.getElementById("Password") as HTMLInputElement;
        let repeatPassword = document.getElementById("repeatPassword") as HTMLInputElement;
        let form = document.getElementById("form");
        let error = document.getElementById("formError") as HTMLDivElement;
        let inputArray = [firstName, lastName, email, phone] as HTMLInputElement[];
        form?.addEventListener('submit', (e) => {
            let messages: string[] = [];
            this.validateFormInput(inputArray, messages);
            this.validatePasswordInput(password.value, repeatPassword.value, messages);

            if (messages.length > 0) {
                e.preventDefault();
                error.innerHTML = messages.join(', ');
            }
        })
    }
}