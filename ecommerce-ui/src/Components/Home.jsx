import React from "react";
import PropTypes from "prop-types";
import PropertyCard from "./Property/PropertyCard";
import CollectionCard from "./Collections/CollectionCard";
import Carousel from "./Carousel/Carousel";
import "./Home.css";

export default function Home({
  cartItems,
  onAddToCartHandler,
  onRemoveFromCartHandler,
  propertyData,
  locationData,
}) {
  let featuredProps = propertyData.filter((property) => {
    return property.rating.stars >= 4 && property.rating.reviews >= 80;
  });

  featuredProps = featuredProps.slice(0, 8);

  const featuredLocations = locationData.filter((location) => {
    return location.id <= 3;
  });

  return (
    <>
      <div className="hero--container">
        <h1 className="hero--headline">Find your dream getaway today</h1>
      </div>

      <Carousel title="Featured Properties">
        {featuredProps.map((property) => {
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

      <Carousel title="Popular Locations">
        {featuredLocations.map((collection) => {
          return (
            <CollectionCard
              key={collection.id}
              onAddToCartHandler={onAddToCartHandler}
              size="medium"
              locationData={collection}
            />
          );
        })}
      </Carousel>
    </>
  );
}

Home.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onAddToCartHandler: PropTypes.func.isRequired,
  onRemoveFromCartHandler: PropTypes.func.isRequired,
  propertyData: PropTypes.array.isRequired,
  locationData: PropTypes.array.isRequired,
};
