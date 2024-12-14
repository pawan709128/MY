let itemCount = 0;
let totalPrice = 0;

function updateOrderSummary(productName, productPrice) {
    itemCount += 1;
    totalPrice += parseFloat(productPrice);

    document.getElementById('item-count').innerText = itemCount;
    document.getElementById('total-price').innerText = `₹${totalPrice.toFixed(2)}`;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');
        updateOrderSummary(productName, productPrice);
        alert(`${productName} has been added to your cart.`);
    });
});
