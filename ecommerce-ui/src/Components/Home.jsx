import React from "react";
import PropertyCard from "./Property/PropertyCard";
import CollectionCard from "./Collections/CollectionCard";
import Carousel from "./Carousel/Carousel";
import "./Home.css";

export default function Property({
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
              onAddToCartHandler={onAddToCartHandler}
              size="medium"
              locationData={collection}
            />
          );
        })}
      </Carousel>

      <div className="footer">
        <h5 className="footer__copy">Copyright 2022 | All rights reserved</h5>
      </div>
    </>
  );
}
