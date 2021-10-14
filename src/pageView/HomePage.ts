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
        <div class = "d-flex flex-column align-items-center">
            <h1 class = "homepage-title">Our Products:</h1>
            <div class = "slide-container d-flex" >
                <button data-id = "-1" class="previous" >&laquo;</button>
                <div class = "slide-product-container" id = "slide-product-container"></div>
                <button data-id = "1" class="next" >&raquo;</button>
            </div>
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
        })
    }

    public render():string{
        return this.content;
    }

    private sliderButton(n: number, sliderIndex:number, sliderLength:number):number{
        sliderIndex += n;
        if (sliderIndex > sliderLength) sliderIndex = 1;
        if (sliderIndex < 1) sliderIndex = sliderLength;
        return sliderIndex;
    }

    private sliderBehavior(){
        let sliderIndex :number = 1;
        let sliderProducts = Array.from(this.pageRenderer.document.getElementsByClassName("slide-product")) as HTMLButtonElement[];
        //Renders first slider image
        sliderProducts[0].style.display = "block";
        let previousButtons = Array.from(this.pageRenderer.document.getElementsByClassName("previous")) as HTMLButtonElement[];
        let nextButtons = Array.from(this.pageRenderer.document.getElementsByClassName("next")) as HTMLButtonElement[];
        let sliderButtons : HTMLButtonElement[] = [...previousButtons, ...nextButtons];
        sliderButtons.forEach(button => {
            button.addEventListener("click", () => {
                let id: string = button.dataset.id as string;
                sliderIndex = this.sliderButton(+id, sliderIndex, sliderProducts.length);
                for (let i = 0; i < sliderProducts.length; i++) {
                    sliderProducts[i].style.display = "none";
                }
                sliderProducts[sliderIndex-1].style.display = "block";
                console.log("sliderInder: " + sliderIndex);
            })
        })
    }

    public loadEventBehavior(){
        this.renderSliderProducts();
        this.sliderBehavior();
        
    }
}