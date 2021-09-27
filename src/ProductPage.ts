import Page from "./Page";
import Product from "./Product";

export default class ProductPage implements Page{
    content:string;
    catalog: Product[];


    constructor(){
        this.content = `
        <div class="catalog d-flex wrap">

        </div>
        `;
        this.catalog = [];
    }

    render():string{
        return this.content;
    }

    private productItemView(product: Product){
        return `
        <div class = "product-item d-flex" style = "background-image: url(${product.image})">
            <div class ="product-details d-flex">
                <h4 class="gfx-title">${product.name}</h3>
                <p>${product.price}$</p>
                <p>Stock:${product.stock}</p>
                <button product-id="${product.id}" class="product-button">Add To Cart</button>
            </div>
        </div>
        `;
    }

    private fetchProducts(){
        let products = [
            {
            id: 1,
            image: 'resources/GeForce-RTX-3090.jpg',
            name: 'Nvidia GeForce RTX 3090',
            stock: '7',
            price: '$1,499'
            },
            {
            id: 2,
            image: 'resources/AMD-Radeon-RX-6900-XT.jpg',
            name: 'AMD Radeon RX 6900 XT',
            stock: '3',
            price: '999'
            },
            {
            id: 3,
            image: 'resources/Nvidia-RTX-3060-12GB.jpg',
            name: 'Nvidia GeForce RTX 3060 Ti',
            stock: '0',
            price: '399'
            },
            {
            id: 4,
            image: 'resources/AMD-Radeon-RX-5500-XT.jpg',
            name: 'AMD Radeon RX 5500 XT',
            stock: '11',
            price: '169'
            },
            {
            id: 5,
            image: 'resources/Nvidia-Geforce-Gtx-1650.jpg',
            name: 'Nvidia GeForce GTX 1650 Super',
            stock: '8',
            price: '159'
            },
            {
            id: 6,
            image: 'resources/Nvidia-Geforce-RTX-3080.png',
            name: 'Nvidia GeForce RTX 3080',
            stock: '2',
            price: '699'
            },
            {
            id: 7,
            image: 'resources/AMD-Radeon-RX-5700.jpg',
            name: 'AMD Radeon RX 5700',
            stock: '2',
            price: '380'
            },
            {
            id: 8,
            image: 'resources/Nvidia-Geforce-GT-710-2GB.jpg',
            name: 'Nvidia Geforce GT 710 2GB',
            stock: '2',
            price: '60'
            },
        ]
        products.forEach((p) => {
            let product = new Product;
            product.id = p.id;
            product.name = p.name; 
            product.price = +p.price;
            product.stock = +p.stock;
            product.image = p.image;

            this.catalog.push(product);
        })
    }

    private renderProducts(nodeHtml: Element) {
        this.catalog.forEach((p) => nodeHtml.insertAdjacentHTML("beforeend", this.productItemView(p)))
    }
    
    private renderProductList() {
        Array.from(document.getElementsByClassName("catalog"))
            .forEach((element) => {
                this.renderProducts(element);
    
            })
    }

    loadEventBehavior(){
        this.fetchProducts();
        this.renderProductList();
    }
}