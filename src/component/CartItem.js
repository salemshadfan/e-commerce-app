
import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="200"/>
      <div>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${item.price * item.quantity}</p>
        <button onClick={() => removeFromCart(item)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
