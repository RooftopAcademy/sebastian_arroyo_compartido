import Product from "../Product";
import Sortable from "./Sortable";

export default class PriceSort implements Sortable{

    sort(products: Product[]):Product[]{
        products.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
        return products;
    }
}