import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import Map from "../Map/Map";
import Reviews from "../Reviews/Reviews";
import "./Property.css";

export default function Property({
  cartItems,
  onAddToCartHandler,
  onRemoveFromCartHandler,
  propertyData,
  locationData,
}) {
  const { propertyId } = useParams();
  const [geocode, setGeocode] = useState([]);

  const property = propertyData.filter(
    (property) => property.id === +propertyId
  )[0];

  const location = locationData.filter(
    (location) => location.id === property.location
  )[0];

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location.slug},${location.state},${location.country}&limit=1&appid=ed71f1cb23d7f1d2e1655136224058b2`
    )
      .then((response) => response.json())
      .then((data) => setGeocode([data[0].lat, data[0].lon]));
  }, []);

  return (
    <div className="property__wrapper">
      <PropertyCard
        cartItems={cartItems}
        onAddToCartHandler={onAddToCartHandler}
        onRemoveFromCartHandler={onRemoveFromCartHandler}
        size="large"
        propertyData={property}
        locationData={locationData}
      />
      <h2>Property Reviews</h2>
      <Reviews totalReviews={property.rating.reviews} />
      <h2>Property Location</h2>
      {/* <Map lat={geocode[0]} lng={geocode[1]} /> */}
    </div>
  );
}
