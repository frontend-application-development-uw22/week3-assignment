import React, { useState, useCallback } from "react";
import "./Map.css";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  height: "240px",
};

export default function Map({ lat, lng, geoCodeLoaded }) {
  const center = {
    lat: lat,
    lng: lng,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(
    function callback(map) {
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
    },
    [geoCodeLoaded]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const defaultMapOptions = {
    fullscreenControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
  };

  if (!geoCodeLoaded) {
    return <h2>Map data loading...</h2>;
  } else {
    return isLoaded ? (
      <div className="map">
        <h2 className="map__title">Property Location</h2>
        <div className="map__map">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultMapOptions}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      </div>
    ) : (
      <div className="map">
        <h2 className="map__title">Property Location</h2>
        <div className="map__map">
          <h3>Map view not available at this time</h3>
        </div>
      </div>
    );
  }
}
