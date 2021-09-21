function productsToHtml(products){
    return products.map((p) => productView(p))
}

function renderProductList(){
    Array.from(document.getElementById("catalog"))
        .forEach((element) => {
            //catalog.getProducts() returns an array of class Product
            element.innerHTML = productsToHtml(catalog.getProducts())
        })
}