import React, { useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = locationData.filter((location) => location.slug === city)[0];
  const locationId = location.id;

  const collectionProps = propertyData.filter((property) => {
    return property.location === locationId;
  });

  return (
    <Carousel title={`Popular ${location.city} getaways`}>
      {collectionProps.map((property) => {
        return (
          <PropertyCard
            cartItems={cartItems}
            onAddToCartHandler={onAddToCartHandler}
            onRemoveFromCartHandler={onRemoveFromCartHandler}
            size="medium"
            propertyData={property}
            locationData={locationData}
          />
        );
      })}
    </Carousel>
  );
}
