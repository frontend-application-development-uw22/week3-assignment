//I followed the tutorial found here as a guideline for creating a cart: https://youtu.be/odXjd_raGUI  

import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './BnBApp/Home.jsx';
import Cart from './BnBApp/Cart.jsx';
import { CartProvider } from 'react-use-cart'


function App() {
  return (
    <div>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </div>

  )
}
export default App;
