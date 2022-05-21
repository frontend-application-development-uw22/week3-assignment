import React from 'react';
import { useState } from 'react';
import './App.css';
import BnbApp from './bnb-ui/BnbApp.js';
import BnbCart from './bnb-ui/BnbCart.js';

function App() {
  const [totalCost, setTotalCost] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const addItem = (bnb) => {
    setCartItems([...cartItems, {bnb}]);
    setTotalCost(totalCost + bnb.payment.cost);
  };
  const removeItem = (e, cartItem) => {
    // e.currentTarget.parentNode.parentNode.remove();
    setCartItems(cartItems.filter(remove => remove !== cartItem));
    setTotalCost(totalCost - cartItem.bnb.payment.cost);
  };
  
  return (
    <div className='ui-app'>
      <BnbApp 
        addItem = {addItem}/>

      <BnbCart 
        cartItems = {cartItems}
        removeItem = {removeItem}
        totalCost = {totalCost}/>
    </div>
  );
}

export default App;
