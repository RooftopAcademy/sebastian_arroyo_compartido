import Product from "../Product";

export default interface Sortable{

    sort(products: Product[]):Product[];
}