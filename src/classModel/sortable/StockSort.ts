import Product from "../Product";
import Sortable from "./Sortable";

export default class StockSort implements Sortable{

    sort(products: Product[]):Product[]{
        products.sort((a,b) => (a.stock > b.stock) ? 1 : ((b.stock > a.stock) ? -1 : 0));
        return products;
    }
}