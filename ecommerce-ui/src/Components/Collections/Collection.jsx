import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import PropertyCard from "../Property/PropertyCard";

export default function Collection({
  cartItems,
  onAddToCartHandler,
  onRemoveFromCartHandler,
  propertyData,
  locationData,
}) {
  const { city } = useParams();

  const collectionProps = propertyData.filter((property) => {
    return locationData[property.location].slug === city;
  });

  return (
    <Carousel title="Popular {city} getaways">
      {collectionProps.map((property) => {
        return (
          <PropertyCard
            cartItems={cartItems}
            onAddToCartHandler={onAddToCartHandler}
            onRemoveFromCartHandler={onRemoveFromCartHandler}
            size="medium"
            propertyData={property}
          />
        );
      })}
    </Carousel>
  );
}
