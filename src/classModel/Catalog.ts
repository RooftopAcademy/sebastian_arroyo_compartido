import { TypeAliasDeclaration } from "../../node_modules/typescript/lib/typescript";
import Product from "./Product";
import IdSort from "./sortable/IdSort";
import PriceSort from "./sortable/PriceSort";
import ReverseSort from "./sortable/ReverseSort";
import Sortable from "./sortable/Sortable";
import StockSort from "./sortable/StockSort";

export default class Catalog{

    products : Product[];
    sortable : Sortable;
    private sorts: any;

    constructor(){
        this.products = [];
        this.sortable = new IdSort();
        this.sorts = {
            "id-sort": IdSort,
            "price-sort": PriceSort,
            "stock-sort": StockSort,
            "reverse-sort": ReverseSort
        }
    }

    public sortProducts(sortType: string){
        this.sortable = new this.sorts[sortType]();
        this.products = this.sortable.sort(this.products)
    }

    public add(product: Product){
        this.products.push(product);
    }

    //If it doesnt find a product that matches the id , returns an empty product (null object)
    public findById(id: number) : Product{
        let product:Product | undefined = this.products.find((product) => product.id == id);
        return product != undefined ? product : new Product();
    }

    public exportRandomSliderProducts(n: number) : Product[]{
        let sliderProducts : Product[] = [];
        for (let i = 0; i < n; i++) {
            //adds random products from the catalog n times
            sliderProducts.push(this.products[Math.floor(Math.random()*this.products.length)])
        }
        return sliderProducts;
    }

}