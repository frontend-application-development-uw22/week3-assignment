import React from "react";
import PropertyCard from "./Property/PropertyCard";
import "./Home.css";

export default function Property({ data }) {
  let featuredProps = data.filter((property) => {
    return property.rating.stars >= 4 && property.rating.reviews >= 80;
  });

  featuredProps = featuredProps.slice(0, 4);

  return (
    <>
      <h1>Find your dream getaway</h1>
      <h3>Popular getaways</h3>
      <div className="carousel--container carousel--container__popular">
        {featuredProps.map((property) => {
          return <PropertyCard size="medium" data={property} />;
        })}
      </div>
      <h3>Popular locations</h3>
    </>
  );
}
