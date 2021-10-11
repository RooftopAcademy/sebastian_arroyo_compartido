import Product from "../classModel/Product";
import PageRenderer from "../pageController/PageRenderer";
import Page from "./Page";

export default class CartPage implements Page{
    content:string;
    pageRenderer : PageRenderer;

    constructor(controller : PageRenderer){
        this.content = `
        <div class = "cart-container d-flex space-evenly" id = "cart">
            <div class = "product-cart-section" >
            <table class = "product-cart-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody class = "product-cart-section-body">
                    
                </tbody>
            </table>
            </div>
            <div class = "price-cart-section d-flex flex-column justify-content-center" id = "price-cart-section">
            </div>
        </div>
        `;
        
        this.pageRenderer = controller
    }

    private cartItemView(product: Product){
        return `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>${product.qtyRequested}</td>
        </tr>
        `;
    }

    private renderCartItem(nodeHtml: Element) {
        this.pageRenderer.store.cart.getProducts().forEach((p) => nodeHtml.insertAdjacentHTML("beforeend", this.cartItemView(p)))
    }

    private renderCartItemList() {
        Array.from(document.getElementsByClassName("product-cart-section-body"))
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