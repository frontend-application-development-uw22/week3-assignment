import React, { useState, useCallback } from "react";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "1200px",
  height: "300px",
};

export default function Map({ lat, lng }) {
  const center = {
    lat: lat,
    lng: lng,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    //map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <GoogleMap
      disableDefaultUI={true}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      zoomControl={false}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  ) : (
    <>Map view not available</>
  );
}
