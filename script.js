let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total-price").innerText = total;

    const li = document.createElement("li");
    li.innerText = `${product} - ₹${price}`;
    document.getElementById("cart-items").appendChild(li);
}

function clearCart() {
    cart = [];
    total = 0;
    document.getElementById("cart-count").innerText = 0;
    document.getElementById("total-price").innerText = 0;
    document.getElementById("cart-items").innerHTML = "";
}
