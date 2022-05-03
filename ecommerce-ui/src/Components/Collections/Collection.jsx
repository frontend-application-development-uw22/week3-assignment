import React from "react";
import { useParams } from "react-router-dom";

export default function Property({ data }) {
  const city = useParams.city;
  return (
    <>
      <h1>Find your dream getaway</h1>
      <h3>Popular getaways</h3>
      {/* <div className="carousel--container carousel--container__popular">
        {featuredProps.map((property) => {
          return <PropertyCard size="medium" data={property} />;
        })}
      </div> */}
    </>
  );
}
