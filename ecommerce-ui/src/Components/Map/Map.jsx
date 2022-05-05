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
    const bounds = new window.google.maps.LatLngBounds();
    map.setCenter(center);
    map.setZoom(15);
    const icon = {
      url: "https://cdn-icons-png.flaticon.com/32/7290/7290568.png",
      size: new window.google.maps.Size(32, 32),
    };
    new window.google.maps.Marker({
      position: center,
      map,
      icon: icon,
    });
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <>Map view not available</>
  );
}
