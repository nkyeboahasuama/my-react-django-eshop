import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  return (
    <CartContext.Provider value={[cartData, setCartData]}>
      {props.children}
    </CartContext.Provider>
  );
};
