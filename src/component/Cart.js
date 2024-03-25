
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const style = {
    border: '2px'
  } 
  return (
    <div className="cart" style = {style}>
      <h2 style = {style}>Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <p>Total (in cart): ${total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
