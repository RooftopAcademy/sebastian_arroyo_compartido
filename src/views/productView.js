export function productView(product){
    /*let div = document.createElement("div");
    div.classList.add('product-item');
    div.style.backgroundImage = product.image;
    div.innerHTML = `*/
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