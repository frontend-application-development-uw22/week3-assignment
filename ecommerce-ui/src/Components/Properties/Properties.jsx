import React from "react";
import { useParams } from "react-router-dom";

export default function Properties() {
  const params = useParams();

  return (
    <>
      <h2>Properties {params.propertiesType}</h2>
    </>
  );
}
