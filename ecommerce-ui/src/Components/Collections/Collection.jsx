import React from "react";
import { useParams } from "react-router-dom";
import PropertyCard from "../Property/PropertyCard";

export default function Property({
  cartItems,
  onAddToCartHandler,
  onRemoveFromCartHandler,
  propertyData,
  collectionsData,
}) {
  const { city } = useParams();

  const collectionProps = propertyData.filter((property) => {
    return property.location.city.toLowerCase() === city.replace("-", " ");
  });

  return (
    <>
      <h1>Find popular {city} getaways</h1>
      <div className="carousel--container carousel--container__popular">
        {collectionProps.map((property) => {
          return (
            <PropertyCard
              cartItems={cartItems}
              onAddToCartHandler={onAddToCartHandler}
              onRemoveFromCartHandler={onRemoveFromCartHandler}
              size="medium"
              data={property}
            />
          );
        })}
      </div>
    </>
  );
}
