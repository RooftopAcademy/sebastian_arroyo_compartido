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
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody id = "product-cart-section-body">
                    
                </tbody>
            </table>
            </div>
        </div>
        `;
        
        this.pageRenderer = controller
    }

    private cartItemView(product: Product) : string{
        return `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>
                <div class = "d-flex space-between" >
                    ${product.qtyRequested}
                    <div>
                        <button data-id = "${product.id}" class = "plus-button">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button data-id = "${product.id}" class = "minus-button">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
            </td>
            <td>$${product.qtyRequested * product.price}</td>
            <td>
                <div class = "d-flex space-evenly">
                    <button data-id = "${product.id}" class = "trash-button">
                        <i class="far fa-trash-alt fa-2x"></i>
                    </button>
                </div>
            </td>
        </tr>
        `;
    }

    private cartItemTotalView() : string{
        let products = this.pageRenderer.store.cart.getProducts();
        let totalPrice = 0;
        products.forEach(p => {
            totalPrice += p.qtyRequested * p.price;
        })
        return `
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>${this.pageRenderer.store.cart.counter}</td>
            <td>$${totalPrice}</td>
        </tr>
        `;
    }



    private renderCartItem(nodeHtml: Element) {
        this.pageRenderer.store.cart.getProducts().forEach((p) => nodeHtml.insertAdjacentHTML("beforeend", this.cartItemView(p)))
    }

    private renderCartItemTotal(nodeHtml : Element){
        nodeHtml.insertAdjacentHTML("beforeend", this.cartItemTotalView());
    }

    private renderCartItemList() {
        let cartProductsSection = document.getElementById("product-cart-section-body") as Element;
        this.renderCartItem(cartProductsSection);
        this.renderCartItemTotal(cartProductsSection);
    }

    render():string{
        return this.content;
    }

    loadEventBehavior(){
        this.renderCartItemList();
        
    }
}