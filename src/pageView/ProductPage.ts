import Cart from "../classModel/Cart";
import PageRenderer from "../pageController/PageRenderer";
import Page from "./Page";
import Product from "../classModel/Product";
import Catalog from "../classModel/Catalog";

export default class ProductPage implements Page{
    content:string;
    pageRenderer : PageRenderer;


    constructor(controller:PageRenderer){
        this.content = `
        <div class="catalog d-flex wrap">

        </div>
        `;
        this.pageRenderer = controller;
    }

    render():string{
        return this.content;
    }

    private productItemView(product: Product){
        return `
        <div class = "product-item d-flex" style = "background-image: url(${product.image})">
            <div class = "detail-text">
                <h4 class="gfx-title">${product.name}</h3>
                <p>${product.price}$</p>
                <p>Stock:${product.stock}</p>
            </div>
            <button data-id="${product.id}" class="product-button">Add To Cart</button>
        </div>
        `;
    }



    private renderProducts(nodeHtml: Element) {
        this.pageRenderer.store.exportProducts().forEach((p) => nodeHtml.insertAdjacentHTML("beforeend", this.productItemView(p)))
    }
    
    private renderProductList() {
        Array.from(document.getElementsByClassName("catalog"))
            .forEach((element) => {
                this.renderProducts(element);
    
            })
    }

    private addToCartNotification(){
        //holds all add to cart buttons inside the product list
        let addToCartButton = Array.from(document.getElementsByClassName('product-button')) as HTMLButtonElement[];
        let cartNotification = document.getElementById('product-counter') as HTMLDivElement;
        addToCartButton.forEach((button) => {

            button.addEventListener('click', (e) => {

                let id: string = button.dataset.id as string;
                let cart:Cart =  this.pageRenderer.store.cart;
                let catalog :Catalog = this.pageRenderer.getProductsCatalog();
                let product: Product = catalog.findById(+id);
                console.log(product);
                //Adds object Product to current Cart
                cart.addProduct(product);
                cartNotification.innerHTML = cart.counter.toString();

            })

        })
            
    }

    loadEventBehavior(){
        this.renderProductList();
        this.addToCartNotification();
    }
}