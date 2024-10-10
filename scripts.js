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
        productDetails.style.color = "olivedrab";

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


function User(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
}

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let userInfo = document.getElementById("userDetails");
    userInfo.innerHTML = "";

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let newUser = new User(name, email, message);

    alert("Submitted Successfully!");

    let userElement = document.createElement("li");
    userElement.textContent = `${newUser.name}`;
    userElement.style.fontWeight = "bold";
    userElement.style.color = "darkseagreen";
    userInfo.appendChild(userElement);

    let userDetails = document.createElement("ul");
    userDetails.style.fontWeight = "lighter";
    userDetails.style.color = "olivedrab";

    let userEmail = document.createElement("li");
    userEmail.innerHTML = `<i>Email:</i> ${newUser.email}`;
    userDetails.appendChild(userEmail);

    let userMessage = document.createElement("li");
    userMessage.innerHTML = `<i>Message:</i> ${newUser.message}`;
    userMessage.style.color = "rosybrown"
    userDetails.appendChild(userMessage);

    userElement.appendChild(userDetails);
});


const inputs = document.querySelectorAll("input, textarea");
inputs.forEach( input => {
    input.addEventListener("mouseover", function() {
        if (!input.matches(':focus') && input.value === "") {
            input.style.background = "linear-gradient(270deg, #5873db, #81ad4f, #1b675d, #646241)";
            input.style.backgroundSize = "300% 100%";
            input.style.animation = "enhanceInputs 3s infinite alternate";
    
            const style = document.createElement("style");
            style.innerHTML = `
                @keyframes enhanceInputs {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 50% 100%; }
                    100% { background-position: 0% 50%; }
                    }
            `;
            document.head.appendChild(style);
        }
    });

    input.addEventListener("mouseout", function() {
        if (!input.matches(':focus')) {
            input.style.background = "";
            input.style.animation = "";
        }
    });

    input.addEventListener("focus", function() {
        input.style.background = "var(    --bs-warning-bg-subtle)";
    });

    input.addEventListener("blur", function() {
        if (!input.matches(':focus') && input.value === "") {
            input.style.background = "";
        }
    });

    input.addEventListener("input", function() {
        if (input.value) {
            input.style.background = "var(    --bs-success-bg-subtle)";
            input.style.color = "var(    --bs-success-text-emphasis)";
            input.style.border = "2px solid var(--bs-success-border-subtle)";
        }  else if (document.activeElement === input && input.value === "") {
            input.style.background = "var(    --bs-warning-bg-subtle)";
            input.style.color = "";
            input.style.border = "";
        }
    });

    input.addEventListener("change", function() {
        if (input.value) {
            input.style.background = "";
            input.style.border = "2px solid var(--bs-success-border-subtle)";
        }
    });
});


