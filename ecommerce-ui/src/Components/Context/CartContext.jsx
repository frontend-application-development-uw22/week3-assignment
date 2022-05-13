import React, { useState, createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return <CartContext.Provider>{children}</CartContext.Provider>;
};

const withCart = (Child) => (props) =>
  (
    <CartProvider.Consumer>
      {(context) => <Child {...props} {...context} />}
    </CartProvider.Consumer>
  );

export { CartProvider, withCart };
