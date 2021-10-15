import Product from "../Product";
import Sortable from "./Sortable";

export default class IdSort implements Sortable{

    sort(products: Product[]):Product[]{
        products.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
        return products;
    }
}