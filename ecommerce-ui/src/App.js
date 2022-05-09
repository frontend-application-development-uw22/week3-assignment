// import logo from './logo.svg';
import './App.css';
import React from "react";
// import ShoppingCart from './rentals/ShoppingCart'
import VacationRental from './rentals/VacationRental'
import bnbs from './_data/bnbs.json'

function App() {
  return (
    <div className="App">

      <div className="app-grid">

        <h1>Vacation Rentals</h1>

        <hr />

        <VacationRental bnbs={bnbs}/>

      </div>

      <div className="app-grid">

        <h1>Shopping Cart</h1>

        <hr />

        <VacationRental bnbs={bnbs}/>

      </div>

    </div>
  );
}

export default App;
