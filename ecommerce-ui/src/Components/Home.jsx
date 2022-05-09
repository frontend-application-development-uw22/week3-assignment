import React from "react";
import PropertySummaryCard from "./Property/PropertySummaryCard";
import CollectionCard from "./Collections/CollectionCard";
import "./Home.css";

export default function Property({
  cartItems,
  onAddToCartHandler,
  onRemoveFromCartHandler,
  propertyData,
  collectionsData,
}) {
  let featuredProps = propertyData.filter((property) => {
    return property.rating.stars >= 4 && property.rating.reviews >= 80;
  });

  featuredProps = featuredProps.slice(0, 4);

  const featuredCollections = collectionsData.filter((collection) => {
    return collection.id <= 3;
  });

  return (
    <>
      <div className="hero--container">
        <h1 className="hero--headline">Find your dream getaway today</h1>
      </div>
      <h3 className="carousel--header">Popular getaways</h3>
      <div className="carousel--container carousel--container__popular">
        {featuredProps.map((property) => {
          return (
            <PropertySummaryCard
              cartItems={cartItems}
              onAddToCartHandler={onAddToCartHandler}
              onRemoveFromCartHandler={onRemoveFromCartHandler}
              size="medium"
              data={property}
            />
          );
        })}
      </div>
      <h3 className="carousel--header">Popular locations</h3>
      <div className="carousel--container carousel--container__collections">
        {featuredCollections.map((collection) => {
          return (
            <CollectionCard
              onAddToCartHandler={onAddToCartHandler}
              size="medium"
              data={collection}
            />
          );
        })}
      </div>
    </>
  );
}
