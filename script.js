let cart = [];

function addToCart(productName, price) {
    // Add product to the cart
    let product = { name: productName, price: price };
    cart.push(product);
    displayCart();
}

function displayCart() {
    // Display the cart items
    let cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = ''; // Clear previous cart contents

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty!</p>';
    } else {
        let totalPrice = 0;
        cart.forEach(item => {
            cartContainer.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
            totalPrice += item.price;
        });

        // Display total price
        cartContainer.innerHTML += `<p><strong>Total: ₹${totalPrice}</strong></p>`;
    }
}

function checkout() {
    // Checkout functionality
    if (cart.length === 0) {
        alert('Your cart is empty! Add some items before checking out.');
    } else {
        let totalAmount = 0;
        cart.forEach(item => totalAmount += item.price);
        
        alert(`Your total is ₹${totalAmount}. Proceeding to payment...`);

        // Clear cart after checkout
        cart = [];
        displayCart();
    }
}
