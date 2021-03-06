import Cart from "../classModel/Cart";
import PageRenderer from "../pageController/PageRenderer";
import Page from "./Page";
import Product from "../classModel/Product";
import Catalog from "../classModel/Catalog";

export default class ProductPage implements Page{
    content:string;
    pageRenderer : PageRenderer;


    constructor(controller:PageRenderer){
        this.content = this.baseHtmlView();
        this.pageRenderer = controller;
    }

    render():string{
        return this.content;
    }

    private baseHtmlView():string{
        return `
        <div class = " d-flex flex-column">
            <div class = "product-filter d-flex" >
                <p>Sort By: </p>
                <button data-id = "id-sort" class = "sort-button">Id</button>
                <button data-id = "price-sort" class = "sort-button" >Price</button>
                <button data-id = "stock-sort" class = "sort-button" >Stock</button>
                <button data-id = "reverse-sort" class = "sort-button" >Reverse</button>
            </div>

            <div class="catalog d-flex wrap">

            </div>
        </div>
        `;
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
        Array.from(this.pageRenderer.document.getElementsByClassName("catalog"))
            .forEach((element) => {
                this.renderProducts(element);
    
            })
    }

    private updatePage() {
        this.content = this.baseHtmlView();
        this.pageRenderer.updatePage();
    }

    private sortProductList(){
        let sortButtons = Array.from(this.pageRenderer.document.getElementsByClassName('sort-button')) as HTMLButtonElement[];
        sortButtons.forEach((button) => {
            button.addEventListener('click', () => {
                let sortType: string = button.dataset.id as string;
                console.log(sortType);
                let catalog :Catalog = this.pageRenderer.getProductsCatalog();
                catalog.sortProducts(sortType);
                console.log(catalog.products);
                this.updatePage();
            })
        })
    }


    private addToCartNotification(){
        //holds all add to cart buttons inside the product list
        let addToCartButton = Array.from(this.pageRenderer.document.getElementsByClassName('product-button')) as HTMLButtonElement[];
        let cartNotification = this.pageRenderer.document.getElementById('product-counter') as HTMLDivElement;
        addToCartButton.forEach((button) => {

            button.addEventListener('click', () => {

                let id: string = button.dataset.id as string;
                let cart:Cart =  this.pageRenderer.store.cart;
                let catalog :Catalog = this.pageRenderer.getProductsCatalog();
                let product: Product = catalog.findById(+id);
                console.log(product);
                //Adds object Product to current Cart
                cart.addProduct(product);
                cartNotification.innerHTML = cart.counter.toString();
                this.updatePage()

            })

        })
            
    }

    loadEventBehavior(){
        this.renderProductList();
        this.addToCartNotification();
        this.sortProductList();
    }
}