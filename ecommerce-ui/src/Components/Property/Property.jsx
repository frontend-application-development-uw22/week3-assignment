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
  data,
}) {
  const { propertyId } = useParams();
  const property = data.filter((property) => property.id === +propertyId)[0];

  return (
    <div className="property__wrapper">
      <PropertyCard
        cartItems={cartItems}
        onAddToCartHandler={onAddToCartHandler}
        onRemoveFromCartHandler={onRemoveFromCartHandler}
        size="large"
        data={property}
      />
      <Reviews totalReviews={property.rating.reviews} />
      <Map lat={property.location.lat} lng={property.location.lng} />
    </div>
  );
}
