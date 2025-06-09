let cart = [];

function addToCart(itemName, itemPrice) {
    const item = { name: itemName, price: itemPrice };
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Clear previous items
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Price: Rp.${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
            `;
    });

    document.getElementById('total-price').innerText = `Rp.${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert('Proceeding to checkout...');
    // Implement checkout functionality here
}
