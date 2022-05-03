import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Property from "./Components/Property/Property";
import Properties from "./Components/Properties/Properties";
import Collection from "./Components/Collections/Collection";

import propertyData from "./_data/bnbs.json";
import collectionsData from "./_data/locations.json";

export default function App() {
  return (
    <main className="main">
      <Link to="/">Home</Link> | <Link to="/properties/houses">Houses</Link> |
      <Link to="/properties/apartments">Apartments</Link> |
      <Link to="/properties/condos">Condos</Link> |
      <Link to="/properties/places">Places</Link>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              propertyData={propertyData}
              collectionsData={collectionsData}
            />
          }
        ></Route>
        <Route
          path="/property/:propertyId"
          element={<Property data={propertyData} />}
        ></Route>
        <Route
          path="/properties/:propertiesType"
          element={<Properties />}
        ></Route>
        <Route
          path="/collections/:city"
          element={<Collection data={collectionsData} />}
        ></Route>
      </Routes>
    </main>
  );
}
