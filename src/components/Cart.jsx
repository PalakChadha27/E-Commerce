import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Cart = () => {
  return (
    <CartContainer>
      <h2>Your Cart</h2>
      <CartItem>
        <h3>Smartphone</h3>
        <p>Price: $599</p>
        <button>Remove</button>
      </CartItem>
      <CartItem>
        <h3>Laptop</h3>
        <p>Price: $999</p>
        <button>Remove</button>
      </CartItem>
      <div>
        <h3>Total: $1598</h3>
        <button>Proceed to Checkout</button>
      </div>
    </CartContainer>
  );
};

export default Cart;
