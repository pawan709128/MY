import React from 'react';

function CartPage() {
  // Sample cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: 100, quantity: 1 },
  ];

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <button>Checkout</button>
    </div>
  );
}

export default CartPage;
