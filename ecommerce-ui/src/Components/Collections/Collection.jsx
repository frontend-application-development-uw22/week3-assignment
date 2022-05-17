import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
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
            key={property.id}
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

Collection.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onAddToCartHandler: PropTypes.func.isRequired,
  onRemoveFromCartHandler: PropTypes.func.isRequired,
  propertyData: PropTypes.array.isRequired,
  locationData: PropTypes.array.isRequired,
};
