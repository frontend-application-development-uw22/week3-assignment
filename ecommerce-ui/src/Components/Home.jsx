import React from "react";
import PropertyCard from "./Property/PropertyCard";
import CollectionCard from "./Collections/CollectionCard";
import "./Home.css";

export default function Property({ propertyData, collectionsData }) {
  let featuredProps = propertyData.filter((property) => {
    return property.rating.stars >= 4 && property.rating.reviews >= 80;
  });

  featuredProps = featuredProps.slice(0, 4);

  const featuredCollections = collectionsData.filter((collection) => {
    return collection.id <= 4;
  });

  return (
    <>
      <div className="hero--container">
        <h1 className="hero--headline">Your dream getaway is out there</h1>
      </div>
      <h3>Popular getaways</h3>
      <div className="carousel--container carousel--container__popular">
        {featuredProps.map((property) => {
          return <PropertyCard size="medium" data={property} />;
        })}
      </div>
      <h3>Popular locations</h3>
      <div className="carousel--container carousel--container__popular">
        {featuredCollections.map((collection) => {
          return <CollectionCard size="medium" data={collection} />;
        })}
      </div>
    </>
  );
}
