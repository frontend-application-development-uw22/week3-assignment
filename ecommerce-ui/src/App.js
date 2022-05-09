import './App.css';
import React, {useState} from "react";
import VacationRental from './rentals/VacationRental'
import bnbs from './_data/bnbs.json'
// import {useState} from "@types/react";
import ShoppingCart from "./rentals/ShoppingCart";

function App() {

  const [cart, setCart] = useState([])

  function addToCart(card){

    console.log('button clicked')
    console.log(cart)

    setCart([...cart, card])

  }

  function removeFromCart(idx){

    console.log('button clicked')
    console.log(idx)

    setCart([...cart.slice(0, idx), ...cart.slice(idx+1, cart.length)])

    // setCart([...cart, card])

  }

  return (
    <div className="App">

      <div className="app-grid">

        <h1>Vacation Rentals</h1>

        <hr />

        <VacationRental bnbs={bnbs} addToCart = {addToCart}/>

      </div>

      <div className="app-grid">

        <h1>Shopping Cart</h1>

        <hr />

        <ShoppingCart cart={cart} removeFromCart={removeFromCart}/>

      </div>

    </div>
  );
}

export default App;
