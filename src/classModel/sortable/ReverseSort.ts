import Product from "../Product";
import Sortable from "./Sortable";

export default class ReverseSort implements Sortable{

    sort(products: Product[]):Product[]{
        return products.reverse();
    }
}