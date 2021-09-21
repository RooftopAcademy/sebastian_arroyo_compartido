export function productView(product){
    let div = document.createElement("div");
    div.classList.add('product-item');
    div.style.backgroundImage = product.image;
    div.innerHTML = `
    <h4 class="gfx-title">${product.name}</h3>
    <span>${product.price}</span>
    <span>$${product.stock}</span>
    <button product-id="${product.id}" class="product-button">View More</button>
`;  
    return div;
}