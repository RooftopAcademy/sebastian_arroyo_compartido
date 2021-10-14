import Product from "../classModel/Product";
import PageRenderer from "../pageController/PageRenderer";
import Page from "./Page";

export default class HomePage implements Page{
    content:string;
    pageRenderer : PageRenderer;

    constructor(pageRenderer:PageRenderer){
        this.content = this.baseHtmlView();;
        this.pageRenderer = pageRenderer;
    }

    private baseHtmlView():string{
        return `
        <div class = "slide-container d-flex" >
            <button class="prev" >&laquo;</button>
            <div class = "slide-product-container" id = "slide-product-container"></div>
            <button class="next" >&raquo;</button>
        </div>
        `;
    }

    private productSliderView(product: Product):string{
        return `
        <div class = "slide-product fade">
            <img class = "slide-product-img" src = ${product.image}>
        </div>
        `;
    }

    private renderProduct(product: Product, slideProductContainer: HTMLDivElement){
        slideProductContainer.insertAdjacentHTML("beforeend", this.productSliderView(product));
    }

    private renderSliderProducts(){
        let slideProductContainer = this.pageRenderer.document.getElementById("slide-product-container") as HTMLDivElement;
        //Renders 5 products 
        let sliderProducts: Product[] = this.pageRenderer.store.catalog.exportRandomSliderProducts(5);
        sliderProducts.forEach((product) => {
            this.renderProduct(product, slideProductContainer);
            console.log(product);
        })
    }

    public render():string{
        return this.content;
    }

    public loadEventBehavior(){
        this.renderSliderProducts();
        
    }
}