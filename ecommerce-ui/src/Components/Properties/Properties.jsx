import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Carousel from "../Carousel/Carousel";
import PropertyCard from "../Property/PropertyCard";

export default function Properties({
  cartItems,
  onAddToCartHandler,
  onRemoveFromCartHandler,
  propertyData,
  locationData,
}) {
  let { propertyType } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const collectionProps = propertyData.filter((property) => {
    return property.houseType.toLowerCase() === propertyType.slice(0, -1);
  });

  return (
    <Carousel title={`Popular ${propertyType}`}>
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

Properties.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onAddToCartHandler: PropTypes.func.isRequired,
  onRemoveFromCartHandler: PropTypes.func.isRequired,
  propertyData: PropTypes.array.isRequired,
  locationData: PropTypes.array.isRequired,
};
