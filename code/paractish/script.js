// JavaScript to handle adding items to the cart
let itemCount = 0;
let totalPrice = 0;

// Function to update the order summary
function updateOrderSummary(productName, productPrice) {
    itemCount += 1;
    totalPrice += parseFloat(productPrice);

    // Update the DOM elements with new values
    document.getElementById('item-count').innerText = itemCount;
    document.getElementById('total-price').innerText = `$${totalPrice.toFixed(2)}`;
}

// Event listeners for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');
        updateOrderSummary(productName, productPrice);
        alert(`${productName} has been added to your cart.`);
    });
});
