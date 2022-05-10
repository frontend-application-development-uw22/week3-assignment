import React from "react";
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

  const property = propertyData.filter(
    (property) => property.id === +propertyId
  )[0];

  const location = locationData.filter(
    (location) => location.city === property.location.city
  )[0];

  return (
    <div className="property__wrapper">
      <PropertyCard
        cartItems={cartItems}
        onAddToCartHandler={onAddToCartHandler}
        onRemoveFromCartHandler={onRemoveFromCartHandler}
        size="large"
        propertyData={property}
      />
      <h2>Property Reviews</h2>
      <Reviews totalReviews={property.rating.reviews} />
      <h2>Property Location</h2>
      <Map lat={location.lat} lng={location.lon} />
    </div>
  );
}
