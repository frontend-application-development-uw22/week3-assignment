import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart/Cart";
import Property from "./Components/Property/Property";
import Properties from "./Components/Properties/Properties";
import Collection from "./Components/Collections/Collection";

import propertyData from "./_data/bnbs.json";
import locationData from "./_data/locations.json";

export default function App() {
  let [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onAddToCartHandler = (property) => {
    setCartItems((prevState) => [...prevState, property]);
    localStorage.setItem("selectedProperties", cartItems);
  };

  const onRemoveFromCartHandler = (property) => {
    setCartItems(cartItems.filter((item) => item.id !== property.id));
    localStorage.setItem("selectedProperties", cartItems);
  };

  const totalCost = cartItems.reduce((prev, curr) => {
    return prev + curr.payment.cost;
  }, 0);

  return (
    <>
      <nav className="navbar">
        <Link className="navbar__link" to="/">
          GetAway
        </Link>
        <Link className="navbar__link" to="/properties/houses">
          Houses
        </Link>
        <Link className="navbar__link" to="/properties/apartments">
          Apartments
        </Link>
        <Link className="navbar__link" to="/properties/condos">
          Condos
        </Link>
        <Link className="navbar__link" to="/cart">
          Cart ({cartItems.length} - ${totalCost})
        </Link>
      </nav>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                propertyData={propertyData}
                onAddToCartHandler={onAddToCartHandler}
                onRemoveFromCartHandler={onRemoveFromCartHandler}
                locationData={locationData}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onRemoveFromCartHandler={onRemoveFromCartHandler}
                locationData={locationData}
              />
            }
          ></Route>
          <Route
            path="/property/:propertyId"
            element={
              <Property
                cartItems={cartItems}
                onAddToCartHandler={onAddToCartHandler}
                onRemoveFromCartHandler={onRemoveFromCartHandler}
                propertyData={propertyData}
                locationData={locationData}
              />
            }
          ></Route>
          <Route
            path="/properties/:propertyType"
            element={
              <Properties
                cartItems={cartItems}
                onAddToCartHandler={onAddToCartHandler}
                onRemoveFromCartHandler={onRemoveFromCartHandler}
                propertyData={propertyData}
                locationData={locationData}
              />
            }
          ></Route>
          <Route
            path="/collection/:city"
            element={
              <Collection
                cartItems={cartItems}
                onAddToCartHandler={onAddToCartHandler}
                onRemoveFromCartHandler={onRemoveFromCartHandler}
                propertyData={propertyData}
                locationData={locationData}
              />
            }
          ></Route>
        </Routes>
      </main>
      <div className="footer">
        <h5 className="footer__copy">Copyright 2022 | All rights reserved</h5>
      </div>
    </>
  );
}
