import Product from "../classModel/Product";
import PageRenderer from "../pageController/PageRenderer";
import Page from "./Page";

export default class CartPage implements Page{
    content:string;
    pageRenderer : PageRenderer;

    constructor(controller : PageRenderer){
        this.content = `
        <div class = "cart-container d-flex space-evenly" id = "cart">
            <div class = "product-cart-section d-flex flex-column" id = "product-cart-section">
                <div class = "cart-item-container d-flex">
                    <div class = "cart-item-detail d-flex">
                        <p>Id - Product Name</p>
                        <p>Price</p>
                        <p id = "cart-item-quantity">Quantity</p>
                    </div>
                    
                </div>
            </div>
            <div class = "price-cart-section d-flex flex-column justify-content-center" id = "price-cart-section">
            </div>
        </div>
        `;
        
        this.pageRenderer = controller
    }

    private cartItemView(product: Product){
        return `
        <div class = "cart-item-container d-flex">
            <div class = "cart-item-detail d-flex justify-self-start">
                <p>${product.id} - ${product.name}</p>
                <p>${product.price}$</p>
                <p id = "cart-item-quantity">${product.qtyRequested}</p>
            </div>
            <div class = "cart-button-container d-flex justify-self-end">
                <button class = "cart-item-button" id = "cart-item-add">Add</button>
                <button class = "cart-item-button" id = "cart-item-remove">Remove</button>
            </div>
        </div>
        `;
    }

    private renderCartItem(nodeHtml: Element) {
        this.pageRenderer.store.cart.getProducts().forEach((p) => nodeHtml.insertAdjacentHTML("beforeend", this.cartItemView(p)))
    }

    private renderCartItemList() {
        Array.from(document.getElementsByClassName("product-cart-section"))
            .forEach((element) => {
                this.renderCartItem(element);
    
            })
    }

    render():string{
        return this.content;
    }

    loadEventBehavior(){
        this.renderCartItemList();
        
    }
}