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

        {/*<ShoppingCart />*/}
        <ShoppingCart cart={cart}/>

      </div>

    </div>
  );
}

export default App;
