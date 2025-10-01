import React, { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  
  const removeFromCart = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCart = [...cartItems];
      newCart.splice(index, 1);
      setCartItems(newCart);
    }
  };


  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
