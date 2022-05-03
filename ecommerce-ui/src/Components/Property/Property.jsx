import React from "react";
import { useParams } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import "./Property.css";

export default function Property({ data }) {
  const { propertyId } = useParams();
  const property = data.filter((property) => property.id === +propertyId)[0];

  return (
    <>
      <PropertyCard size="large" data={property} />
    </>
  );
}
