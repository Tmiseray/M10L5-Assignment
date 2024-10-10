let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

document.addEventListener("DOMContentLoaded", function() {
    let productsList = document.getElementById("productsList");
    productsList.innerHTML = "";

    products.forEach(function(product) {
        let productNameItem = document.createElement("li");
        productNameItem.textContent = `${product.name}`;
        productNameItem.style.fontWeight = "bold";
        productNameItem.style.color = "darkseagreen";
        productsList.appendChild(productNameItem);

        let productDetails = document.createElement("ul");
        productDetails.style.fontWeight = "lighter";
        productDetails.style.color = "olivedrab"

        let productPriceItem = document.createElement("li");
        productPriceItem.innerHTML = `<i>Price: $${product.price}</i>`;
        productPriceItem.style.color = "rosybrown"
        productDetails.appendChild(productPriceItem);
        
        let productDescriptionItem = document.createElement("li");
        productDescriptionItem.innerHTML = `<i>Description:</i> ${product.description}`;
        productDetails.appendChild(productDescriptionItem);

        productNameItem.appendChild(productDetails);
    });
});