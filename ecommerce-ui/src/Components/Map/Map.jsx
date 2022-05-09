import React, { useState, useCallback } from "react";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  height: "240px",
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
    map.setCenter(center);
    map.setZoom(15);

    const icon = {
      url: "https://cdn-icons-png.flaticon.com/64/7086/7086895.png",
      scaledSize: new window.google.maps.Size(28, 28),
    };

    new window.google.maps.Marker({
      position: center,
      map: map,
      icon: icon,
    });
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const defaultMapOptions = {
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaultMapOptions}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <>Map view not available</>
  );
}
